---
layout: slide-01-portada
---

::title::
Internet de las cosas

::week::
SEMANA 1

::date::
MAYO 04, 2026

<!--
Notas del presentador:
Dar la bienvenida a la Open Class. Presentar la sesión como un espacio introductorio para comprender qué es IoT, cómo se conectan los dispositivos, qué papel cumplen los sensores, los microcontroladores, las redes, la nube, el borde y la seguridad. Indicar que la clase tendrá una explicación conceptual, una actividad corta de integración, una práctica guiada en Wokwi con ESP32 y MicroPython, socialización, dudas y cierre.
-->

---
layout: slide-02-titulo
---

::title::
Generalidades de IoT

::content::
Hoy abordaremos el Internet de las cosas como una red inteligente de objetos, sensores, actuadores, datos y decisiones.

La pregunta orientadora de la sesión es:

**¿Cómo pasa un dato del mundo físico a convertirse en una decisión útil dentro de un sistema IoT?**

<!--
Notas del presentador:
Explicar que el Internet de las cosas no consiste simplemente en conectar dispositivos a internet. Su verdadera importancia aparece cuando un sistema logra captar información del entorno, transformarla en datos útiles, procesarla y convertirla en una acción, una alerta, una automatización o una decisión.

Profundizar en la pregunta orientadora de la sesión: ¿cómo pasa un dato del mundo físico a convertirse en una decisión útil dentro de un sistema IoT? Comentar que esta pregunta guiará todo el recorrido de la clase. El punto de partida es una variable física, como temperatura, humedad, luz o movimiento. Luego aparece un sensor que la detecta, un microcontrolador que la interpreta, una red que puede transmitirla, una plataforma o dispositivo que la procesa y, finalmente, una salida: una visualización, una notificación o una acción automática.

Se puede usar una analogía sencilla: en el cuerpo humano, los sentidos capturan información, el cerebro la interpreta y el cuerpo reacciona. En IoT, los sensores observan, el microcontrolador procesa y el sistema actúa. Con esta idea, se prepara a los estudiantes para comprender IoT como una cadena de valor y no como una suma aislada de aparatos.
-->

---
layout: slide-03-imagen-izquierda
---

::image::
<img src="/imagenes/iot-ecosistema-conectado.png" alt="Dispositivos conectados en una red IoT" />

::title::
¿Qué es Internet de las cosas?

::content::
El Internet de las cosas es un ecosistema donde objetos físicos incorporan sensores, procesamiento, conectividad y capacidad de interacción.

Un sistema IoT permite:

- Capturar datos del entorno físico.
- Enviar información por una red.
- Procesar datos localmente, en el borde o en la nube.
- Generar alertas, visualizaciones, automatizaciones o decisiones.

<!--
Notas del presentador:
Explicar que el Internet de las cosas es un ecosistema donde objetos físicos incorporan capacidades digitales. Esto significa que ya no solo cumplen una función mecánica o eléctrica, sino que pueden captar información del entorno, procesarla y comunicarse con otros sistemas. El valor de IoT no está únicamente en el objeto conectado, sino en la capacidad de generar información y tomar decisiones.

Profundizar en la idea de ecosistema. Un sistema IoT suele integrar hardware, software, redes, plataformas de almacenamiento, interfaces de usuario y, en muchos casos, analítica de datos. Por eso, cuando se habla de IoT, no se piensa solo en un sensor o en un dispositivo, sino en toda la arquitectura que le da sentido.

Utilizar ejemplos cercanos para contextualizar: una nevera que monitorea temperatura, un medidor inteligente de energía, una cámara que detecta movimiento o una estación ambiental que registra temperatura y humedad. En todos estos casos se cumple la misma lógica: observar el entorno, registrar una variable, comunicar la información y generar una respuesta útil.

Cerrar resaltando que IoT une el mundo físico con el mundo digital. Esa unión hace posible monitorear procesos, automatizar tareas y mejorar la toma de decisiones en distintos sectores.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
De un dato físico a una decisión digital

::left::
**Entrada**

- Temperatura.
- Humedad.
- Movimiento.
- Luz.
- Presión.
- Consumo energético.
- Vibración.

::right::
**Salida**

- Alerta.
- Registro histórico.
- Activación de un actuador.
- Visualización en tablero.
- Predicción de falla.
- Decisión automática.
- Notificación al usuario.

<!--
Notas del presentador:
Aclarar que esta diapositiva representa la lógica central de IoT. Un sistema comienza con una entrada del mundo físico: temperatura, humedad, luz, vibración, presión, consumo energético o movimiento. Estas variables son observables mediante sensores y, una vez medidas, pueden convertirse en datos procesables.

