---
title: "Protege tus fuentes: Guía clara para usar PGP con ProtonMail"
date: "2025-07-24"
summary: "Proteger la identidad de quienes denuncian corrupción, violencia o crimen organizado es una responsabilidad ética. Esta guía práctica explica cómo cifrar tus mensajes con PGP y por qué usamos ProtonMail como canal seguro."
tags: ["seguridad digital", "PGP", "protección de fuentes", "filtraciones", "periodismo"]
series: "NaceAztecHorse"
layout: ../../../layouts/ArticleLayout.astro
---

# Protege tus fuentes: Cómo usar PGP con ProtonMail

Hacer periodismo en México puede costar la vida. Cada denuncia puede poner en riesgo a quien la filtra. Por eso, proteger la comunicación es una obligación. Entre 2010 y 2024, **más de 160 periodistas fueron asesinados**, muchos tras ser vulnerados digitalmente. Si eres periodista, informante o testigo, esta guía te ayudará a **enviar mensajes cifrados de forma segura**.

## ¿Qué es PGP y por qué lo usamos?

**PGP (Pretty Good Privacy)** es una herramienta de cifrado que convierte un mensaje en algo ilegible para cualquiera, excepto el destinatario. Funciona con:

- Una **clave pública** (que compartimos y tú usas para cifrar)
- Una **clave privada** (que solo nosotros usamos para descifrar)

PGP es usado por medios como **Wikileaks**, **The Intercept** y organizaciones como la **EFF** o la **Freedom of the Press Foundation**.

### Beneficios de usar PGP:
- Nadie (ni siquiera el proveedor de correo) puede leer tu mensaje
- Impide interceptaciones o falsificaciones
- Protege tu identidad si decides denunciar

## ¿Por qué elegimos ProtonMail?

**ProtonMail** es un servicio de correo basado en Suiza, con cifrado de extremo a extremo. No rastrea IPs, no vende datos, y tiene integración directa con PGP. Es fácil, gratuito y compatible con otras plataformas seguras.

### Ventajas de ProtonMail:
- Cifrado automático si escribes desde otra cuenta ProtonMail
- Permite usar PGP sin instalar nada adicional
- Código abierto y con auditorías públicas

> 📬 Nuestra dirección segura: `caballoazteca@protonmail.com`  
> 🔑 [Descargar clave pública PGP (.asc)](/pgp-key.asc)

## Casos reales en México: ¿por qué importa tanto?

- **Miroslava Breach** fue asesinada tras ser hackeada por investigar narcopolítica
- **Nevith Condés Jaramillo** murió tras enviar reportes sin cifrado
- **Fredy López Arévalo** fue atacado tras recibir amenazas por correo convencional

> 🔴 Las filtraciones inseguras han costado vidas. Cifrar puede salvarlas.

---

## ¿Cómo enviar un correo cifrado paso a paso?

### 1. Instala GPG

**Linux/macOS:**
```bash
brew install gnupg      # macOS con Homebrew
sudo apt install gnupg  # Debian/Ubuntu
```

**Windows:**
Descarga [Gpg4win](https://gpg4win.org)

### 2. Importa nuestra clave pública

```bash
gpg --keyserver keyserver.ubuntu.com --recv-keys [ID_DE_LA_LLAVE]
```

(Encuentra el ID real en nuestra [página de contacto](../../contact))

### 3. Escribe tu mensaje y cifra

```bash
echo "Tu mensaje aquí" > mensaje.txt
gpg --encrypt --armor --recipient caballoazteca@protonmail.com mensaje.txt
```

Copia el contenido generado en el archivo `.asc` y pégalo en tu correo.

### 4. Revisa el correo
- Asegúrate de enviar a: `caballoazteca@protonmail.com`
- Borra el archivo `.txt` y `.asc` de tu computadora
- Usa el navegador **Tor** o una VPN si es posible

---

## ¿Y si no sabes usar PGP?

No pasa nada. Si tienes cuenta en ProtonMail, escribe directamente desde ahí. El cifrado se activa automáticamente entre usuarios ProtonMail.

> ⚠️ Si usas Gmail, Outlook u otros correos comunes, tu mensaje **NO** estará cifrado de extremo a extremo.

---

## ¿Qué tipo de información puedes enviar?

- Corrupción en gobiernos o fiscalías
- Vínculos entre crimen organizado e inmobiliarias
- Abusos de poder, violencia institucional o desapariciones

**Tu testimonio puede detonar una investigación.**

📩 [Filtra información desde aquí](../../contact)

---

**Proteger a quien denuncia es el primer paso para cambiar lo que importa.**
