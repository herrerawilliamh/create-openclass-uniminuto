---
layout: slide-01-portada
---

::title::
{{COURSE_NAME}}

::week::
Semana {{WEEK_NUMBER}} — {{WEEK_TITLE}}

::date::
{{WEEK_DATE}}

---
layout: slide-02-titulo
---

::title::
Ruta de la Open Class

---
layout: slide-08-titulo-texto
---

::title::
Contexto de la semana

::content::
Esta sesión aborda el tema **{{WEEK_THEME}}** desde una perspectiva aplicada, académica y profesional.

La intención es que el estudiante relacione los conceptos centrales de la semana con situaciones reales del campo disciplinar, identifique problemas, analice alternativas y proponga decisiones fundamentadas.

---
layout: slide-09-objetivos
---

::title::
Objetivos de aprendizaje

::content::
Al finalizar esta Open Class, el estudiante estará en capacidad de:

1. Reconocer los conceptos principales asociados con **{{WEEK_THEME}}**.
2. Analizar una situación aplicada del curso a partir de criterios técnicos y académicos.
3. Relacionar la teoría con una actividad práctica o evaluativa.
4. Formular conclusiones que evidencien comprensión, argumentación y transferencia.

---
layout: slide-03-imagen-izquierda
---

::title::
Lectura inicial del problema

::image:: 
<img src="/imagenes/favicon.png" alt="Imagen institucional de apoyo" />

::content::
En esta sección se presenta una situación inicial que permite introducir el tema de la semana.

La imagen puede reemplazarse por una ilustración del curso ubicada en:

`public/imagenes/`

Ejemplo:

`/imagenes/nombre_de_la_imagen.png`

---
layout: slide-04-imagen-derecha
---

::title::
Análisis del contexto

::content::
Este layout funciona bien cuando se desea ubicar la explicación conceptual en la parte izquierda y una imagen de apoyo en la parte derecha.

Puedes usarlo para:

* Presentar un caso.
* Mostrar un diagrama.
* Explicar un flujo.
* Relacionar conceptos con una situación profesional.

::image:: 
<img src="/imagenes/favicon.png" alt="Imagen de apoyo para análisis del contexto" />

---
layout: slide-05-titulo-superior-texto-derecha
---

::title::
Concepto clave de la semana

::image:: 
<img src="/imagenes/favicon.png" alt="Imagen conceptual de apoyo" />

::content::
Este layout permite destacar una imagen amplia en la parte izquierda y ubicar la explicación en la parte derecha.

Úsalo cuando la imagen sea el punto de partida del análisis y el texto funcione como interpretación, guía o síntesis.

Ejemplo de uso:

* Arquitectura de un sistema.
* Mapa conceptual.
* Flujo de proceso.
* Escenario problemático.
* Representación visual de un caso.

---
layout: slide-06-titulo-superior-texto-izquierda
---

::title::
Relación entre teoría y práctica

::content::
Este layout invierte la organización anterior: el texto queda a la izquierda y la imagen a la derecha.

Es útil cuando primero quieres orientar la lectura conceptual y luego apoyar la explicación con una imagen.

Se recomienda usarlo para:

1. Explicar criterios.
2. Presentar una secuencia de análisis.
3. Introducir una práctica guiada.
4. Preparar al estudiante para una actividad.

::image:: 
<img src="/imagenes/favicon.png" alt="Imagen de apoyo para teoría y práctica" />

---
layout: slide-07-multimedia-con-titulo
---

::title::
Recurso multimedia de apoyo

::media::

<iframe
  width="100%"
  height="100%"
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  title="Recurso multimedia de apoyo"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>

---
layout: slide-08-titulo-texto
---

::title::
Síntesis conceptual

::content::
Utiliza este layout para desarrollar una explicación central sin imágenes.

Ejemplo de estructura sugerida:

* **Idea principal:** presentar el concepto fundamental.
* **Aplicación:** explicar cómo se observa en un contexto real.
* **Criterio de análisis:** indicar qué debe observar el estudiante.
* **Conclusión parcial:** cerrar con una frase que conecte con la actividad.

También puedes usar párrafos breves cuando necesites explicar una idea con mayor profundidad académica.

---
layout: slide-10-titulo-dos-columnas
---

::title::
Comparación de enfoques

::left::

### Enfoque 1

Este espacio puede usarse para presentar una primera postura, alternativa, componente o criterio de análisis.

* Característica principal.
* Ventaja.
* Riesgo o limitación.
* Ejemplo aplicado.

::right::

### Enfoque 2

Este espacio puede usarse para contrastar una segunda postura, alternativa, componente o criterio.

* Característica principal.
* Ventaja.
* Riesgo o limitación.
* Ejemplo aplicado.

---
layout: slide-11-dos-titulos-dos-columnas
---