Explicar que el dato por sí solo no genera valor. El valor aparece cuando se interpreta y da origen a una salida. Esa salida puede ser una alerta, un registro histórico, la activación de un actuador, una visualización en un tablero o una decisión automática. Por ejemplo, medir humedad del suelo puede servir para activar riego; medir vibración en una máquina puede servir para detectar una falla; medir temperatura en un aula puede servir para encender ventilación.

Es útil diferenciar dato, información y decisión. El dato es la lectura bruta, por ejemplo 31 grados Celsius. La información surge cuando se interpreta ese valor como una condición relevante, por ejemplo “temperatura alta”. La decisión aparece cuando el sistema actúa, por ejemplo “activar alerta” o “encender ventilador”.

Conectar esta lógica con el resto de la clase: todo sistema IoT convierte entradas físicas en salidas útiles a través del procesamiento y la conectividad.
-->

---
layout: slide-04-imagen-derecha
---

::image::
<img src="/imagenes/arquitectura-basica-iot.png" alt="Arquitectura de capas de un sistema IoT" />

::title::
Arquitectura básica de IoT

::content::
Una solución IoT puede entenderse por capas:

- **Percepción:** sensores y actuadores.
- **Procesamiento local:** microcontrolador o dispositivo embebido.
- **Conectividad:** Wi-Fi, Bluetooth, Zigbee, LoRaWAN, celular o Ethernet.
- **Procesamiento remoto:** nube, servidor, plataforma o base de datos.
- **Aplicación:** tablero, app web, alerta, API o sistema empresarial.

<!--
Notas del presentador:
Presentar la arquitectura IoT como una cadena de capas que trabajan de forma articulada. La primera es la capa de percepción, donde se encuentran sensores y actuadores. Los sensores permiten captar variables del entorno, mientras que los actuadores permiten intervenir físicamente o lógicamente sobre ese entorno.

La segunda capa es el procesamiento local, donde aparece el microcontrolador o dispositivo embebido. Este componente interpreta las señales de los sensores, ejecuta instrucciones y puede tomar decisiones inmediatas. Es importante que los estudiantes comprendan que muchas decisiones en IoT se toman localmente, especialmente cuando se requiere rapidez o cuando no siempre hay conexión estable.

La tercera capa es la conectividad. Aquí se comunican los datos mediante tecnologías como Wi-Fi, Bluetooth, Zigbee, LoRaWAN, redes celulares o Ethernet. La elección de la red depende del alcance, la latencia, el consumo energético, el costo y el contexto de aplicación.

La cuarta capa corresponde al procesamiento remoto: servidor, nube, base de datos o plataforma IoT. Allí se almacenan datos, se analizan tendencias, se integran servicios y se construyen visualizaciones. Finalmente, la capa de aplicación presenta el valor al usuario mediante tableros, alertas, aplicaciones móviles, APIs o integraciones empresariales.

Reforzar que no todos los proyectos requieren la misma arquitectura. Depende de la escala, del contexto y de los objetivos del sistema.
-->

---
layout: slide-07-multimedia-con-titulo
---

::title::
IoT como ecosistema conectado

::media::
<iframe width="560" height="315" src="https://www.youtube.com/embed/c_7c0jbQTKE?si=6_Z8y8zZ6zxV3VLy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!--
Notas del presentador:
Antes de reproducir el video, orientar a los estudiantes para que lo observen de forma analítica. Indicar que deben prestar atención a tres aspectos: qué se mide, cómo se comunica la información y qué decisión o acción se genera a partir de esa información. De esta manera, el video se convierte en un apoyo para pensar la lógica de IoT y no solo en un recurso ilustrativo.

Después del video, recuperar dos o tres intervenciones breves. Preguntar, por ejemplo: ¿qué objeto se volvió inteligente?, ¿qué variable fue medida?, ¿qué medio de comunicación pudo haber intervenido?, ¿qué resultado produjo el sistema? Estas preguntas ayudan a vincular el recurso audiovisual con la estructura conceptual trabajada anteriormente.

Explicar que un ecosistema IoT involucra mucho más que dispositivos. También incluye infraestructura de red, plataformas de gestión, interfaces de visualización, seguridad, analítica y usuarios. Por eso se habla de ecosistema: porque hay varios componentes que interactúan para generar valor.

Se puede cerrar indicando que la práctica en Wokwi será una versión pequeña de ese mismo ecosistema, donde un sensor, un microcontrolador y una salida visual permitirán evidenciar la lógica básica de IoT.
-->

