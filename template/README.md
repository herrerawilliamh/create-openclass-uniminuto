# Open Class UNIMINUTO · Slidev

Proyecto generado con `create-openclass-uniminuto` o creado desde la plantilla `openclass-uniminuto-template`.

Este curso está diseñado para organizar una Open Class de **8 semanas**, con generación progresiva de cada semana, portal principal, lanzadores individuales, exportación de PDF/PPTX y publicación automática en **GitHub Pages**.

---

## Crear el curso dentro de un repositorio ya creado en GitHub

Si primero creaste el repositorio en GitHub, clónalo y aplica la plantilla desde npm dentro de la carpeta del repositorio:

```bash
git clone https://github.com/herrerawilliamh/openclass-iot.git
cd openclass-iot
npm create openclass-uniminuto@latest . -- --iot
npm install
npm run semana -- 1
npm run dev
```

Si el repositorio ya tenía archivos iniciales y deseas reemplazarlos por los de la plantilla:

```bash
npm create openclass-uniminuto@latest . -- --iot --force
```

La sincronización con GitHub se hace después con Git:

```bash
git add -A
git commit -m "Configura Open Class"
git push
```

---

## 1. Primer uso

Instala dependencias:

```bash
npm install
```

Configura el curso desde consola:

```bash
npm run nuevo
```

Genera la primera semana:

```bash
npm run semana -- 1
```

Ejecuta el portal principal:

```bash
npm run dev
```

Una semana específica se abre con:

```bash
npm run dev:s1
npm run dev:s2
npm run dev:s3
```

También puedes abrir todas las semanas activas en varios puertos:

```bash
npm run dev:all
```

---

## 2. Tres formas de crear este curso

### Opción A · Desde npm

```bash
npm create openclass-uniminuto@latest openclass-iot -- --iot
cd openclass-iot
npm install
npm run semana -- 1
npm run dev
```

### Opción B · Desde GitHub Template

1. Entra al repositorio `openclass-uniminuto-template`.
2. Clic en **Use this template**.
3. Crea un repositorio nuevo, por ejemplo `openclass-iot`.
4. Clónalo.
5. Ejecuta los comandos del curso.

```bash
git clone https://github.com/herrerawilliamh/openclass-iot.git
cd openclass-iot
npm install
npm run nuevo
npm run semana -- 1
npm run dev
```

### Opción C · Repo creado en GitHub y curso generado en local

Esta opción combina GitHub y npm.

#### Si el repositorio fue creado desde plantilla

```bash
git clone https://github.com/herrerawilliamh/openclass-iot.git
cd openclass-iot
npm install
npm run nuevo
npm run semana -- 1
npm run dev
```

Luego:

```bash
git add -A
git commit -m "Generar semana 1"
git push
```

#### Si el repositorio está vacío

```bash
npm create openclass-uniminuto@latest openclass-iot -- --iot
cd openclass-iot
npm install
npm run semana -- 1
npm run dev
```

Después conecta el remoto:

```bash
git init
git branch -M main
git add -A
git commit -m "Publicación inicial Open Class"
git remote add origin https://github.com/herrerawilliamh/openclass-iot.git
git push -u origin main
```

---

## 3. Generar semanas una a una

El curso siempre se organiza en **8 semanas**. Puedes generarlas progresivamente.

```bash
npm run semana -- 1
npm run semana -- 2 --title "Título de la semana 2" --date "Junio 15 de 2026"
npm run semana -- 3 --title "Título de la semana 3" --theme "Tema central"
```

El comando `semana` actualiza automáticamente:

```text
openclass.config.json
slides.md
scripts/decks.mjs
package.json
curso_semanaN.md
semanas/curso_semanaN.md
```

El contenido ya editado dentro de `semanas/*.md` se conserva. Solo se sobrescribe si usas:

```bash
npm run semana -- 4 --force-content
```

Para activar únicamente una semana ya existente:

```bash
npm run semana -- 4 --only
```

---

## 4. Editar contenido académico

El contenido real de cada presentación está en:

```text
semanas/
```

Ejemplo:

```text
semanas/iot_semana1.md
semanas/iot_semana2.md
semanas/iot_semana3.md
```

Los archivos de la raíz como `iot_semana1.md` funcionan como lanzadores. Normalmente no debes editarlos manualmente.

