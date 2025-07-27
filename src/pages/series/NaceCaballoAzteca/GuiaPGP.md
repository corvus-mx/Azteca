---
title: "Protejo a mis fuentes: Guía clara para usar PGP con ProtonMail"
date: "2025-07-24"
summary: "Proteger la identidad de quienes denuncian corrupción, violencia o crimen organizado es una responsabilidad ética. Esta guía práctica explica cómo cifrar mensajes con PGP y por qué uso ProtonMail como canal seguro."
tags: ["seguridad digital", "PGP", "protección de fuentes", "filtraciones", "periodismo"]
series: "NaceCaballoAzteca"
layout: ../../../layouts/ArticleLayout.astro
---

# Protejo a mis fuentes: Cómo usar PGP con ProtonMail

Hacer periodismo en México puede costarme la vida. Cada denuncia que recibo puede poner en riesgo a quien la filtra. Por eso, proteger la comunicación es una obligación. Entre 2010 y 2024, **más de 160 periodistas fueron asesinados**, muchos tras ser vulnerados digitalmente. Si eres informante o testigo, esta guía te ayudará a **enviarme mensajes cifrados de forma segura**.

## ¿Qué es PGP y por qué lo uso?

**PGP (Pretty Good Privacy)** es una herramienta de cifrado que convierte un mensaje en algo ilegible para cualquiera, excepto para mí. Funciona con:

- Una **clave pública** (que comparto y tú usas para cifrar)
- Una **clave privada** (que yo uso para descifrar)

PGP es usado por medios como **Wikileaks**, **The Intercept** y organizaciones como la **EFF** o la **Freedom of the Press Foundation**.

### ¿Por qué es útil?
- Nadie (ni siquiera tu proveedor de correo) puede leer lo que me envías
- Evita interceptaciones o falsificaciones
- Protege tu identidad si decides denunciar

## ¿Por qué uso ProtonMail?

**ProtonMail** es un servicio de correo basado en Suiza, con cifrado de extremo a extremo. No rastrea IPs, no vende datos y permite usar PGP directamente. Es fácil, gratuito y seguro.

### Ventajas que valoro:
- Cifrado automático si escribes desde otra cuenta de ProtonMail
- Permite integrar PGP sin instalar nada adicional
- Su código es abierto y ha sido auditado

> 📬 Mi dirección segura: `caballoazteca@protonmail.com`  
> 🔑 [Descargar clave pública PGP (.asc)](/pgp-key.asc)

## Casos reales: ¿por qué es urgente?

- **Miroslava Breach** fue asesinada tras ser hackeada por investigar narcopolítica
- **Nevith Condés Jaramillo** murió tras enviar reportes sin cifrado
- **Fredy López Arévalo** fue atacado luego de amenazas por correo convencional

> 🔴 Filtrar sin protección ha costado vidas. Cifrar puede salvarlas.

---

## ¿Cómo puedes enviarme un correo cifrado?

### 1. Instala GPG

**Linux/macOS:**
```bash
brew install gnupg      # macOS con Homebrew
sudo apt install gnupg  # Debian/Ubuntu
```

**Windows:**
Descarga [Gpg4win](https://gpg4win.org)

### 2. Importa mi clave pública

```bash
gpg --keyserver keyserver.ubuntu.com --recv-keys [ID_DE_LA_LLAVE]
```

(Encuentra el ID en mi [página de contacto](../../contact))

### 3. Escribe tu mensaje y cifralo

```bash
echo "Tu mensaje aquí" > mensaje.txt
gpg --encrypt --armor --recipient caballoazteca@protonmail.com mensaje.txt
```

Copia el contenido generado en el archivo `.asc` y pégalo en tu correo.

### 4. Confirma la dirección y borra rastros
- Escribe a: `caballoazteca@protonmail.com`
- Borra los archivos `.txt` y `.asc` de tu dispositivo
- Usa Tor o VPN si puedes

---

## ¿Y si no sabes usar PGP?

No pasa nada. Si tienes ProtonMail, puedes escribirme directamente desde ahí. El cifrado extremo a extremo se activa automáticamente.

> ⚠️ Si usas Gmail, Outlook u otro correo común, tus mensajes **no estarán cifrados** completamente.

---

## ¿Qué tipo de información puedes enviarme?

- Corrupción en instituciones públicas
- Vínculos entre crimen organizado e inmobiliarias
- Abusos de poder, violencia institucional o desapariciones

**Tu testimonio puede iniciar una investigación.**

📩 [Envíame tu información segura →](../../contact)

---
**Protegerte es lo mínimo que puedo hacer si decides contarme la verdad.**