---
layout: slide-11-dos-titulos-dos-columnas
---

::leftTitle::
Sensores

::rightTitle::
Actuadores

::left::
Capturan datos del entorno.

Ejemplos:

- Temperatura.
- Humedad.
- Luz.
- Distancia.
- Movimiento.
- Presión.
- Vibración.

::right::
Ejecutan acciones físicas o lógicas.

Ejemplos:

- Encender un LED.
- Activar un motor.
- Abrir una válvula.
- Enviar una alarma.
- Bloquear una puerta.
- Ajustar ventilación.

<!--
Notas del presentador:
Diferenciar claramente sensor y actuador. Un sensor captura información del entorno. Su función es observar. Puede medir temperatura, humedad, luz, presión, distancia, vibración o movimiento. El sensor actúa como una interfaz entre el mundo físico y el sistema digital, porque convierte una variable física en una señal interpretable.

El actuador, en cambio, ejecuta una acción. Su función es intervenir. Puede encender un LED, activar un motor, abrir una válvula, generar una alarma sonora, bloquear una puerta o ajustar un sistema de ventilación. Mientras el sensor observa, el actuador responde.

Explicar que en IoT ambos trabajan de manera articulada. El sensor capta datos, el microcontrolador los procesa y el actuador ejecuta una salida. Por ejemplo, si un sensor detecta una temperatura elevada, el sistema puede activar un ventilador. Si un sensor detecta movimiento, puede activar una alarma o encender una luz.

También conviene aclarar que no todos los actuadores generan un efecto físico visible. A veces la acción puede ser lógica, como enviar una notificación o actualizar un tablero. Lo importante es entender la secuencia: entrada, procesamiento y salida.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Conectividad: inalámbrico y cableado

::left::
**Sensores inalámbricos**

- Mayor flexibilidad de ubicación.
- Instalación más sencilla.
- Útiles en espacios amplios o difíciles de cablear.
- Pueden sufrir interferencias.
- Dependen más de batería y calidad de señal.

::right::
**Sensores cableados**

- Mayor estabilidad en la comunicación.
- Menor exposición a interferencias inalámbricas.
- Instalación más costosa o compleja.
- Menor flexibilidad para reubicar dispositivos.
- Útiles en entornos críticos o industriales.

<!--
Notas del presentador:
Explicar que la conectividad es un criterio fundamental en el diseño de un sistema IoT, porque determina cómo viajan los datos entre dispositivos, plataformas y usuarios. No todas las soluciones requieren el mismo tipo de red, y por eso es importante comparar opciones.

Los sensores inalámbricos ofrecen flexibilidad y facilidad de instalación. Son útiles cuando el dispositivo debe ubicarse en lugares amplios, móviles o difíciles de cablear. Se usan mucho en agricultura, monitoreo ambiental, domótica y escenarios donde el cableado sería costoso o poco práctico. Sin embargo, pueden verse afectados por interferencias, alcance limitado o dependencia de batería.

Los sensores cableados ofrecen mayor estabilidad, menor susceptibilidad a interferencias y mejor continuidad de comunicación. Son especialmente útiles en entornos industriales o críticos, donde la confiabilidad es prioritaria. Su desventaja principal es que pueden requerir una instalación más compleja, costosa y menos flexible.

Aclarar que la decisión entre inalámbrico y cableado no es absoluta. Debe evaluarse según el contexto, la distancia, la disponibilidad de energía, el costo, la necesidad de movilidad, la criticidad del proceso y los requerimientos de mantenimiento.
-->

---
layout: slide-05-titulo-superior-texto-derecha
---

::image::
<img src="/imagenes/esp32-microcontrolador-iot.png" alt="Microcontrolador ESP32 para proyectos IoT" />

::title::
Microcontrolador: el cerebro local

::content::
El microcontrolador recibe señales de sensores, ejecuta instrucciones y controla actuadores.

En esta sesión usaremos:

- **ESP32**, por su conectividad y bajo costo.
- **MicroPython**, por su sintaxis clara y rápida curva de aprendizaje.
- **Wokwi**, para simular el circuito sin instalar componentes físicos.

<!--
Notas del presentador:
Explicar que el microcontrolador es el componente que ejecuta la lógica del sistema a nivel local. A diferencia de un computador convencional, está diseñado para interactuar directamente con hardware, leer señales, controlar salidas y operar de manera eficiente en tareas específicas. En IoT, suele ser el cerebro local del sistema.

