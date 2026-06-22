# Open Class UNIMINUTO Template

Plantilla base para construir presentaciones académicas tipo **Open Class** con Slidev, tema institucional UNIMINUTO, semanas independientes, portal principal, exportación a PDF/PPTX y despliegue automático en GitHub Pages.

Esta plantilla está pensada para cursos universitarios organizados por semanas. Cada semana se desarrolla como una presentación Slidev independiente, pero todas se integran en un portal principal generado automáticamente.

---

## 1. ¿Qué contiene esta plantilla?

La estructura general del proyecto es:

```text
.
├─ .github/
│  └─ workflows/
│     └─ deploy.yml
├─ openclass.config.json
├─ package.json
├─ slides.md
├─ plantillas/
│  ├─ launcher.md
│  └─ semana.md
├─ public/
│  ├─ favicon.png
│  ├─ fondos/
│  ├─ imagenes/
│  ├─ descargas/
│  └─ videos/
├─ scripts/
│  ├─ generar-desde-config.mjs
│  ├─ semana.mjs
│  ├─ decks.mjs
│  ├─ build-site.mjs
│  ├─ export-downloads.mjs
│  ├─ preparar-github-pages.mjs
│  ├─ publicar.mjs
│  └─ nuevo-curso.mjs
├─ semanas/
└─ theme/
   └─ uniminuto/
```

---

## 2. Recursos visuales obligatorios

El tema institucional requiere estos archivos:

```text
public/fondos/slide-01-portada.png
public/fondos/slide-05-template.png
public/fondos/slide-06-cierre.png
public/imagenes/avion.png
public/imagenes/favicon.png
public/favicon.png
```

`public/favicon.png` se usa como favicon del navegador.

`public/imagenes/favicon.png` puede usarse como imagen institucional dentro de las diapositivas.

Las imágenes académicas propias de cada curso deben ubicarse preferiblemente en:

```text
public/imagenes/
```

---

## 3. Concepto general de funcionamiento

La fuente principal de configuración es:

```text
openclass.config.json
```

Desde ese archivo se definen:

* Nombre corto del curso.
* Nombre completo del curso.
* Descripción general.
* Número total de semanas.
* Semanas activas.
* Título, fecha, tema y actividad de cada semana.

Las semanas activas se controlan en:

```json
"generation": {
  "activeWeeks": [1, 2, 3]
}
```

Solo las semanas incluidas en `activeWeeks` aparecen en el portal, se exportan y se construyen para GitHub Pages.

---

## 4. Archivos principales

### `slides.md`

Portal principal del curso. Se genera automáticamente con:

```bash
npm run config
```

No se recomienda editarlo manualmente, porque puede ser reemplazado por el generador.

### `curso_semanaN.md`

Archivo lanzador de cada semana. Incluye la configuración global de Slidev y referencia el contenido real desde `semanas/`.

Ejemplo:

```text
demo_semana1.md
```

### `semanas/curso_semanaN.md`

Contenido académico real de la semana.

Ejemplo:

```text
semanas/demo_semana1.md
```

Este archivo no se sobrescribe por defecto. Eso permite conservar el contenido diseñado por el docente.

### `plantillas/semana.md`

Plantilla base usada al crear una semana nueva. Incluye ejemplos de layouts, listas, revelado progresivo con `v-click` y estructuras frecuentes de Open Class.

### `plantillas/launcher.md`

Plantilla del archivo lanzador raíz de cada semana.

---

## 5. Caso de uso 1: crear un curso desde GitHub Template

Este caso se recomienda cuando se quiere iniciar un curso directamente desde GitHub.

### Paso 1. Crear repositorio desde la plantilla

En GitHub:

```text
Use this template → Create a new repository
```

Nombre sugerido:

```text
openclass-nombrecurso
```

Ejemplos:

```text
openclass-iot
openclass-bigdata
openclass-gestionseguridad
```

### Paso 2. Clonar el repositorio

```bash
git clone https://github.com/TU_USUARIO/openclass-nombrecurso.git
cd openclass-nombrecurso
```

