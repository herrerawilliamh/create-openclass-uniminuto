# create-openclass-uniminuto

Creador de proyectos **Open Class UNIMINUTO** basados en Slidev, con estructura institucional, generación progresiva de **8 semanas**, exportación de recursos y despliegue automático en **GitHub Pages**.

Este repositorio cumple dos funciones:

1. Publicar un paquete npm llamado `create-openclass-uniminuto`.
2. Servir como base para mantener una plantilla reutilizable de cursos Open Class.

---


## Flujo recomendado cuando el repositorio ya existe en GitHub

Este es el flujo pensado para la opción C: primero creas el repositorio en GitHub y luego generas el curso dentro de ese repositorio clonado.

```bash
git clone https://github.com/herrerawilliamh/openclass-iot.git
cd openclass-iot
npm create openclass-uniminuto@latest . -- --iot
npm install
npm run semana -- 1
npm run dev
```

Si el repositorio no está completamente vacío y quieres reemplazar archivos existentes de la plantilla, usa `--force`:

```bash
npm create openclass-uniminuto@latest . -- --iot --force
```

Después sincronizas con GitHub mediante Git, no mediante npm:

```bash
git add -A
git commit -m "Configura Open Class IoT"
git push
```

`npm create` genera o completa el proyecto; `git push` sincroniza el repositorio y activa GitHub Actions/GitHub Pages.

## 1. Nombres recomendados

### Paquete npm

```json
"name": "create-openclass-uniminuto"
```

Uso esperado después de publicarlo:

```bash
npm create openclass-uniminuto@latest openclass-iot
```

Con configuración inicial de IoT:

```bash
npm create openclass-uniminuto@latest openclass-iot -- --iot
```

La relación es esta:

```text
Paquete publicado: create-openclass-uniminuto
Comando de uso  : npm create openclass-uniminuto@latest nombre-del-curso
```

### Repositorio GitHub del generador npm

```text
herrerawilliamh/create-openclass-uniminuto
```

### Repositorio GitHub de la plantilla visual

```text
herrerawilliamh/openclass-uniminuto-template
```

Este segundo repositorio puede marcarse como **Template repository** en GitHub para crear cursos desde el botón **Use this template**.

### Repositorios de cursos generados

```text
herrerawilliamh/openclass-iot
herrerawilliamh/openclass-bigdata
herrerawilliamh/openclass-gestion-seguridad
herrerawilliamh/openclass-percepcion-computacional
```

URL esperada de GitHub Pages:

```text
https://herrerawilliamh.github.io/openclass-iot/
```

---

## 2. Estructura que genera el paquete

```text
mi-openclass/
├─ .github/
│  └─ workflows/
│     └─ deploy.yml
├─ config/
│  ├─ openclass.config.iot-ejemplo.json
│  └─ openclass.config.iot-desde-openclass-iot.json
├─ plantillas/
│  ├─ launcher.md
│  └─ semana.md
├─ public/
│  ├─ descargas/
│  ├─ fondos/
│  ├─ imagenes/
│  └─ videos/
├─ scripts/
│  ├─ generar-desde-config.mjs
│  ├─ nuevo-curso.mjs
│  ├─ semana.mjs
│  ├─ preparar-github-pages.mjs
│  ├─ build-site.mjs
│  ├─ export-downloads.mjs
│  └─ decks.mjs
├─ semanas/
├─ openclass.config.json
├─ slides.md
├─ package.json
└─ README.md
```

---

## 3. Tres formas de trabajar

### Opción A · Crear curso desde npm

Útil cuando quieres trabajar desde consola y generar todo el proyecto localmente.

```bash
npm create openclass-uniminuto@latest openclass-iot -- --iot
cd openclass-iot
npm install
npm run semana -- 1
npm run dev
```

Luego creas el repositorio en GitHub y subes el proyecto.

---

### Opción B · Crear curso desde GitHub Template

Útil cuando quieres crear el repositorio primero desde GitHub.

1. Entra al repositorio `openclass-uniminuto-template`.
2. Clic en **Use this template**.
3. Crea un repositorio nuevo, por ejemplo `openclass-iot`.
4. Clónalo en tu equipo.
5. Ejecuta los comandos del curso.

```bash
git clone https://github.com/herrerawilliamh/openclass-iot.git
cd openclass-iot
npm install
npm run nuevo
npm run semana -- 1
npm run dev
```

---

### Opción C · Crear repo en GitHub y generar curso en local

Esta es una opción híbrida y recomendada cuando quieres separar el repositorio remoto de la generación local.

Primero creas en GitHub el repositorio `openclass-iot`. Puede ser:

- desde el botón **Use this template**;
- o como repositorio vacío.

Luego, en local, tienes dos posibilidades.

#### C1. Si el repositorio fue creado desde la plantilla

```bash
git clone https://github.com/herrerawilliamh/openclass-iot.git
cd openclass-iot
npm install
npm run nuevo
npm run semana -- 1
npm run dev
```

Después subes los cambios:

```bash
git add -A
git commit -m "Generar semana 1"
git push
```