Profundizar en el caso del ESP32. Este microcontrolador es muy utilizado en proyectos IoT porque integra conectividad Wi-Fi y Bluetooth, entradas y salidas digitales, capacidad de procesamiento y bajo costo. Esto lo convierte en una plataforma muy adecuada para aprendizaje, prototipado y desarrollo de soluciones sencillas o intermedias.

MicroPython facilita el trabajo porque permite programar el comportamiento del microcontrolador con una sintaxis clara y cercana a Python. Esto ayuda a los estudiantes a concentrarse en la lógica del problema: leer sensores, establecer condiciones, controlar salidas y observar resultados.

Wokwi aparece como una herramienta de simulación que elimina la necesidad de montar hardware físico durante la clase. Esto reduce barreras técnicas y facilita la práctica guiada. Señalar que, aunque sea una simulación, la lógica del sistema es real y transferible a montajes físicos posteriores.
-->

---
layout: slide-08-titulo-texto
---

::title::
Edge, fog y cloud computing en IoT

::content::
En IoT no todos los datos deben viajar directamente a la nube.

- **Edge computing:** procesa datos cerca de la fuente, en el dispositivo o gateway.
- **Fog computing:** distribuye procesamiento entre dispositivos cercanos, gateways y red local.
- **Cloud computing:** centraliza almacenamiento, analítica, integración y visualización a gran escala.

La ventaja principal del borde es reducir latencia y permitir decisiones más rápidas.

<!--
Notas del presentador:
Explicar que en IoT no todos los datos deben enviarse inmediatamente a la nube. El lugar donde se procesan los datos afecta la velocidad de respuesta, el consumo de ancho de banda, la confiabilidad y la eficiencia del sistema. Por eso es importante distinguir entre edge, fog y cloud computing.

Edge computing significa procesar los datos cerca de donde se generan, en el propio dispositivo o en un gateway cercano. Esto reduce latencia y permite respuestas rápidas. Por ejemplo, si un sensor detecta una condición crítica en una máquina, el sistema puede reaccionar de inmediato sin esperar comunicación con la nube.

Fog computing distribuye parte del procesamiento entre dispositivos cercanos, gateways y la red local. Funciona como una capa intermedia entre el borde y la nube. Es útil cuando existen muchos dispositivos y se necesita gestionar información localmente antes de enviarla a un sistema central.

Cloud computing centraliza almacenamiento, analítica, integración y visualización a gran escala. Es ideal para conservar históricos, construir tableros, aplicar inteligencia artificial o integrar múltiples servicios. La nube aporta escalabilidad, pero no siempre es la mejor opción para decisiones urgentes.

Usar un ejemplo sencillo: el ESP32 puede clasificar localmente la temperatura como normal o alerta; luego esos datos podrían almacenarse en la nube para análisis histórico. Así se entiende que edge y cloud no se excluyen, sino que pueden complementarse.
-->

---
layout: slide-04-imagen-derecha
---

::image::
<img src="/imagenes/iot-analitica-ia-predictiva.png" alt="Análisis de datos e inteligencia artificial en IoT" />

::title::
Datos, IA y analítica predictiva

::content::
Los sistemas IoT generan datos continuos. Con analítica e inteligencia artificial se pueden:

- Detectar patrones.
- Identificar anomalías.
- Predecir fallos.
- Optimizar mantenimiento.
- Reducir riesgos.
- Automatizar decisiones.

En industria, esto se relaciona con mantenimiento predictivo y eficiencia operativa.

<!--
Notas del presentador:
Explicar que una de las grandes ventajas de IoT es la generación continua de datos. Cada lectura de un sensor produce información valiosa que, acumulada en el tiempo, permite identificar patrones, detectar anomalías y comprender mejor el comportamiento de un proceso o sistema.

La analítica puede comenzar de manera simple, por ejemplo comparando valores con umbrales definidos. Si la temperatura supera cierto nivel, se genera una alerta. Sin embargo, cuando se almacenan datos históricos, es posible ir más allá: observar tendencias, reconocer comportamientos atípicos y construir modelos de predicción.

Relacionar esto con la inteligencia artificial. En un entorno industrial, por ejemplo, sensores de vibración, temperatura y consumo energético pueden registrar el estado de una máquina. Con suficientes datos, un modelo puede reconocer patrones previos a una falla y anticipar mantenimiento. Esto se conoce como mantenimiento predictivo y busca reducir riesgos, costos y tiempos de inactividad.

También es importante mencionar que la calidad del análisis depende de la calidad del dato. Por eso, en IoT, no basta con aplicar IA; primero se requiere una captura confiable, una arquitectura adecuada y un procesamiento coherente. La inteligencia artificial potencia el sistema, pero no reemplaza sus fundamentos.
-->