### Paso 3. Instalar dependencias

```bash
npm install
```

### Paso 4. Editar `openclass.config.json`

Cambiar:

```json
{
  "course": {
    "shortName": "nombrecurso",
    "fullName": "Nombre completo del curso",
    "year": "2026",
    "description": "Descripción general del curso.",
    "openClassLabel": "Open Class"
  }
}
```

### Paso 5. Generar estructura del curso

```bash
npm run config
```

### Paso 6. Activar semanas

```bash
npm run semana -- 1
npm run semana -- 2
npm run semana -- 3
```

### Paso 7. Probar localmente

```bash
npm run dev
```

Para una semana específica:

```bash
npm run dev:s1
```

### Paso 8. Construir para GitHub Pages

```bash
npm run pages:build
```

### Paso 9. Publicar

```bash
git add -A
git commit -m "Publicación inicial Open Class"
git push
```

En GitHub:

```text
Settings → Pages → Build and deployment → Source: GitHub Actions
```

---

## 6. Caso de uso 2: crear un curso con npm

Este caso se recomienda cuando se quiere crear el curso desde consola usando el generador publicado en npm.

### Paso 1. Crear carpeta del curso

```bash
mkdir openclass-nombrecurso
cd openclass-nombrecurso
```

### Paso 2. Ejecutar el generador

```bash
npm create openclass-uniminuto@latest .
```

### Paso 3. Instalar dependencias

```bash
npm install
```

### Paso 4. Configurar el curso

Puedes editar manualmente:

```text
openclass.config.json
```

o ejecutar:

```bash
npm run nuevo
```

### Paso 5. Generar curso

```bash
npm run config
```

### Paso 6. Probar y construir

```bash
npm run dev
npm run pages:build
```

### Paso 7. Crear repositorio remoto

```bash
git init
git branch -M main
git remote add origin https://github.com/TU_USUARIO/openclass-nombrecurso.git
git add -A
git commit -m "Publicación inicial Open Class"
git push -u origin main
```

---

## 7. Caso de uso 3: crear desde GitHub Template y sincronizar con npm

Este caso se recomienda cuando ya existe un repositorio creado desde la plantilla de GitHub, pero se quiere actualizar después con la versión más reciente publicada en npm.

### Paso 1. Crear el repositorio desde GitHub Template

Usar:

```text
Use this template → Create a new repository
```

### Paso 2. Clonar localmente

```bash
git clone https://github.com/TU_USUARIO/openclass-nombrecurso.git
cd openclass-nombrecurso
```

### Paso 3. Instalar dependencias

```bash
npm install
```

### Paso 4. Actualizar infraestructura desde npm

```bash
npm create openclass-uniminuto@latest . -- --update-theme
```

Este comando debe actualizar:

* Tema institucional.
* Layouts.
* Componentes.
* Scripts.
* Plantillas.
* Workflow de GitHub Pages.

No debe sobrescribir el contenido académico existente en:

```text
semanas/
```

### Paso 5. Regenerar configuración

```bash
npm run config
```

### Paso 6. Validar GitHub Pages

```bash
npm run pages:check
npm run pages:build
```

### Paso 7. Publicar cambios

```bash
git add -A
git commit -m "Actualiza infraestructura Open Class"
git push
```

---

## 8. Comandos principales

### Generar portal, lanzadores, scripts y decks

```bash
npm run config
```

### Activar una semana

```bash
npm run semana -- 4
```

### Activar una semana y cambiar metadatos

```bash
npm run semana -- 4 --title "Título de la semana" --date "Junio 20 de 2026"
```

### Forzar sobrescritura del contenido de una semana

```bash
npm run semana -- 4 --force-content
```

Usar con cuidado, porque puede reemplazar el archivo en:

```text
semanas/
```

### Ver portal principal

```bash
npm run dev
```

### Ver una semana específica

```bash
npm run dev:s1
```

### Exportar PDF y PPTX

```bash
npm run export:downloads
```

### Construir sitio completo

```bash
npm run build:all
```

### Construir para GitHub Pages

```bash
npm run pages:build
```