Un lanzador raíz tiene una estructura como esta:

```md
---
theme: ./theme/uniminuto
title: Curso — Semana 1
favicon: /favicon.png
codeCopy: true
transition: fade
routerMode: hash
drawings:
  persist: false
src: ./semanas/curso_semana1.md
---
```

---

## 5. Recursos del curso

Usa estas carpetas:

```text
public/imagenes/    imágenes del curso
public/videos/      videos y recursos audiovisuales
public/descargas/   PDF, PPTX u otros descargables
public/fondos/      fondos institucionales
```

Recomendaciones:

* Guarda imágenes propias del curso en `public/imagenes/`.
* Usa nombres cortos, claros y sin espacios.
* En las diapositivas, referencia imágenes con rutas absolutas desde `public`.

Ejemplo:

```html
<img src="/imagenes/iot-semana1-arquitectura.png" alt="Arquitectura IoT" />
```

Evita rutas demasiado largas o generadas a partir de prompts completos.

---

## 6. Detección automática de semanas

El proyecto detecta automáticamente las presentaciones semanales disponibles a partir de los lanzadores ubicados en la raíz.

Ejemplo:

```text
iot_semana1.md
iot_semana2.md
gestionseguridad_semana7.md
bigdata_semana4.md
```

Cada archivo raíz debe apuntar al contenido real ubicado en `semanas/`.

El archivo `scripts/decks.mjs` detecta estos lanzadores y construye automáticamente el portal principal y todas las semanas activas.

Ya no es necesario editar manualmente `scripts/decks.mjs` para activar cada semana, siempre que el lanzador raíz exista y tenga un nombre con este patrón:

```text
curso_semanaN.md
```

Ejemplos válidos:

```text
bigdata_semana1.md
iot_semana5.md
gestionseguridad_semana7.md
percepcioncomputacional_semana8.md
```

Ejemplos que no se incluyen automáticamente:

```text
demo_semana1.md
semana1.md
presentacion.md
```

---

## 7. Construcción local

Construir el portal y las semanas activas:

```bash
npm run pages:build
```

Este comando ejecuta:

```text
npm run export:downloads
npm run build:all
```

Por tanto, genera:

```text
dist/                         sitio estático final
dist/semanas/                 semanas publicadas
public/descargas/*.pdf        descargas PDF
public/descargas/*.pptx       descargas PPTX
dist/.nojekyll                archivo requerido para GitHub Pages
```

Previsualizar la versión estática:

```bash
npm run pages:preview
```

Revisar configuración para GitHub Pages:

```bash
npm run pages:check
```

También puedes probar directamente la carpeta `dist` con:

```bash
npx serve dist
```

---

## 8. Publicar en GitHub Pages

Este proyecto ya incluye:

```text
.github/workflows/deploy.yml
```

El workflow construye el sitio y publica la carpeta `dist` en GitHub Pages.

En GitHub configura:

```text
Settings → Pages → Build and deployment → Source → GitHub Actions
```

Luego sube cambios:

```bash
git add -A
git commit -m "Actualizar Open Class"
git push
```

Cada `push` a `main` construirá y publicará el sitio automáticamente.

La URL esperada será:

```text
https://herrerawilliamh.github.io/NOMBRE-DEL-REPOSITORIO/
```

Ejemplo:

```text
https://herrerawilliamh.github.io/openclass-iot/
```

Las semanas quedarán disponibles en rutas como:

```text
https://herrerawilliamh.github.io/openclass-iot/semanas/iot_semana1/
https://herrerawilliamh.github.io/openclass-iot/semanas/iot_semana2/
```

---

## 9. Actualizar tema, layouts y scripts en un curso existente

Si el curso ya existe y solo quieres actualizar tema, layouts, scripts de build, workflow y documentación base sin tocar el contenido académico de `semanas/`, usa:

```bash
npm create openclass-uniminuto@latest . -- --update-theme
```

Este comando actualiza recursos seguros como:

```text
README.md
theme/uniminuto/
scripts/decks.mjs
scripts/dev-all.mjs
scripts/build-site.mjs
scripts/build-incremental.mjs
scripts/export-downloads.mjs
scripts/export-incremental.mjs
scripts/preparar-github-pages.mjs
scripts/semana.mjs
.github/workflows/deploy.yml
public/imagenes/avion.png
```