---
layout: slide-08-titulo-texto
---

::title::
Seguridad en IoT

::content::
La seguridad es crítica porque cada dispositivo conectado puede convertirse en una puerta de entrada.

Buenas prácticas iniciales:

- Cambiar contraseñas predeterminadas.
- Mantener firmware actualizado.
- Usar autenticación multifactor cuando sea posible.
- Cifrar comunicaciones.
- Segmentar redes.
- Revisar alertas y registros.
- Diseñar con privacidad desde el inicio.

<!--
Notas del presentador:
Indicar que la seguridad es un componente transversal de cualquier sistema IoT. Cada dispositivo conectado puede convertirse en un punto de acceso a una red y, si está mal configurado, puede comprometer datos, servicios o infraestructura. Por eso, la seguridad no debe añadirse al final, sino contemplarse desde el diseño.

Explicar la idea de superficie de ataque. Mientras más dispositivos conectados existan, más posibles puntos vulnerables aparecen. Un sensor, una cámara, una cerradura inteligente o un medidor pueden parecer dispositivos pequeños, pero cada uno puede ser una puerta de entrada si no se protege adecuadamente.

Profundizar en las buenas prácticas iniciales. Cambiar contraseñas predeterminadas evita accesos obvios. Mantener firmware actualizado reduce vulnerabilidades conocidas. Cifrar comunicaciones protege datos en tránsito. Segmentar redes impide que un problema en un dispositivo comprometa toda la infraestructura. La autenticación multifactor agrega una capa adicional de protección.

También conviene mencionar la privacidad. Muchos dispositivos IoT recopilan información sensible sobre hábitos, presencia, ubicación o condiciones de uso. Por ello, debe aplicarse el principio de recoger solo los datos necesarios y protegerlos adecuadamente. La seguridad en IoT no es solo técnica; también es ética y organizacional.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Aplicaciones prácticas de IoT

::left::
**Sectores**

- Industria.
- Domótica.
- Educación.
- Salud.
- Agricultura.
- Transporte.
- Energía.
- Ciudades inteligentes.

::right::
**Ejemplos**

- Mantenimiento predictivo.
- Riego automatizado.
- Medición de calidad del aire.
- Control de iluminación.
- Monitoreo remoto de pacientes.
- Gestión de tráfico.
- Ahorro energético.

<!--
Notas del presentador:
Invitar a los estudiantes a pensar IoT como respuesta a problemas reales y no como una tecnología aislada. Las aplicaciones prácticas muestran que IoT tiene valor cuando mejora procesos, reduce riesgos, optimiza recursos o facilita la toma de decisiones.

En industria, IoT permite mantenimiento predictivo, monitoreo de activos, control de variables de proceso y eficiencia operativa. En domótica, mejora confort, seguridad y ahorro energético mediante control de iluminación, climatización o acceso. En salud, favorece el monitoreo remoto de pacientes y el seguimiento de signos vitales. En agricultura, ayuda a optimizar riego, controlar condiciones del suelo y monitorear variables climáticas.

En educación, IoT puede utilizarse para laboratorios didácticos, monitoreo ambiental en aulas, prototipos STEM y experiencias de aprendizaje interdisciplinarias. En transporte y ciudades inteligentes, facilita gestión de tráfico, alumbrado público, monitoreo ambiental y administración de recursos urbanos.

Resaltar que todo proyecto IoT debería comenzar con una pregunta de contexto: ¿qué problema quiero resolver?, ¿qué dato necesito medir?, ¿qué decisión se puede mejorar? Esa forma de pensar evita usar tecnología sin propósito y orienta el diseño hacia soluciones pertinentes.
-->

---
layout: slide-02-titulo
---

::title::
Actividad corta de integración

::content::
**Título:** El objeto también habla.

**Propósito:** reconocer cómo un objeto cotidiano podría convertirse en un sistema IoT.

**Tiempo:** 15 minutos.

**Dinámica:** en grupos rápidos, elijan un objeto del entorno y respondan:

- ¿Qué variable podría medir?
- ¿Qué sensor necesitaría?
- ¿Qué decisión podría tomar?
- ¿Qué riesgo de seguridad tendría?
- ¿Qué dato sería útil para visualizar?

<!--
Notas del presentador:
Explicar que esta actividad busca que los estudiantes apliquen de forma rápida la lógica de IoT a objetos de su entorno. No se trata de diseñar un proyecto completo, sino de identificar la estructura básica que convierte un objeto cotidiano en un sistema IoT.