#### C2. Si el repositorio en GitHub está vacío

```bash
npm create openclass-uniminuto@latest openclass-iot -- --iot
cd openclass-iot
npm install
npm run semana -- 1
npm run dev
```

Luego conectas ese proyecto local con el repositorio remoto:

```bash
git init
git branch -M main
git add -A
git commit -m "Publicación inicial Open Class IoT"
git remote add origin https://github.com/herrerawilliamh/openclass-iot.git
git push -u origin main
```

Ambas rutas llevan al mismo resultado: un curso Open Class versionado en GitHub y publicable en GitHub Pages.

---

## 4. Publicar este generador en npm

Desde la carpeta de este paquete:

```bash
npm login
npm whoami
npm pack --dry-run
npm publish --access public
```

Después de publicar, prueba desde otra carpeta:

```bash
npm create openclass-uniminuto@latest prueba-openclass
cd prueba-openclass
npm install
npm run semana -- 1
npm run dev
```

---

## 5. Subir este generador a GitHub

Crea el repositorio:

```text
herrerawilliamh/create-openclass-uniminuto
```

Luego ejecuta:

```bash
git init
git branch -M main
git add -A
git commit -m "Versión inicial del generador Open Class UNIMINUTO"
git remote add origin https://github.com/herrerawilliamh/create-openclass-uniminuto.git
git push -u origin main
```

---

## 6. Crear el repositorio plantilla de GitHub

El repositorio plantilla debe llamarse preferiblemente:

```text
openclass-uniminuto-template
```

Para crearlo, puedes copiar el contenido de la carpeta `template/` como raíz de un nuevo repositorio:

```bash
mkdir openclass-uniminuto-template
cp -R template/. openclass-uniminuto-template/
cd openclass-uniminuto-template

git init
git branch -M main
git add -A
git commit -m "Plantilla Open Class UNIMINUTO"
git remote add origin https://github.com/herrerawilliamh/openclass-uniminuto-template.git
git push -u origin main
```

En GitHub activa:

```text
Settings → General → Template repository
```

Con eso podrás crear cursos desde:

```text
Use this template → Create a new repository
```

---

## 7. Generar semanas una a una

Cada curso tiene **8 semanas**. El comando principal es:

```bash
npm run semana -- 1
```

Ejemplos:

```bash
npm run semana -- 2 --title "Arquitectura física de soluciones IoT" --date "Junio 15 de 2026"
```

```bash
npm run semana -- 3 --title "Protocolos de comunicación" --theme "MQTT, HTTP y comunicación entre dispositivos"
```

```bash
npm run semana -- 4 --title "Integración con plataformas en la nube" --activity "Laboratorio guiado" --duration "120 minutos"
```

Activar solo una semana y desactivar las demás:

```bash
npm run semana -- 5 --only
```

Regenerar y sobrescribir el contenido interno de una semana:

```bash
npm run semana -- 6 --force-content
```

El comando `semana` actualiza:

```text
openclass.config.json
slides.md
scripts/decks.mjs
package.json
curso_semanaN.md
semanas/curso_semanaN.md
```

Por defecto conserva el contenido ya editado en `semanas/*.md`.

---

## 8. GitHub Pages

Cada curso generado incluye:

```text
.github/workflows/deploy.yml
```

El workflow realiza este proceso:

1. Clona el repositorio.
2. Configura GitHub Pages.
3. Instala Node.js.
4. Ejecuta `npm ci`.
5. Instala Chromium para exportar PDF/PPTX con Slidev.
6. Ejecuta `npm run pages:build`.
7. Sube `dist` como artefacto de GitHub Pages.
8. Publica el sitio.

En cada repositorio de curso debes activar GitHub Pages así:

```text
Settings → Pages → Build and deployment → Source → GitHub Actions
```

Después, cada `git push` a `main` publicará el sitio automáticamente.

---

## 9. Flujo semanal sugerido para un curso

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

## 10. Actualizar el generador en npm

Cambio pequeño:

```bash
npm version patch
npm publish
```

Cambio funcional compatible:

```bash
npm version minor
npm publish
```

Cambio mayor:

```bash
npm version major
npm publish
```

---

## 11. Convenciones recomendadas

| Curso | Repositorio GitHub | Nombre corto sugerido |
|---|---|---|
| Internet de las Cosas | `openclass-iot` | `iot` |
| Big Data | `openclass-bigdata` | `bigdata` |
| Gestión de Seguridad de la Información | `openclass-gestion-seguridad` | `gsi` |
| Percepción Computacional | `openclass-percepcion-computacional` | `percepcioncomputacional` |

---

## 12. Resumen operativo

Para publicar el generador:

```bash
npm publish --access public
```

Para crear un curso desde npm:

```bash
npm create openclass-uniminuto@latest openclass-iot -- --iot
```

Para crear un curso desde GitHub:

```text
Use this template → openclass-iot
```

Para generar una semana:

```bash
npm run semana -- 1
```

Para publicar en GitHub Pages:

```bash
git add -A
git commit -m "Actualizar Open Class"
git push
```
