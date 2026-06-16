# Layouts Open Class UNIMINUTO

## Principio de diseño

Los fondos institucionales se usan como base limpia. Los títulos, franjas azules, avión y cajas de contenido se construyen por código para que puedan crecer y adaptarse al contenido.

## Recursos obligatorios

```text
public/fondos/slide-01-portada.png
public/fondos/slide-05-template.png
public/fondos/slide-06-cierre.png
public/imagenes/avion.png
public/imagenes/favicon.png
public/favicon.png
```

`public/favicon.png` es el favicon del navegador.  
`public/imagenes/favicon.png` es una imagen institucional que puedes usar dentro de las diapositivas.

## slide-02-titulo

Uso recomendado:

```md
---
layout: slide-02-titulo
---

::title::
Extracción de características estadísticas y frecuenciales
```

Este layout usa franja azul dinámica y avión pequeño. El título aprovecha todo el ancho de la franja con padding lateral.

## Layouts con imagen y texto

```md
---
layout: slide-03-imagen-izquierda
---

::title::
¿Qué puede “ver” una máquina?

::image::
<img src="/imagenes/favicon.png" alt="Imagen de apoyo" />

::content::
Texto de la diapositiva.
```

En `slide-03-imagen-izquierda` y `slide-04-imagen-derecha`, la imagen se ajusta con `object-fit: contain`, por lo que funciona bien con imágenes 3:4.

## Listas

Listas no ordenadas:

```md
- Primer punto
- Segundo punto
- Tercer punto
```

Listas numeradas:

```md
1. Primer paso
2. Segundo paso
3. Tercer paso
```

Listas por letras:

```html
<ol type="a">
  <li>Primera opción</li>
  <li>Segunda opción</li>
</ol>
```

Listas romanas:

```html
<ol type="i">
  <li>Primer criterio</li>
  <li>Segundo criterio</li>
</ol>
```

## Actualizar tema en cursos existentes

Cuando exista una nueva versión publicada del generador:

```bash
npm create openclass-uniminuto@latest . -- --update-theme
```

Esto actualiza layouts, componentes, estilos y recursos visuales sin tocar el contenido académico en `semanas/`.