Pedir que cada grupo elija un objeto y lo analice desde cinco preguntas clave. La primera pregunta, qué variable podría medir, obliga a identificar el dato físico relevante. La segunda, qué sensor necesitaría, permite conectar la necesidad con la tecnología. La tercera, qué decisión podría tomar, lleva a pensar en el valor funcional del sistema. La cuarta, qué riesgo de seguridad tendría, introduce una mirada crítica y responsable. La quinta, qué dato sería útil para visualizar, ayuda a relacionar el objeto con monitoreo y analítica.

Dar ejemplos para orientar: una silla podría medir ocupación; una ventana, apertura; una caneca, nivel de llenado; una lámpara, intensidad de luz ambiental. En todos los casos, debe quedar clara la lógica: objeto, variable, sensor, procesamiento y decisión.

Mantener un control de tiempo estricto para que la actividad sea dinámica y prepare la socialización posterior.
-->

---
layout: slide-11-dos-titulos-dos-columnas
---

::leftTitle::
Producto del grupo

::rightTitle::
Socialización rápida

::left::
Cada grupo construye una frase:

“Convertimos ___ en un sistema IoT porque mide ___, usa un sensor de ___ y permite ___.”

::right::
Socialización de 3 a 5 participaciones.

La idea no es buscar respuestas perfectas, sino reconocer la lógica:

**objeto + dato + conectividad + decisión + seguridad.**

<!--
Notas del presentador:
Guiar la socialización para que las respuestas no se queden solo en ideas creativas, sino que incluyan variable, sensor, acción y riesgo. Usar las participaciones para conectar con la práctica en Wokwi.
-->

---
layout: slide-05-titulo-superior-texto-derecha
---

::image::
<img src="/imagenes/wokwi-esp32-simulacion-iot.png" alt="Simulación de circuito IoT con ESP32 en Wokwi" />

::title::
Práctica guiada en Wokwi

::content::
**Título:** Semáforo ambiental IoT local.

**Propósito:** simular un dispositivo IoT que lee temperatura y humedad, clasifica el estado ambiental y activa una señal visual.

**Herramienta:** Wokwi.

**Placa:** ESP32.

**Lenguaje:** MicroPython.

<!--
Notas del presentador:
Indicar que esta práctica es introductoria. No se usará conexión real a la nube para mantener el ejercicio simple y viable dentro de la Open Class. La consola mostrará los datos como si fueran una telemetría básica.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Componentes y conexiones sugeridas

::left::
**Componentes**

- ESP32 DevKit.
- Sensor DHT22.
- LED verde.
- LED amarillo.
- LED rojo.
- Tres resistencias de 220 Ω.
- Cables de conexión.

::right::
**Conexiones**

- DHT22 VCC → 3V3.
- DHT22 GND → GND.
- DHT22 DATA → GPIO 15.
- LED verde → GPIO 18.
- LED amarillo → GPIO 19.
- LED rojo → GPIO 21.
- Cátodos de LED → GND mediante resistencia.

<!--
Notas del presentador:
Explicar brevemente la función de cada componente. El ESP32 será el centro de control del sistema. El DHT22 permitirá medir temperatura y humedad. Los tres LED representarán visualmente los estados del ambiente: normal, precaución y alerta. Las resistencias protegerán los LED limitando la corriente en el circuito.

Recordar que, aunque se trate de una simulación, conviene aplicar buenas prácticas de conexión. El DHT22 necesita alimentación, tierra y un pin de datos correctamente asignado. Los LED deben conectarse respetando polaridad y resistencia. Señalar que muchos errores frecuentes en este tipo de ejercicios no provienen del código, sino de una mala coincidencia entre las conexiones físicas y los pines definidos en el programa.

Conviene insistir en la correspondencia entre hardware y software. Si en el código el LED verde está en GPIO 18, la conexión en el circuito debe coincidir. Si no lo hace, el programa parecerá no funcionar aunque la lógica sea correcta.

Animar a los estudiantes a revisar metódicamente las conexiones antes de ejecutar, como una práctica básica de depuración en sistemas embebidos.
-->

---
layout: slide-08-titulo-texto
class: codigo-slide
---

::title::
Código 1: configuración de hardware

