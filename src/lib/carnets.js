// src/lib/carnets.js - Sistema escalable de carnets

// Tipos de investigadores disponibles
const TIPOS_INVESTIGADOR = [
  'Investigador OSINT',
  'Investigador Digital', 
  'Analista de Datos',
  'Especialista en Geolocalización',
  'Verificador de Hechos',
  'Analista Forense Digital',
  'Investigador de Redes Sociales',
  'Especialista en Criptografía',
  'Analista Financiero',
  'Investigador de Campo'
];

const ESPECIALIDADES = [
  'Análisis de redes sociales',
  'Análisis forense de documentos',
  'Correlación de bases de datos públicas',
  'Verificación de ubicaciones',
  'Fact-checking y fuentes abiertas',
  'Análisis de metadatos',
  'Investigación de blockchain',
  'Análisis de tráfico web',
  'Verificación de imágenes',
  'Análisis de patrones financieros',
  'Investigación en terreno',
  'Análisis de comunicaciones',
  'Verificación de identidades',
  'Análisis de infraestructura digital'
];

// Función para generar hash único
function generateUniqueHash() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const segments = [];
  
  for (let i = 0; i < 4; i++) {
    let segment = '';
    for (let j = 0; j < 4; j++) {
      segment += chars[Math.floor(Math.random() * chars.length)];
    }
    segments.push(segment);
  }
  
  return `CA-${segments.join('-')}`;
}

// Función para generar carnet aleatorio
function generateRandomCarnet() {
  const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
                'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  
  return {
    tipo: TIPOS_INVESTIGADOR[Math.floor(Math.random() * TIPOS_INVESTIGADOR.length)],
    especialidad: ESPECIALIDADES[Math.floor(Math.random() * ESPECIALIDADES.length)],
    emitido: `${meses[Math.floor(Math.random() * meses.length)]} 2025`,
    vigencia: '2 años',
    estado: 'activo'
  };
}

// Base de datos inicial con carnets base
const baseCarnets = new Map([
  ['CA-9X7Q-13AM-77SD-42', {
    tipo: 'Investigador OSINT',
    especialidad: 'Análisis de redes sociales',
    emitido: 'Enero 2025',
    vigencia: '2 años',
    estado: 'activo'
  }],
  ['CA-8K4T-11XX-66LL-99', {
    tipo: 'Investigador Digital',
    especialidad: 'Análisis forense de documentos',
    emitido: 'Febrero 2025',
    vigencia: '2 años',
    estado: 'activo'
  }],
  ['CA-2M5P-88QR-44WW-33', {
    tipo: 'Analista de Datos',
    especialidad: 'Correlación de bases de datos públicas',
    emitido: 'Marzo 2025',
    vigencia: '2 años',
    estado: 'activo'
  }]
]);

// Generar carnets adicionales para hacer el sistema más robusto
function generateAdditionalCarnets(count = 500) {
  const additionalCarnets = new Map();
  
  for (let i = 0; i < count; i++) {
    let hash;
    do {
      hash = generateUniqueHash();
    } while (baseCarnets.has(hash) || additionalCarnets.has(hash));
    
    additionalCarnets.set(hash, generateRandomCarnet());
  }
  
  return additionalCarnets;
}

// Combinar carnets base con adicionales
const additionalCarnets = generateAdditionalCarnets();
export const carnetsDatabase = new Map([...baseCarnets, ...additionalCarnets]);

// Validación de formato
export function isValidHashFormat(hash) {
  const pattern = /^CA-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/;
  return pattern.test(hash);
}

// Verifica si existe el hash
export function verifyHashExists(hash) {
  const knownHashes = Array.from(carnetsDatabase.keys());
  return knownHashes.includes(hash);
}

// Función para obtener estadísticas
export function getCarnetsStats() {
  const total = carnetsDatabase.size;
  const tipos = {};
  const especialidades = {};
  
  for (const carnet of carnetsDatabase.values()) {
    tipos[carnet.tipo] = (tipos[carnet.tipo] || 0) + 1;
    especialidades[carnet.especialidad] = (especialidades[carnet.especialidad] || 0) + 1;
  }
  
  return {
    total,
    tipos,
    especialidades,
    activos: Array.from(carnetsDatabase.values()).filter(c => c.estado === 'activo').length
  };
}

// Función para generar nuevo carnet (para uso futuro)
export function generateNewCarnet(tipo, especialidad) {
  let hash;
  do {
    hash = generateUniqueHash();
  } while (carnetsDatabase.has(hash));
  
  const carnet = {
    tipo: tipo || TIPOS_INVESTIGADOR[Math.floor(Math.random() * TIPOS_INVESTIGADOR.length)],
    especialidad: especialidad || ESPECIALIDADES[Math.floor(Math.random() * ESPECIALIDADES.length)],
    emitido: new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' }),
    vigencia: '2 años',
    estado: 'activo'
  };
  
  carnetsDatabase.set(hash, carnet);
  return { hash, ...carnet };
}
