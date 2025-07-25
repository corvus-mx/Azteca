---
title: "Proteccion a fuentes: Guía práctica para usar PGP con ProtonMail"
date: "2025-07-24"
summary: "La protección de fuentes es vital en el periodismo de investigación. En este artículo explicamos cómo utilizar PGP para asegurar comunicaciones con AztecHorse, con énfasis en el uso de ProtonMail y en los riesgos reales que enfrentan periodistas y denunciantes en México."
tags: ["seguridad digital", "PGP", "protección de fuentes", "filtraciones", "periodismo"]
series: "NaceAztecHorse"
layout: ../../../layouts/ArticleLayout.astro
---

# Protegemos a las fuentes: Guía práctica para usar PGP con ProtonMail

En México, el periodismo no solo exige compromiso, sino valentía. Cada denuncia, cada investigación que toca intereses criminales o políticos, se convierte en un riesgo tangible. Según **Artículo 19**, entre 2010 y 2024 más de **161 periodistas fueron asesinados** en el país, muchos de ellos tras haber sido víctimas de filtraciones, hackeos o persecución digital. En este contexto, la seguridad digital ya no es una opción: **es una obligación ética para proteger a nuestras fuentes y a nosotros mismos**.

## ¿Qué es PGP y por qué importa?

**PGP (Pretty Good Privacy)** es una tecnología de cifrado que permite enviar correos electrónicos y archivos de manera que solo el destinatario pueda leerlos. Funciona con un par de llaves: una pública (que compartes) y una privada (que proteges).

Usar PGP garantiza que:

- Ningún proveedor de correo (ni siquiera ProtonMail) pueda leer tus mensajes.
- Nadie pueda interceptar o falsificar comunicaciones con AztecHorse.
- Se preserve la confidencialidad de denuncias sensibles y la integridad de las fuentes.

PGP es un estándar utilizado por organizaciones como **Wikileaks, The Intercept y ProPublica**, y **recomendado por Electronic Frontier Foundation y Freedom of the Press Foundation**.

## Casos reales en México: ¿por qué es urgente?

La falta de cifrado ha costado vidas. Algunos ejemplos:

- **Miroslava Breach (2017)** fue asesinada en Chihuahua tras publicar reportajes sobre narcopolítica. Su computadora y correos fueron vulnerados antes de su ejecución.
- **Nevith Condés Jaramillo (2019)**, periodista del Estado de México, fue amenazado tras enviar reportes por correo sin cifrar. Días después fue encontrado muerto con heridas de arma blanca.
- **Fredy López Arévalo (2021)**, asesinado en Chiapas, había recibido amenazas por investigaciones enviadas desde correos convencionales.

Estos casos revelan un patrón: **las filtraciones digitales son tan letales como una bala**.

## ¿Por qué usar ProtonMail?

**ProtonMail** es un servicio de correo cifrado de extremo a extremo con sede en Suiza, fuera de la jurisdicción de gobiernos represivos. No guarda logs de IP, no escanea tu contenido, y permite integrar PGP de forma sencilla.

En AztecHorse **preferimos ProtonMail para toda comunicación segura** porque:

- Es fácil de usar y gratuito.
- Soporta PGP de forma nativa.
- Tiene código abierto y auditorías públicas.
- No comparte datos con gobiernos ni corporaciones.

> 💡 **Nota:** Aunque aceptamos otros canales cifrados como Tox y Signal, **ProtonMail + PGP es nuestra vía principal de contacto seguro**.

## Cómo enviar un correo cifrado a AztecHorse usando PGP

### 1. Instala GPG en tu sistema

**Linux/macOS:**

```bash
brew install gnupg      # para macOS con Homebrew
sudo apt install gnupg  # para Debian/Ubuntu
```
## Windows

Descarga **Gpg4win** desde [https://gpg4win.org](https://gpg4win.org)

## 2. Importa nuestra clave pública

Copia nuestra clave pública desde la sección [Contacto](../../contact) o descárgala desde un keyserver:

```bash
gpg --keyserver keyserver.ubuntu.com --recv-keys [ID_DE_LA_LLAVE]
```

Reemplaza `[ID_DE_LA_LLAVE]` por el ID real que encontrarás en nuestro contacto.

## 3. Cifra tu mensaje

Guarda tu mensaje en un archivo `mensaje.txt` y luego ejecuta:

```bash
gpg --encrypt --armor --recipient aztechorse@protonmail.com mensaje.txt
```

Esto generará un archivo `.asc` que puedes pegar directamente en tu correo desde cualquier cuenta (de preferencia desde tu propia cuenta de ProtonMail para mayor compatibilidad).

## 4. Verifica la dirección

Asegúrate de que estás escribiendo al correo correcto:

📧 `aztechorse@protonmail.com`  
⚠️ Solo confía en direcciones confirmadas en nuestro sitio oficial.

## 5. Borra tus rastros

- Elimina los archivos `.txt` y `.asc` de tu computadora.  
- Usa modo incógnito o navegador **Tor** si tu dispositivo no es seguro.  
- Evita usar redes Wi-Fi públicas o institucionales.

---

## ¿Y si no sé usar PGP?

No te preocupes. Puedes escribirnos desde **ProtonMail a ProtonMail**, lo cual activa cifrado automático extremo a extremo sin necesidad de claves manuales.

> ⚠️ Si nos escribes desde una cuenta convencional (Gmail, Outlook), tus mensajes **NO** estarán cifrados de extremo a extremo.

---

## Seguridad digital no es paranoia: es supervivencia

No basta con investigar. **Tenemos que protegernos mutuamente.**

Cada denuncia que recibimos será tratada con confidencialidad. Si tienes información sobre:

- Corrupción en gobiernos locales  
- Tráfico de tierras o desplazamientos  
- Vínculos entre crimen organizado e inmobiliarias  
- Violencia de género o represión  

**No te calles. Escríbenos.**

📩 [Envíanos tu denuncia segura →](../../contact)

---

## Bibliografía y fuentes

- Artículo 19 México: https://articulo19.org  
- Freedom of the Press Foundation: https://freedom.press  
- Reporte de amenazas digitales a periodistas 2023 – SocialTIC  
- Guía de cifrado EFF: https://ssd.eff.org  
- Datos de feminicidios y desapariciones – INEGI, SESNSP  
- Reporte ONU DDHH sobre desplazamientos por megaproyectos (Tren Maya)