::content::
```python {lines:true,maxHeight:'430px'}
# Semana 1 - Internet de las cosas
# Práctica: Semáforo ambiental IoT local
# Plataforma: ESP32 en Wokwi
# Lenguaje: MicroPython

from machine import Pin
from time import sleep
import dht

# -----------------------------
# Configuración de hardware
# -----------------------------
PIN_DHT = 15
PIN_LED_VERDE = 18
PIN_LED_AMARILLO = 19
PIN_LED_ROJO = 21

sensor = dht.DHT22(Pin(PIN_DHT))

led_verde = Pin(PIN_LED_VERDE, Pin.OUT)
led_amarillo = Pin(PIN_LED_AMARILLO, Pin.OUT)
led_rojo = Pin(PIN_LED_ROJO, Pin.OUT)
```

<!--
Notas del presentador:
Explicar que en este primer bloque se importan las librerías necesarias y se definen los pines del ESP32. Reforzar que los números de GPIO del código deben coincidir con las conexiones realizadas en Wokwi. Señalar que el sensor DHT22 usa el pin 15 y que los LED representan los tres estados del ambiente.
-->

---
layout: slide-08-titulo-texto
class: codigo-slide
---

::title::
Código 2: funciones auxiliares

::content::
```python {lines:true,maxHeight:'430px'}
# -----------------------------
# Funciones auxiliares
# -----------------------------
def apagar_leds():
    led_verde.off()
    led_amarillo.off()
    led_rojo.off()

def clasificar_ambiente(temperatura, humedad):
    if temperatura >= 30 or humedad >= 80:
        return "ALERTA", "Ambiente crítico: revisar ventilación o humedad."
    elif temperatura >= 26 or humedad >= 65:
        return "PRECAUCION", "Ambiente en observación: monitorear cambios."
    else:
        return "NORMAL", "Ambiente estable."

def mostrar_estado(estado):
    apagar_leds()

    if estado == "NORMAL":
        led_verde.on()
    elif estado == "PRECAUCION":
        led_amarillo.on()
    else:
        led_rojo.on()

def enviar_telemetria(temperatura, humedad, estado, mensaje):
    print("{")
    print('  "dispositivo": "ESP32-WOKWI-SEMANA-1",')
    print('  "temperatura_c":', temperatura, ",")
    print('  "humedad_pct":', humedad, ",")
    print('  "estado": "' + estado + '",')
    print('  "mensaje": "' + mensaje + '"')
    print("}")
    print("-" * 45)
```

<!--
Notas del presentador:
Explicar que estas funciones organizan el programa para que sea más claro. La función apagar_leds evita que queden varios LED encendidos al mismo tiempo. La función clasificar_ambiente toma decisiones a partir de temperatura y humedad. La función mostrar_estado activa el LED correspondiente. La función enviar_telemetria muestra en consola los datos como si fueran enviados a un tablero IoT.
-->

---
layout: slide-08-titulo-texto
class: codigo-slide
---

::title::
Código 3: ciclo principal

::content::
```python {lines:true,maxHeight:'430px'}
# -----------------------------
# Programa principal
# -----------------------------
print("Iniciando sistema IoT local...")
print("Leyendo DHT22 y activando semáforo ambiental.")
print("-" * 45)

while True:
    try:
        sensor.measure()

        temperatura = sensor.temperature()
        humedad = sensor.humidity()

        estado, mensaje = clasificar_ambiente(temperatura, humedad)

        mostrar_estado(estado)
        enviar_telemetria(temperatura, humedad, estado, mensaje)

    except OSError:
        apagar_leds()
        print("Error: no fue posible leer el sensor DHT22.")
        print("Revise conexión DATA, VCC y GND.")
        print("-" * 45)

    sleep(2)
```

<!--
Notas del presentador:
Explicar que el ciclo while True mantiene activo el sistema IoT. En cada repetición se mide temperatura y humedad, se clasifica el estado ambiental, se enciende el LED correspondiente y se muestra la telemetría en consola. El bloque try except permite manejar errores de lectura del sensor sin detener completamente el programa.
-->

---
layout: slide-08-titulo-texto
---

::title::
Pasos para probar en Wokwi

::content::
1. Crear un nuevo proyecto con ESP32 y MicroPython.
2. Agregar un sensor DHT22.
3. Agregar tres LED con sus resistencias.
4. Conectar los pines según la diapositiva anterior.
5. Copiar el código en `main.py`.
6. Iniciar la simulación.
7. Cambiar los valores del DHT22 desde el simulador.
8. Observar la consola y el cambio de LED.

<!--
Notas del presentador:
Acompañar el paso a paso. Si algún estudiante tiene dificultad, pedir que primero verifique el pin DATA del DHT22 y luego los pines de los LED. La idea es que todos logren ejecutar la simulación, aunque algunos no alcancen a personalizarla.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Producto esperado y análisis

