---
theme: ./theme/uniminuto
title: Curso Open Class de ejemplo — Open Class
favicon: /favicon.png
codeCopy: true
transition: fade
routerMode: hash
drawings:
  persist: false
layout: slide-01-portada
---

::title::
Curso Open Class de ejemplo

::week::
Open Class

::date::
2026

---
layout: slide-08-titulo-texto
---

::title::
Descripción general del curso

::content::
Curso demostrativo para probar la plantilla OpenClass Template UNIMINUTO. Edita este texto en openclass.config.json para adaptarlo al curso real.

---
layout: slide-08-titulo-texto
---

::title::
Ruta de aprendizaje

::content::
El curso se organiza en semanas. Cada semana cuenta con un lanzador raíz y un archivo interno en la carpeta `semanas/`.

Las presentaciones activas se controlan desde `openclass.config.json` mediante el campo `generation.activeWeeks`.

---
layout: slide-10-titulo-dos-columnas
---

::title::
Presentaciones disponibles

::left::
### **Semana 1**

<a href="./semanas/demo_semana1/#/1" target="_self">Semana de ejemplo</a>

<a href="./descargas/demo_semana1.pdf" download>Descargar PDF</a> · <a href="./descargas/demo_semana1.pptx" download>Descargar PPTX</a>

::right::
### Próximamente

Activa más semanas con `npm run semana -- 2`, `npm run semana -- 3` y así sucesivamente.

---
layout: slide-12-cierre
---