::leftTitle::
Antes del análisis

::rightTitle::
Después del análisis

::left::
En esta columna puedes describir la situación inicial, las ideas previas, los datos disponibles o las condiciones del problema.

Ejemplo:

* Información dispersa.
* Criterios poco claros.
* Necesidad de priorización.
* Dudas frente a la toma de decisiones.

::right::
En esta columna puedes mostrar el resultado esperado después del análisis.

Ejemplo:

* Criterios definidos.
* Decisiones justificadas.
* Evidencias organizadas.
* Conclusiones argumentadas.

---
layout: slide-codigo
---

::title::
Ejemplo técnico guiado

::content::

```python {lines:true}
# Ejemplo base para reemplazar según el curso
# Este bloque puede usarse en asignaturas con práctica computacional,
# análisis de datos, simulación, seguridad, IoT o programación.

tema = "{{WEEK_THEME}}"
actividad = "{{WEEK_ACTIVITY}}"

def presentar_contexto(tema, actividad):
    print("Tema central:", tema)
    print("Actividad:", actividad)
    print("Propósito: relacionar teoría, práctica y análisis crítico.")

presentar_contexto(tema, actividad)
```

---
layout: slide-08-titulo-texto

::title::
Actividad de aplicación

::content::
**{{WEEK_ACTIVITY}}**

Orientaciones sugeridas:

1. Leer la situación propuesta por el docente.
2. Identificar los conceptos de la semana presentes en el caso.
3. Analizar alternativas de solución o interpretación.
4. Socializar una conclusión breve con argumentos.
5. Relacionar la actividad con la evidencia o evaluación correspondiente.

Duración estimada: **{{WEEK_DURATION}}**.

---
layout: slide-10-titulo-dos-columnas
---

::title::
Preguntas orientadoras

::left::

### Para comprender

* ¿Cuál es el problema central?
* ¿Qué conceptos de la semana permiten analizarlo?
* ¿Qué información es necesaria para tomar una decisión?
* ¿Qué criterios deben priorizarse?

::right::

### Para aplicar

* ¿Qué alternativa parece más adecuada?
* ¿Qué riesgos o limitaciones existen?
* ¿Cómo se justificaría la decisión?
* ¿Qué aprendizaje se transfiere a un contexto profesional?

---
layout: slide-08-titulo-texto
---

::title::
Plantilla para listas y revelado progresivo

::content::

<p v-click><strong>Lista no ordenada:</strong></p>

<ul>
  <li v-click>Puede escribirse con asterisco, guion o HTML.</li>
  <li v-click>Funciona bien para ideas, criterios y recomendaciones.</li>
</ul>

<p v-click><strong>Lista ordenada:</strong></p>

<ol>
  <li v-click>Primer paso.</li>
  <li v-click>Segundo paso.</li>
  <li v-click>Tercer paso.</li>
</ol>

<p v-click><strong>Lista alfabética:</strong></p>

<ol type="A">
  <li v-click>Primer criterio.</li>
  <li v-click>Segundo criterio.</li>
  <li v-click>Tercer criterio.</li>
</ol>

---
layout: slide-08-titulo-texto
---

::title::
Plantilla para instrucciones con clics

::content::

<p v-click><strong>Instrucciones:</strong></p>

<ol>
  <li v-click>Leer la situación propuesta por el docente.</li>
  <li v-click>Identificar los conceptos principales de la semana.</li>
  <li v-click>Analizar alternativas de solución o interpretación.</li>
  <li v-click>Socializar una conclusión breve con argumentos.</li>
</ol>

<p v-click><strong>Producto:</strong> una respuesta breve con criterio, evidencia y conclusión.</p>

---
layout: slide-11-dos-titulos-dos-columnas
---

::leftTitle:: <span v-click>Plantilla animación antes del análisis</span>

::rightTitle:: <span v-click>Plantilla animación después del análisis</span>

::left::

<p v-click>En esta columna puedes describir la situación inicial, las ideas previas, los datos disponibles o las condiciones del problema.</p>

<p v-click><strong>Ejemplo:</strong></p>

<ul>
  <li v-click>Información dispersa.</li>
  <li v-click>Criterios poco claros.</li>
  <li v-click>Necesidad de priorización.</li>
  <li v-click>Dudas frente a la toma de decisiones.</li>
</ul>

::right::

<p v-click>En esta columna puedes mostrar el resultado esperado después del análisis.</p>

<p v-click><strong>Ejemplo:</strong></p>

<ul>
  <li v-click>Criterios definidos.</li>
  <li v-click>Decisiones justificadas.</li>
  <li v-click>Evidencias organizadas.</li>
  <li v-click>Conclusiones argumentadas.</li>
</ul>

---
layout: slide-12-cierre
---