### Publicar cambios en GitHub

```bash
npm run publicar
```

---

## 9. Flujo recomendado para crear una nueva semana

```bash
npm run semana -- 5
```

Luego editar:

```text
semanas/nombrecurso_semana5.md
```

Agregar imágenes en:

```text
public/imagenes/
```

Probar:

```bash
npm run dev:s5
```

Construir:

```bash
npm run pages:build
```

Publicar:

```bash
npm run publicar
```

---

## 10. Layouts disponibles

Los layouts disponibles en el tema son:

```text
slide-01-portada
slide-02-titulo
slide-03-imagen-izquierda
slide-04-imagen-derecha
slide-05-titulo-superior-texto-derecha
slide-06-titulo-superior-texto-izquierda
slide-07-multimedia-con-titulo
slide-08-titulo-texto
slide-09-objetivos
slide-10-titulo-dos-columnas
slide-11-dos-titulos-dos-columnas
slide-12-cierre
slide-codigo
```

La plantilla:

```text
plantillas/semana.md
```

incluye ejemplos de uso para cada layout.

---

## 11. Listas, v-clicks y ajuste automático de contenido

El tema institucional incluye soporte visual para listas no ordenadas, listas numéricas, listas alfabéticas y listas romanas.

### Listas no ordenadas

Markdown permite crear listas no ordenadas con `*`, `-` o `+`.

```md
* Primer punto
* Segundo punto
* Tercer punto
```

También es válido:

```md
- Primer punto
- Segundo punto
- Tercer punto
```

Ambas formas se renderizan como una lista HTML tipo `ul`.

### Listas ordenadas numéricas

Para listas ordenadas numéricas, usa Markdown con números:

```md
1. Primer paso
2. Segundo paso
3. Tercer paso
```

### Listas alfabéticas

Para listas con letras mayúsculas o minúsculas, se recomienda usar HTML dentro de la diapositiva.

```html
<ol type="A">
  <li>Primer criterio</li>
  <li>Segundo criterio</li>
  <li>Tercer criterio</li>
</ol>
```

```html
<ol type="a">
  <li>Primera opción</li>
  <li>Segunda opción</li>
  <li>Tercera opción</li>
</ol>
```

### Listas romanas

```html
<ol type="I">
  <li>Primera fase</li>
  <li>Segunda fase</li>
  <li>Tercera fase</li>
</ol>
```

```html
<ol type="i">
  <li>Primer componente</li>
  <li>Segundo componente</li>
  <li>Tercer componente</li>
</ol>
```

### Revelar elementos con clics

Para revelar una lista punto por punto:

```md
<v-clicks>

- Primer punto
- Segundo punto
- Tercer punto

</v-clicks>
```

Para controlar manualmente cada elemento:

```html
<ul>
  <li v-click>Primer punto</li>
  <li v-click>Segundo punto</li>
  <li v-click>Tercer punto</li>
</ul>
```

Para títulos, etiquetas o párrafos sueltos:

```html
<p v-click><strong>Instrucciones:</strong></p>

<ol>
  <li v-click>Primer paso.</li>
  <li v-click>Segundo paso.</li>
</ol>

<p v-click><strong>Producto:</strong> evidencia esperada de la actividad.</p>
```

Para revelar bloques completos:

```md
<div v-click>

**Instrucciones:**

</div>

<div v-click>

1. Primer paso de la actividad.

</div>

<div v-click>

**Producto:** resultado esperado.

</div>
```

### Ajuste automático de contenido

Los layouts principales usan `AutoFitText`, un componente que intenta ajustar el tamaño del texto al área disponible.

Cuando una diapositiva usa `v-click`, el contenido visible cambia con cada clic. Si el valor `max` del texto es demasiado alto, el contenido puede verse muy grande cuando hay pocos elementos visibles y luego reducirse al aparecer más elementos.

Recomendaciones:

* Usa `v-click` en `<p>`, `<li>`, `<span>` o bloques pequeños.
* Usa `<v-clicks>` cuando quieras revelar automáticamente los elementos hijos.
* Para listas numeradas, usa `<ol><li v-click>...</li></ol>`.
* Para listas alfabéticas, usa `<ol type="A">` o `<ol type="a">`.
* Evita saturar una sola diapositiva con demasiado texto.
* En contenidos con clics, evita valores `max` demasiado altos.
* Para Open Class, un rango estable suele estar entre `max="22"` y `max="24"` en contenidos.
* Si el contenido no cabe con ese rango, divide la información en dos diapositivas.

### Transiciones en Slidev

Las transiciones entre diapositivas se controlan con `transition`.

Ejemplo global en el lanzador raíz:

```md
---
transition: fade
---
```

Ejemplo por diapositiva:

```md
---
layout: slide-08-titulo-texto
transition: slide-left
---
```

Recomendación: usar `fade` como transición general y reservar `v-click`, `<v-click>` o `<v-clicks>` para revelar ideas dentro de una misma diapositiva.

---

## 12. Recomendaciones de edición

No editar manualmente estos archivos salvo que estés modificando la infraestructura:

```text
slides.md
scripts/decks.mjs
curso_semanaN.md
package.json
```

Estos archivos pueden regenerarse con:

```bash
npm run config
```

Editar principalmente:

```text
openclass.config.json
semanas/curso_semanaN.md
public/imagenes/
```

---

## 13. Despliegue con GitHub Pages

El workflow está en:

```text
.github/workflows/deploy.yml
```

Cada vez que se hace `push` a `main`, GitHub Actions ejecuta:

```bash
npm run pages:build
```

El sitio generado queda en:

```text
dist/
```

y se publica automáticamente con GitHub Pages.

---

## 14. Solución de problemas frecuentes

### Error en un layout Vue

Si aparece un error similar a:

```text
Element is missing end tag
```

revisar el archivo indicado por la terminal. Normalmente significa que un componente, etiqueta HTML o bloque Vue quedó mal cerrado.

Ejemplo correcto:

```vue
<TitleRibbon>
  <slot name="title">Agrega un título</slot>
</TitleRibbon>
```

### Error en `scripts/decks.mjs`

Si aparece un error similar a:

```text
SyntaxError: Invalid regular expression: missing /
```

revisar que la función `withBase()` tenga esta línea:

```js
return `${SITE_BASE}${value.replace(/^[/]+/, "")}`;
```

### No aparece una semana en el portal

Revisar que esté activa en:

```json
"activeWeeks": [1, 2, 3]
```

También se puede activar con:

```bash
npm run semana -- N
```

### No se ven imágenes

Revisar que estén en:

```text
public/imagenes/
```

y que se referencien así:

```html
<img src="/imagenes/nombre.png" alt="Descripción de la imagen" />
```

### No se ven los fondos institucionales

Verificar que existan:

```text
public/fondos/slide-01-portada.png
public/fondos/slide-05-template.png
public/fondos/slide-06-cierre.png
```

### El texto cambia mucho de tamaño con los clics

Si una diapositiva usa `v-click` y el texto se agranda o se reduce demasiado al avanzar o retroceder, revisar el valor `max` del `AutoFitText` del layout.

Para contenidos con revelado progresivo se recomienda usar valores moderados:

```vue
<AutoFitText tag="div" class="content-fit" :min="15" :max="24" line-height="1.26">
```

Si el contenido sigue sin caber, es mejor dividirlo en dos diapositivas.

---

## 15. Flujo de mantenimiento del template

Cuando se mejore el template base:

```bash
git add -A
git commit -m "Mejora plantilla Open Class"
git push
```

Luego copiar la plantilla actualizada al paquete generador:

```bash
robocopy D:\OpenClass\openclass-uniminuto-template D:\OpenClass\create-openclass-uniminuto\template /E /XD .git node_modules dist .slidev /XF openclass-template.zip
```

Publicar nueva versión del paquete:

```bash
cd D:\OpenClass\create-openclass-uniminuto
npm version patch
npm publish --access public
```

Actualizar cursos existentes:

```bash
npm create openclass-uniminuto@latest . -- --update-theme
npm run config
npm run pages:build
```
