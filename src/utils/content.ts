import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getAllSeries() {
  const baseDir = path.join(process.cwd(), 'src/pages/series');
  const seriesDirs = fs.readdirSync(baseDir).filter((name) => {
    return fs.statSync(path.join(baseDir, name)).isDirectory() && !name.startsWith('[');
  });

  return seriesDirs.map((folder) => {
    const folderPath = path.join(baseDir, folder);
    const files = fs.readdirSync(folderPath).filter(f => f.endsWith('.md'));

    const articles = files.map((file) => {
      const content = fs.readFileSync(path.join(folderPath, file), 'utf8');
      const { data } = matter(content);
      return {
        ...data,
        link: `/series/${folder}/${file.replace('.md', '')}`
      };
    });

    return {
      slug: folder,
      articles,
      title: folder
    };
  });
}

export async function getArticlesBySeries(slug: string) {
  const dir = path.resolve("./src/pages/series", slug);
  const files = fs.readdirSync(dir).filter(f => f.endsWith(".md"));
  const articles = [];
  for (const file of files) {
    const raw = fs.readFileSync(path.join(dir, file), "utf8");
    const { data } = matter(raw);
    data.link = `/series/${slug}/${file.replace(/\.md$/, "")}`;
    articles.push(data);
  }
  // Ordena artículos por fecha descendente
  articles.sort((a, b) => b.date.localeCompare(a.date));
  return articles;
}

export async function getAllTags() {
  const seriesRoot = path.resolve("./src/pages/series");
  const folders = fs.readdirSync(seriesRoot).filter(f => fs.statSync(path.join(seriesRoot, f)).isDirectory());
  const tagSet = new Set();
  for (const folder of folders) {
    const articles = await getArticlesBySeries(folder);
    for (const art of articles) {
      (art.tags || []).forEach(tag => tagSet.add(tag));
    }
  }
  return Array.from(tagSet).sort();
}

// Paginación simple
export function paginate(items, pageSize, page = 1) {
  const total = Math.ceil(items.length / pageSize);
  const start = (page - 1) * pageSize;
  return {
    items: items.slice(start, start + pageSize),
    total,
    page
  };
}
