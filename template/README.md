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

Para activar únicamente una semana:

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

---

## 5. Recursos del curso

Usa estas carpetas:

```text
public/imagenes/    imágenes del curso
public/videos/      videos y recursos audiovisuales
public/descargas/   PDF, PPTX u otros descargables
public/fondos/      fondos institucionales
```

---

## 6. Construcción local

Construir el portal y las semanas activas:

```bash
npm run pages:build
```

Previsualizar la versión estática:

```bash
npm run pages:preview
```

Revisar configuración para GitHub Pages:

```bash
npm run pages:check
```

---

## 7. Publicar en GitHub Pages

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

---

## 8. Flujo semanal sugerido

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

## 9. Comandos útiles

| Comando | Uso |
|---|---|
| `npm run nuevo` | Configura un curso desde consola |
| `npm run semana -- 1` | Genera o activa la semana 1 |
| `npm run dev` | Abre el portal principal |
| `npm run dev:s1` | Abre la semana 1 |
| `npm run pages:check` | Revisa configuración para GitHub Pages |
| `npm run pages:build` | Construye el sitio estático y exporta descargas |
| `npm run pages:preview` | Previsualiza la versión publicada |
| `npm run publicar` | Ejecuta exportaciones y construcción local |

---

## 10. Archivos clave

```text
openclass.config.json       configuración general del curso
slides.md                   portal principal
semanas/                    contenido académico real
scripts/decks.mjs           listado de presentaciones activas
.github/workflows/deploy.yml despliegue automático en GitHub Pages
```