No debería sobrescribir:

```text
slides.md
openclass.config.json
semanas/*.md
public/imagenes propias del curso
```

Después de actualizar, revisa:

```bash
git status
npm run pages:build
```

Si todo funciona:

```bash
git add -A
git commit -m "Actualizar tema institucional Open Class"
git push
```

---

## 10. Flujo semanal sugerido

Semana 1:

```bash
npm run semana -- 1 --title "Introducción al curso"
git add -A
git commit -m "Agregar semana 1"
git push
```

Semana 2:

```bash
npm run semana -- 2 --title "Tema de la semana 2"
git add -A
git commit -m "Agregar semana 2"
git push
```

Repite el proceso hasta la semana 8.

---

## 11. Comandos útiles

| Comando                   | Uso                                             |
| ------------------------- | ----------------------------------------------- |
| `npm run nuevo`           | Configura un curso desde consola                |
| `npm run semana -- 1`     | Genera o activa la semana 1                     |
| `npm run dev`             | Abre el portal principal                        |
| `npm run dev:s1`          | Abre la semana 1                                |
| `npm run dev:all`         | Abre portal y semanas activas en varios puertos |
| `npm run pages:check`     | Revisa configuración para GitHub Pages          |
| `npm run pages:build`     | Construye el sitio estático y exporta descargas |
| `npm run pages:preview`   | Previsualiza la versión publicada               |
| `npm run publicar`        | Ejecuta exportaciones y construcción local      |
| `npm run actualizar:tema` | Actualiza tema/layouts/scripts desde npm        |

---

## 12. Archivos clave

```text
openclass.config.json          configuración general del curso
slides.md                      portal principal
semanas/                       contenido académico real
curso_semanaN.md               lanzadores raíz de cada semana
scripts/decks.mjs              detección automática de semanas activas
scripts/build-site.mjs         construcción de portal y semanas
scripts/export-downloads.mjs   exportación de PDF/PPTX
.github/workflows/deploy.yml   despliegue automático en GitHub Pages
theme/uniminuto/               tema institucional UNIMINUTO
public/imagenes/               imágenes del curso
public/descargas/              archivos PDF/PPTX exportados
```

---

## 13. Recomendaciones antes de publicar

Antes de hacer `git push`, revisa:

```bash
git status
npm run pages:build
```

Confirma que existan las semanas generadas:

```bash
ls dist/semanas
```

En Windows PowerShell:

```powershell
Get-ChildItem .\dist\semanas | Select-Object Name
```

Confirma que una semana específica exista:

```powershell
Test-Path .\dist\semanas\curso_semana1\index.html
```

Si responde `True`, esa semana fue generada correctamente.

---

## 14. Problemas comunes

### La semana abre localmente, pero no aparece en GitHub Pages

Verifica que exista el lanzador raíz:

```text
curso_semanaN.md
```

y que apunte al archivo real:

```text
semanas/curso_semanaN.md
```

Luego ejecuta:

```bash
npm run pages:build
```

### Error con imágenes

Si aparece un error como:

```text
Failed to resolve import "/imagenes/..."
```

revisa que el archivo exista en:

```text
public/imagenes/
```

y que la ruta usada en la diapositiva tenga extensión correcta.

Ejemplo válido:

```html
<img src="/imagenes/semana701.png" alt="Imagen de apoyo" />
```

### GitHub Pages no publica

Revisa:

```text
Settings → Pages → Source → GitHub Actions
Actions → Deploy Open Class to GitHub Pages
```

También puedes ejecutar:

```bash
npm run pages:check
```

### Warnings de build

Algunos mensajes informativos no bloquean la publicación si el build termina con:

```text
✓ built
✓ dist/.nojekyll creado para GitHub Pages.
```

---

## 15. Actualizar este proyecto desde el generador local

Durante desarrollo del generador, también puedes aplicar la actualización de tema desde una copia local:

```bash
node ../create-openclass-uniminuto/bin/create-openclass-uniminuto.mjs . --update-theme
```

En Windows, desde una carpeta de curso ubicada dentro de `D:\OpenClass`:

```powershell
node ..\create-openclass-uniminuto\bin\create-openclass-uniminuto.mjs . --update-theme
```

Esto es útil para probar cambios antes de publicar una nueva versión npm.
