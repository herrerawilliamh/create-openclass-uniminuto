# Ajuste automático de texto para layouts UNIMINUTO

Esta versión usa `AutoFitText.vue` para ajustar el tamaño del texto al espacio disponible.

## Reglas rápidas

- Ajuste fino de posición: edita `left`, `top`, `width`, `height` en cada layout.
- Ajuste fino de tamaño: edita `:min`, `:max` y `line-height` en cada `<AutoFitText>`.
- Para contenido muy largo, el texto se reducirá hasta `min`. Si aun así no cabe, el excedente quedará oculto para proteger el diseño.
- Para bloques de código largos, es mejor dividir el código en varias diapositivas.

## Ejemplo

```vue
<AutoFitText tag="h1" class="title" :min="20" :max="42" line-height="1.05">
  <slot name="title">Agrega un título</slot>
</AutoFitText>
```

## Debug visual

Puedes activar temporalmente la caja de medición agregando `debug`:

```vue
<AutoFitText debug tag="div" :min="16" :max="32">
  <slot name="content" />
</AutoFitText>
```