::left::
**Producto esperado**

- Simulación funcionando.
- Lectura de temperatura y humedad.
- Estado ambiental en consola.
- LED verde, amarillo o rojo según condición.
- Evidencia mediante captura de pantalla.

::right::
**Preguntas de análisis**

- ¿Qué dato físico se captura?
- ¿Qué decisión toma el sistema?
- ¿Dónde ocurre el procesamiento?
- ¿Qué pasaría si se enviara a la nube?
- ¿Qué riesgo de seguridad tendría?
- ¿Cómo se podría ahorrar energía?

<!--
Notas del presentador:
Usar estas preguntas para conectar la práctica con edge computing, seguridad, eficiencia energética y arquitectura IoT. Señalar que el procesamiento ocurre localmente en el ESP32, lo cual se relaciona con el concepto de borde.
-->

---
layout: slide-08-titulo-texto
---

::title::
Conceptos clave para esta semana

::content::
Recuerda estas relaciones:

- Edge computing reduce latencia al procesar cerca de la fuente.
- Fog computing distribuye procesamiento cerca de la red local.
- El aprendizaje automático permite detectar patrones y anomalías.
- Los modos de bajo consumo ayudan a prolongar batería.
- La actualización de firmware reduce exposición a malware.
- La autenticación multifactor agrega una capa de seguridad.
- La interoperabilidad favorece escalabilidad y flexibilidad.
- El IIoT busca eficiencia, productividad y mantenimiento predictivo.

<!--
Notas del presentador:
No presentar esto como memorización de respuestas, sino como síntesis conceptual. Relacionar cada punto con un ejemplo visto durante la clase. Por ejemplo, edge computing se evidenció cuando el ESP32 clasificó localmente el estado ambiental.
-->

---
layout: slide-11-dos-titulos-dos-columnas
---

::leftTitle::
Dudas técnicas

::rightTitle::
Dudas conceptuales

::left::
- Conexiones en Wokwi.
- Error de lectura del DHT22.
- Pines del ESP32.
- LED que no enciende.
- Código MicroPython.

::right::
- Diferencia entre IoT e internet tradicional.
- Edge, fog y cloud.
- Sensores y actuadores.
- Seguridad IoT.
- Aplicaciones industriales.

<!--
Notas del presentador:
Abrir espacio de preguntas por máximo 10 a 15 minutos. Priorizar dudas que ayuden a todo el grupo. Si aparece una duda muy específica, responder de forma breve y proponer revisarla después para no afectar el cierre de la sesión.
-->

---
layout: slide-08-titulo-texto
---

::title::
Para terminar, lo que no puedo olvidar es:

::content::
En esta primera semana comprendimos que IoT integra dispositivos físicos, sensores, conectividad, procesamiento y decisiones.

La práctica permitió observar una idea esencial:

**un sistema IoT puede capturar datos, interpretarlos localmente y generar una respuesta visible.**

Este será el punto de partida para profundizar en arquitecturas, comunicación, plataformas, seguridad y aplicaciones.

<!--
Notas del presentador:
Recapitular sin extenderse demasiado. Reforzar que la sesión no termina en el LED, sino en la comprensión del flujo completo: dato físico, procesamiento, decisión y posible comunicación con otros sistemas.
-->

---
layout: slide-06-titulo-superior-texto-izquierda
---

::image::
<img src="/imagenes/encuesta-percepcion-estudiantil.png" alt="Encuesta de percepción estudiantil" />

::title::
Recuerda diligenciar la encuesta de percepción estudiantil

::content::
Antes de finalizar, recuerde diligenciar la **Encuesta de Percepción Estudiantil** cuando esté habilitada.

Su participación permite fortalecer:

- La calidad del curso.
- Las estrategias de acompañamiento.
- La claridad de los recursos.
- La mejora continua de la experiencia académica.

<!--
Notas del presentador:
Hacer el recordatorio de manera cordial y breve. Indicar que la encuesta es importante porque permite recoger la percepción de los estudiantes y mejorar el desarrollo del curso.
-->

---
layout: slide-12-cierre
---

::title::
Gracias por participar

::content::
**Internet de las cosas — Semana 1**

Nos vemos en la próxima sesión.

Pregunta final para llevar:

**¿Qué objeto de su contexto cotidiano podría convertirse en un sistema IoT útil, seguro y sostenible?**

<!--
Notas del presentador:
Cerrar agradeciendo la participación. Invitar a los estudiantes a conservar la simulación como evidencia inicial y a pensar en un posible caso de aplicación para las siguientes semanas.
-->



