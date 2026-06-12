---
layout: slide-01-portada
---

::title::
Internet de las cosas

::week::
SEMANA 2

::date::
MAYO 11 / 2026

<!--
Notas del presentador:
Dar la bienvenida a la Open Class de la semana 2. Recordar que la sesión tiene una duración efectiva de 90 minutos y que se tendrá una tolerancia máxima de 5 minutos para iniciar. Presentar el tema como una continuación de la semana anterior: después de comprender qué es IoT, ahora se estudiará la estructura que permite que un sistema IoT funcione de manera organizada, interoperable, segura y escalable.
-->

---
layout: slide-02-titulo
---

::title::
Estructuras que soportan el IoT

::content::
En esta sesión analizaremos cómo se integran sensores, actuadores, redes, controladores, plataformas de datos, nube, edge computing, estándares abiertos, seguridad, analítica y resiliencia para construir ecosistemas IoT inteligentes.

La pregunta orientadora será:

**¿Qué elementos hacen que un sistema IoT pueda funcionar de forma conectada, segura, interoperable y útil para la toma de decisiones?**

<!--
Notas del presentador:
Explicar que un sistema IoT no se reduce a conectar un sensor a Internet. Su valor surge cuando los datos del entorno físico son capturados, transmitidos, procesados, protegidos, analizados y convertidos en acciones. Enfatizar que la arquitectura IoT permite ordenar estos elementos para comprender mejor el recorrido del dato desde la percepción hasta la aplicación.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Actividad inicial: mapa rápido de una solución IoT

::left::
**Duración:** 10 minutos.

**Instrucción para estudiantes:**

Piensen en un caso cotidiano donde un objeto físico pueda capturar datos y generar una acción.

Ejemplos posibles:

- Aula inteligente.
- Cultivo monitoreado.
- Parqueadero automatizado.
- Sistema de salud remoto.
- Control ambiental en una empresa.

::right::
**Tarea rápida:**

Identifiquen cinco elementos:

- ¿Qué se mide?
- ¿Con qué sensor?
- ¿Qué dispositivo procesa?
- ¿Cómo se comunica?
- ¿Qué decisión o acción genera?

**Socialización:** dos o tres estudiantes comparten su caso en un minuto.

<!--
Notas del presentador:
Usar esta actividad como diagnóstico. No se requiere que los estudiantes conozcan todos los conceptos técnicos. La intención es que empiecen a reconocer que todo sistema IoT tiene un dato de entrada, un medio de captura, un dispositivo que decide o transmite, una red y una aplicación final. Escuchar las respuestas y tomar una o dos para conectarlas con las capas de arquitectura que se explicarán después.
-->

---
layout: slide-03-imagen-izquierda
---

::title::
De objeto físico a sistema inteligente

::image::
<img src="/imagenes/iot-semana2-objeto-conectado.png" alt="Imagen de apoyo sobre un objeto físico conectado a un ecosistema IoT" />

::content::
Un sistema IoT convierte un objeto físico en una fuente de datos conectada.

El recorrido general puede entenderse así:

**Capturar:** sensores leen variables del entorno.

**Procesar:** un microcontrolador interpreta los datos.

**Comunicar:** una red transporta la información.

**Analizar:** una plataforma organiza y procesa los datos.

**Actuar:** el sistema genera alertas, visualizaciones o respuestas automáticas.

<!--
Notas del presentador:
Explicar que el IoT vincula objetos físicos con capacidades digitales. Una lámpara, una nevera, una máquina industrial o una estación ambiental se convierten en parte de un sistema inteligente cuando pueden medir, enviar información y responder a condiciones. Enfatizar que IoT no consiste únicamente en tener dispositivos con conexión, sino en construir un ecosistema capaz de capturar, transportar, procesar y utilizar datos.
-->

---
layout: slide-08-titulo-texto
---

::title::
Componentes esenciales de una estructura IoT

::content::
Una estructura IoT suele integrar los siguientes elementos:

**Sensores:** capturan variables físicas como temperatura, humedad, movimiento, presión, luz o distancia.

**Actuadores:** ejecutan acciones como encender, mover, abrir, cerrar, activar o detener.

**Microcontroladores:** reciben datos, procesan reglas y coordinan dispositivos.

**Redes de comunicación:** transportan información entre dispositivos, pasarelas, nube y aplicaciones.

**Plataformas de datos:** almacenan, visualizan, procesan y analizan información.

**Aplicaciones:** presentan resultados y permiten tomar decisiones.

<!--
Notas del presentador:
Diferenciar claramente sensor y actuador. El sensor observa el entorno; el actuador modifica el entorno. El microcontrolador funciona como una unidad de coordinación local, pero no necesariamente reemplaza la nube. En un sistema real, la arquitectura puede incluir pasarelas, servidores, bases de datos, dashboards, API, modelos analíticos y mecanismos de seguridad.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Capas básicas de arquitectura IoT

::left::
**Capa de percepción**

Incluye sensores, actuadores, identificación de dispositivos y lectura del entorno físico.

Su función principal es convertir fenómenos físicos en datos digitales.

**Capa de red**

Permite transportar datos entre nodos, pasarelas, servidores, plataformas y aplicaciones.

::right::
**Capa de procesamiento**

Organiza, almacena, filtra y analiza datos en dispositivos locales, gateways, servidores o nube.

**Capa de aplicación**

Entrega valor al usuario mediante paneles, alertas, automatizaciones, reportes o integración con otros sistemas.

<!--
Notas del presentador:
Presentar la arquitectura por capas como una forma pedagógica de comprender el recorrido de la información. La arquitectura tradicional de tres capas habla de percepción, red y aplicación; modelos más detallados agregan procesamiento, negocio o gestión. Para la sesión, conviene trabajar la idea central: cada capa cumple una función distinta y todas deben coordinarse para que el sistema sea útil.
-->

---
layout: slide-04-imagen-derecha
---

::title::
Flujo de datos en un ecosistema IoT

::image::
<img src="/imagenes/iot-semana2-flujo-datos-arquitectura.png" alt="Imagen de apoyo sobre flujo de datos en una arquitectura IoT" />

::content::
El dato IoT no aparece directamente en un dashboard.

Primero debe pasar por un flujo técnico:

**1. Medición:** el sensor captura la variable.

**2. Lectura local:** el ESP32 recibe el dato.

**3. Decisión local:** el dispositivo clasifica o filtra.

**4. Comunicación:** el sistema envía telemetría.

**5. Procesamiento:** la plataforma almacena y analiza.

**6. Acción:** se genera una alerta, visualización o respuesta.

<!--
Notas del presentador:
Explicar que esta secuencia ayuda a comprender por qué la arquitectura es importante. Si una capa falla, el resultado final también se afecta. Por ejemplo, si el sensor mide mal, la nube recibirá datos incorrectos. Si la red es inestable, el sistema puede quedar incomunicado. Si la aplicación no interpreta adecuadamente los datos, la decisión será deficiente.
-->

---
layout: slide-08-titulo-texto
---

::title::
Estándares abiertos e interoperabilidad

::content::
Los estándares abiertos proporcionan reglas comunes para que dispositivos, plataformas y aplicaciones puedan comunicarse sin depender exclusivamente de un fabricante.

En IoT, la interoperabilidad permite que sensores, controladores, pasarelas, nubes y aplicaciones de diferentes proveedores cooperen dentro de una misma solución.

La idea clave es:

**Un sistema interoperable puede crecer, integrarse y mantenerse con mayor flexibilidad.**

<!--
Notas del presentador:
Relacionar esta diapositiva con la pregunta de evaluación sobre estándares abiertos. La respuesta conceptual correcta es que los estándares abiertos proporcionan un marco común que permite la comunicación y cooperación entre dispositivos de diferentes fabricantes. Insistir en que la interoperabilidad no significa solamente conectar físicamente equipos, sino lograr que compartan datos, protocolos, formatos y reglas comprensibles para el sistema.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Protocolos y comunicación en IoT

::left::
**Protocolos de comunicación**

Permiten que los dispositivos intercambien datos bajo reglas comunes.

Ejemplos frecuentes:

- MQTT.
- HTTP.
- CoAP.
- WebSocket.
- Bluetooth Low Energy.
- Zigbee.
- LoRaWAN.
- Wi-Fi.

::right::
**Aspectos que se deben analizar**

- Consumo energético.
- Alcance de la red.
- Latencia.
- Seguridad.
- Volumen de datos.
- Escalabilidad.
- Costo.
- Compatibilidad con plataformas.

<!--
Notas del presentador:
Explicar que no existe un protocolo universalmente mejor. La selección depende del contexto. MQTT suele usarse en escenarios de telemetría por su lógica de publicación y suscripción; HTTP puede ser útil para integraciones web; CoAP se emplea en entornos restringidos. Relacionar los protocolos con la necesidad de interoperabilidad, seguridad y eficiencia energética.
-->

---
layout: slide-08-titulo-texto
---

::title::
Nube en IoT: almacenamiento y procesamiento escalable

::content::
Las plataformas en la nube permiten gestionar grandes volúmenes de datos generados por múltiples dispositivos conectados.

Sus aportes principales son:

**Escalabilidad:** crecer según la cantidad de dispositivos y datos.

**Flexibilidad:** integrar servicios de almacenamiento, análisis, visualización y automatización.

**Disponibilidad:** acceder a la información desde diferentes ubicaciones.

**Integración:** conectar aplicaciones, API, bases de datos y tableros de control.

<!--
Notas del presentador:
Relacionar esta explicación con la pregunta de evaluación sobre plataformas en la nube. El beneficio central es la escalabilidad y flexibilidad para almacenar y procesar grandes volúmenes de datos. Aclarar que la nube no controla el acceso físico a los dispositivos y tampoco reemplaza todos los mecanismos de seguridad; es una capa que ayuda a gestionar datos, procesamiento, servicios y aplicaciones.
-->

---
layout: slide-08-titulo-texto
---

::title::
Edge computing: procesar cerca de la fuente

::content::
El edge computing consiste en procesar datos cerca del lugar donde se generan.

En IoT, esto permite:

**Reducir latencia.**

**Tomar decisiones rápidas.**

**Disminuir tráfico hacia la nube.**

**Mantener operación local ante fallos de conectividad.**

**Filtrar datos antes de enviarlos.**

La ventaja principal frente al procesamiento centralizado es:

**procesar cerca de la fuente de generación del dato.**

<!--
Notas del presentador:
Usar un ejemplo sencillo: si un sensor detecta humo o temperatura crítica, no conviene esperar a que todos los datos viajen a la nube para activar una alarma local. El edge computing permite responder de inmediato. En la evaluación, la idea central es que edge computing mejora la eficiencia al reducir la latencia mediante procesamiento cercano al origen del dato.
-->

---
layout: slide-07-multimedia-con-titulo
---

::title::
Edge computing

::media::
<iframe width="560" height="315" src="https://www.youtube.com/embed/Tx3QbapIOsY?si=ye3ZGuU_bCniMqO9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!--
Notas del presentador:
Usar este video después de explicar nube y edge computing. El propósito pedagógico es reforzar la diferencia entre procesar en servidores centralizados y procesar cerca del origen del dato. Momento recomendado: minuto 30 a 35 de la sesión. Seleccionar un video breve, preferiblemente en español, con una duración máxima de 5 minutos.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Nube y edge no compiten: se complementan

::left::
**Edge computing**

Procesa cerca del dispositivo.

Es útil cuando se requiere:

- Baja latencia.
- Respuesta local inmediata.
- Menor uso de ancho de banda.
- Continuidad ante fallos de red.

::right::
**Cloud computing**

Procesa y almacena a gran escala.

Es útil cuando se requiere:

- Históricos de datos.
- Analítica avanzada.
- Dashboards.
- Integración empresarial.
- Entrenamiento de modelos.
- Administración masiva de dispositivos.

<!--
Notas del presentador:
Evitar presentar edge y nube como alternativas excluyentes. En muchos sistemas IoT se usa una arquitectura híbrida: el dispositivo procesa decisiones críticas localmente y envía datos consolidados a la nube para análisis, reportes, trazabilidad y gestión. Esta distinción ayuda a responder preguntas sobre eficiencia, almacenamiento, procesamiento y toma de decisiones.
-->

---
layout: slide-08-titulo-texto
---

::title::
Seguridad en estructuras IoT

::content::
La seguridad en IoT protege dispositivos, datos, comunicaciones y servicios.

Los protocolos y mecanismos de seguridad permiten:

**Cifrar comunicaciones.**

**Autenticar dispositivos y usuarios.**

**Preservar integridad de datos.**

**Proteger credenciales.**

**Detectar comportamientos anómalos.**

**Actualizar firmware de forma controlada.**

En la arquitectura IoT, la seguridad debe estar presente desde el diseño.

<!--
Notas del presentador:
Conectar esta diapositiva con la pregunta de evaluación sobre protocolos de seguridad. El papel principal de estos protocolos es implementar cifrado y autenticación para asegurar las comunicaciones entre dispositivos. Aclarar que la seguridad no puede agregarse solamente al final; debe considerarse desde el diseño del dispositivo, la comunicación, la plataforma y la aplicación.
-->

---
layout: slide-08-titulo-texto
---

::title::
Blockchain en IoT: integridad y trazabilidad

::content::
Blockchain puede aportar a IoT cuando se requiere registrar eventos de forma confiable, auditable e inmutable.

Sus características principales son:

**Inmutabilidad:** los registros no se modifican fácilmente después de ser validados.

**Transparencia controlada:** los participantes autorizados pueden verificar eventos.

**Trazabilidad:** se puede seguir el historial de datos o transacciones.

**Confianza distribuida:** no depende de una única entidad central para validar todo.

<!--
Notas del presentador:
Aclarar que Blockchain no hace que un sensor mida mejor ni necesariamente aumenta la velocidad de procesamiento. Su aporte principal está en la integridad, trazabilidad y confianza sobre los registros. En IoT puede usarse para cadenas de suministro, certificación de datos, control de identidad de dispositivos o registro de eventos críticos. Relacionar con la evaluación: la opción correcta se orienta a una estructura de datos inmutable y transparente.
-->

---
layout: slide-08-titulo-texto
---

::title::
Resiliencia en redes IoT

::content::
La resiliencia es la capacidad de un sistema IoT para seguir funcionando o recuperarse rápidamente ante fallos.

Se fortalece mediante:

**Redundancia:** rutas, dispositivos o servicios alternos.

**Robustez:** diseño tolerante a errores.

**Monitoreo:** detección temprana de fallos.

**Procesamiento local:** decisiones mínimas aun sin conexión.

**Reintentos y reconexión:** recuperación automática.

**Diseño seguro:** evitar que un fallo comprometa todo el sistema.

<!--
Notas del presentador:
Explicar que un sistema IoT real puede enfrentar pérdida de conectividad, fallos eléctricos, sensores dañados, errores de comunicación o saturación de red. La resiliencia no consiste solo en guardar datos; implica diseñar mecanismos para continuar, degradar el servicio de forma controlada y recuperarse. En la evaluación, la idea central es recuperación rápida mediante redundancia y robustez.
-->

---
layout: slide-08-titulo-texto
---

::title::
Virtualización y gestión de recursos

::content::
La virtualización permite crear entornos lógicos o virtuales que aprovechan mejor los recursos disponibles.

En IoT puede apoyar:

**Escalabilidad:** desplegar servicios según demanda.

**Aislamiento:** separar aplicaciones o funciones.

**Pruebas:** validar soluciones sin afectar producción.

**Gestión centralizada:** administrar servicios desde plataformas.

**Optimización:** distribuir cargas de procesamiento y almacenamiento.

<!--
Notas del presentador:
Explicar que la virtualización no está solamente asociada a computadores personales. En IoT aparece en servidores, contenedores, máquinas virtuales, gateways, plataformas cloud y laboratorios de simulación. Para estudiantes de pregrado, puede entenderse como una forma de crear recursos digitales flexibles que permiten probar, escalar y administrar soluciones sin depender siempre de hardware físico dedicado.
-->

---
layout: slide-08-titulo-texto
---

::title::
Analítica en tiempo real

::content::
Los analíticos en tiempo real permiten procesar datos recientes para apoyar decisiones rápidas y precisas.

En IoT son útiles para:

**Alertas inmediatas.**

**Monitoreo ambiental.**

**Mantenimiento predictivo.**

**Control industrial.**

**Gestión de tráfico.**

**Salud remota.**

**Ahorro energético.**

La clave es pasar de “guardar datos” a **actuar con datos actuales**.

<!--
Notas del presentador:
Relacionar esta diapositiva con la pregunta de evaluación sobre analíticos en tiempo real. El valor principal es el procesamiento y análisis inmediato de datos recopilados para apoyar decisiones rápidas. Usar un ejemplo: una cámara o sensor industrial que detecta una condición crítica debe generar una alerta al instante, no cuando el reporte se revise al final del día.
-->

---
layout: slide-08-titulo-texto
---

::title::
Controladores de dispositivos

::content::
Los controladores de dispositivos gestionan cómo interactúan, se comunican y operan los elementos de una red IoT.

Sus funciones pueden incluir:

**Lectura de sensores.**

**Activación de actuadores.**

**Coordinación de estados.**

**Comunicación con plataformas.**

**Aplicación de reglas locales.**

**Gestión de errores.**

**Sincronización de dispositivos.**

<!--
Notas del presentador:
Explicar que el controlador no es únicamente una pieza de software aislada. En una solución IoT puede estar representado por firmware en un microcontrolador, un gateway, un servicio de administración de dispositivos o una plataforma que coordina la operación. En la evaluación, la idea central es que los controladores gestionan la comunicación y el control de los dispositivos, asegurando operación eficiente y coordinada.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Relación directa con la evaluación de la semana

::left::
**Ideas clave para estudiar**

- Estándares abiertos → interoperabilidad.
- Nube → escalabilidad y procesamiento.
- Blockchain → integridad e inmutabilidad.
- Resiliencia → continuidad ante fallos.
- Interoperabilidad → integración entre fabricantes.

::right::
**Más ideas clave**

- Seguridad → cifrado y autenticación.
- Edge computing → menor latencia.
- Virtualización → recursos escalables.
- Analítica en tiempo real → decisiones rápidas.
- Controladores → coordinación de dispositivos.

<!--
Notas del presentador:
Usar esta diapositiva como puente entre la teoría y el cuestionario. Evitar leer respuestas como memoria mecánica; en su lugar, mostrar cómo cada pregunta puede resolverse si el estudiante identifica la función principal del concepto. Esta estrategia fortalece el razonamiento: cada término debe asociarse con un problema que resuelve dentro de la arquitectura IoT.
-->

---
layout: slide-11-dos-titulos-dos-columnas
---

::leftTitle::
Caso 1: cultivo inteligente

::rightTitle::
Caso 2: aula inteligente

::left::
Un cultivo usa sensores de humedad y temperatura.

El ESP32 procesa localmente si el ambiente está en estado normal, precaución o alerta.

La nube almacena históricos y permite visualizar tendencias.

La resiliencia permite seguir midiendo aunque la conexión falle.

::right::
Un aula mide temperatura, iluminación y presencia.

El sistema ajusta ventilación, iluminación o alertas.

La interoperabilidad permite integrar sensores de distintos fabricantes.

La analítica en tiempo real ayuda a tomar decisiones durante la clase.

<!--
Notas del presentador:
Presentar estos casos como aplicaciones cercanas a los estudiantes. En ambos se observa el mismo patrón arquitectónico: sensores, procesamiento, comunicación, plataforma y decisión. Pedir a los estudiantes que identifiquen dónde aparece la capa de percepción, dónde la red, dónde el procesamiento, dónde la aplicación y qué riesgos de seguridad podrían existir.
-->

---
layout: slide-02-titulo
---

::title::
Práctica guiada en Wokwi

::content::
**Título de la actividad:**

Nodo IoT local con ESP32: percepción, edge, resiliencia y telemetría simulada.

**Propósito:**

Simular un nodo IoT que mida temperatura y humedad, clasifique el estado ambiental localmente, active indicadores visuales y genere mensajes tipo telemetría para representar el envío de datos hacia una plataforma.

<!--
Notas del presentador:
Presentar la práctica como una representación simplificada de arquitectura IoT. La capa de percepción estará dada por el sensor DHT22. El procesamiento local o edge estará en el ESP32. La salida visual se representará con LEDs. La telemetría hacia la nube se simulará con mensajes estructurados en el monitor serial.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Componentes necesarios en Wokwi

::left::
**Componentes principales**

- ESP32 DevKit.
- Sensor DHT22.
- LED verde.
- LED amarillo.
- LED rojo.
- Tres resistencias de 220 Ω.
- Cables de conexión.

::right::
**Representación conceptual**

- DHT22: capa de percepción.
- ESP32: controlador y procesamiento edge.
- LEDs: respuesta local.
- Monitor serial: telemetría hacia plataforma.
- Reglas de estado: analítica básica en tiempo real.
- Manejo de error: resiliencia local.

<!--
Notas del presentador:
Indicar que el montaje no requiere componentes físicos porque se trabajará en simulador. Aun así, conviene hablar como si el montaje pudiera llevarse al laboratorio real. Esto ayuda a comprender la relación entre simulación y prototipado. El sensor DHT22 permite representar la captura de variables ambientales básicas, y el ESP32 permite ejecutar reglas locales para tomar decisiones simples.
-->

---
layout: slide-08-titulo-texto
---

::title::
Conexiones sugeridas

::content::
Realizar las conexiones de la siguiente manera:

**DHT22**
- VCC → 3V3 del ESP32.
- GND → GND del ESP32.
- SDA/DATA → GPIO 15 del ESP32.

**LED verde**
- Ánodo → GPIO 18.
- Cátodo → resistencia de 220 Ω → GND.

**LED amarillo**
- Ánodo → GPIO 19.
- Cátodo → resistencia de 220 Ω → GND.

**LED rojo**
- Ánodo → GPIO 21.
- Cátodo → resistencia de 220 Ω → GND.

<!--
Notas del presentador:
Orientar a los estudiantes en el cableado dentro de Wokwi. Recordar que los LEDs deben conectarse con resistencia para representar una práctica electrónica correcta. En la simulación puede funcionar sin resistencia, pero académicamente conviene mantener buenas prácticas. Recalcar que el pin de datos del DHT22 debe coincidir con el pin configurado en el código, en este caso GPIO 15.
-->

---
layout: slide-codigo
---

::title::
Código completo en MicroPython

::content::
```python {lines:true}
# Nodo IoT local con ESP32, DHT22 y LEDs||
# Semana 2 - Internet de las cosas
# Simulación en Wokwi con MicroPython

from machine import Pin
from time import sleep
import dht
import ujson

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

# -----------------------------
# Funciones de apoyo
# -----------------------------

def apagar_leds():
    led_verde.off()
    led_amarillo.off()
    led_rojo.off()

def clasificar_estado(temperatura, humedad):
    """
    Clasifica el estado ambiental.
    Esta función representa procesamiento local o edge computing.
    """
    if temperatura >= 32 or humedad >= 80:
        return "ALERTA"
    elif temperatura >= 28 or humedad >= 70:
        return "PRECAUCION"
    else:
        return "NORMAL"

def mostrar_estado(estado):
    """
    Activa una salida visual local según el estado detectado.
    """
    apagar_leds()

    if estado == "NORMAL":
        led_verde.on()
    elif estado == "PRECAUCION":
        led_amarillo.on()
    elif estado == "ALERTA":
        led_rojo.on()

def construir_telemetria(temperatura, humedad, estado):
    """
    Crea un mensaje estructurado tipo JSON.
    En un sistema real, este mensaje podría enviarse a una nube,
    broker MQTT, API o plataforma IoT.
    """
    datos = {
        "dispositivo": "esp32-aula-01",
        "sensor": "DHT22",
        "temperatura_c": temperatura,
        "humedad_pct": humedad,
        "estado": estado,
        "procesamiento": "edge",
        "accion_local": "led_indicador",
        "destino_simulado": "monitor_serial"
    }

    return ujson.dumps(datos)

# -----------------------------
# Programa principal
# -----------------------------

print("Nodo IoT iniciado")
print("Arquitectura representada: percepcion -> edge -> telemetria -> aplicacion")
print("Ajuste temperatura y humedad del DHT22 en Wokwi para observar cambios.")
print("-" * 60)

while True:
    try:
        # Capa de percepción: lectura del sensor
        sensor.measure()
        temperatura = sensor.temperature()
        humedad = sensor.humidity()

        # Procesamiento local: clasificación del estado
        estado = clasificar_estado(temperatura, humedad)

        # Respuesta local: indicador visual
        mostrar_estado(estado)

        # Telemetría simulada: salida por monitor serial
        mensaje = construir_telemetria(temperatura, humedad, estado)
        print(mensaje)

    except Exception as error:
        # Resiliencia básica: manejo de error sin detener el sistema
        apagar_leds()
        led_rojo.on()

        mensaje_error = {
            "dispositivo": "esp32-aula-01",
            "estado": "ERROR_SENSOR",
            "detalle": str(error),
            "accion_local": "led_rojo",
            "recuperacion": "reintento_automatico"
        }

        print(ujson.dumps(mensaje_error))

    sleep(2)
```
<!-- Notas del presentador: Explicar el código por bloques. Primero, se importan las librerías necesarias. Luego se configuran pines y componentes. La función clasificar_estado representa el procesamiento local, porque el ESP32 decide sin esperar respuesta de la nube. La función construir_telemetria muestra cómo se podría preparar un mensaje JSON para una plataforma IoT. El bloque try-except representa resiliencia básica, porque el sistema no se detiene si ocurre un error de lectura. -->

---
layout: slide-08-titulo-texto
---

::title::
Pasos para probar en Wokwi

::content::
1. Crear un nuevo proyecto de ESP32 con MicroPython en Wokwi.

2. Agregar el sensor DHT22 y tres LEDs.

3. Realizar las conexiones sugeridas.

4. Copiar el código completo en el archivo main.py.

5. Ejecutar la simulación.

6. Abrir el monitor serial.

7. Cambiar manualmente la temperatura y humedad del DHT22.

8. Observar el cambio de estado: NORMAL, PRECAUCION, ALERTA o ERROR_SENSOR.

<!-- Notas del presentador: Acompañar el proceso paso a paso. Recordar que en Wokwi los proyectos MicroPython usan un archivo main.py que se ejecuta al iniciar la simulación. Si un estudiante no ve cambios, verificar primero el pin del DHT22, luego la conexión a GND y 3V3, y finalmente que los pines de los LEDs coincidan con el código. -->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Producto esperado de la práctica

::left::
Salida visual

El LED verde se enciende cuando el ambiente está normal.

El LED amarillo se enciende cuando hay precaución.

El LED rojo se enciende cuando hay alerta o error de sensor.

::right::
Salida por monitor serial

El sistema imprime mensajes tipo JSON con:

Identificador del dispositivo.
Sensor usado.
Temperatura.
Humedad.
Estado.
Tipo de procesamiento.
Acción local.
Destino simulado.
<!-- Notas del presentador: Mostrar que la práctica permite observar dos dimensiones: una acción local y una salida de datos. En un sistema IoT real, estos mensajes podrían enviarse por MQTT, HTTP o WebSocket hacia una plataforma. En la simulación, el monitor serial cumple el papel de visualizador de telemetría para que el estudiante entienda el formato de los datos. -->

---
layout: slide-08-titulo-texto
---

::title::
Lectura arquitectónica de la práctica

::content::
La simulación representa varias ideas centrales de la semana:

Percepción: el DHT22 mide temperatura y humedad.

Controlador: el ESP32 coordina lectura, decisión y salida.

Edge computing: la clasificación se realiza localmente.

Analítica en tiempo real: el estado se calcula con datos actuales.

Aplicación: los LEDs y el monitor serial presentan información.

Resiliencia: el sistema maneja errores y continúa intentando operar.

<!-- Notas del presentador: Pedir a los estudiantes que no vean la práctica solo como un ejercicio de programación. Cada parte representa un concepto de arquitectura IoT. El sensor es percepción, el ESP32 es controlador, las reglas son procesamiento local, el monitor serial simula la comunicación de datos y los LEDs representan una respuesta inmediata. Esta lectura ayuda a conectar la práctica con la evaluación. -->

---
layout: slide-08-titulo-texto
---

::title::
Preguntas de análisis para la práctica

::content::
Después de ejecutar la simulación, responder:

1. ¿Qué parte del montaje corresponde a la capa de percepción?

2. ¿Dónde ocurre el procesamiento edge?

3. ¿Qué información podría enviarse a una plataforma en la nube?

4. ¿Qué pasaría si se pierde la conexión con la nube?

5. ¿Qué mecanismos de seguridad deberían agregarse?

6. ¿Cómo se podría mejorar la interoperabilidad del sistema?

7. ¿Qué elementos aumentarían la resiliencia del prototipo?

<!-- Notas del presentador: Usar estas preguntas para orientar la socialización. No se espera una respuesta extensa, sino que los estudiantes conecten práctica y teoría. Si hay poco tiempo, seleccionar tres preguntas: capa de percepción, procesamiento edge y seguridad. Si hay mayor participación, pedir que propongan cómo convertir este prototipo en una solución para aula, cultivo, laboratorio o industria. -->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Socialización breve

::left::
Duración: 7 minutos.

Cada grupo o estudiante comparte una observación:

Un resultado obtenido.
Un error encontrado.
Una mejora posible.
Una relación con la evaluación.

::right::
Preguntas orientadoras

¿Qué concepto se hizo más claro con la práctica?
¿Qué parte del sistema fallaría primero en un caso real?
¿Qué dato sería útil almacenar en la nube?
¿Qué acción debería ocurrir localmente sin esperar Internet?
<!-- Notas del presentador: Administrar el tiempo de socialización para no extenderse más de lo planeado. Invitar a intervenciones cortas y concretas. Valorar tanto los aciertos como los errores técnicos, porque los errores permiten hablar de resiliencia, depuración y diseño robusto. Cerrar la socialización retomando las ideas de estándares, nube, seguridad, edge y controladores. -->

---
layout: slide-08-titulo-texto
---

::title::
Resolución de dudas

::content::
Espacio final para aclarar preguntas sobre:

Conceptos de arquitectura IoT.

Estándares abiertos e interoperabilidad.

Nube, edge computing y virtualización.

Seguridad, Blockchain y resiliencia.

Analítica en tiempo real y controladores.

Montaje en Wokwi y lectura del código MicroPython.

Tiempo máximo sugerido: 10 a 15 minutos.

<!-- Notas del presentador: Usar este espacio para resolver dudas puntuales sin abrir nuevos temas extensos. Si aparece una pregunta que requiere una explicación larga, responder lo esencial y sugerir retomarla en asesoría, foro o material complementario. Mantener el foco en los conceptos evaluables y en la práctica desarrollada. -->

---
layout: slide-08-titulo-texto
---

::title::
Cierre académico

::content::
La estructura IoT permite comprender cómo un sistema conectado pasa de capturar datos a generar valor.

En esta semana, las ideas centrales son:

Los sensores capturan datos.

Los controladores coordinan dispositivos.

Las redes comunican.

La nube escala almacenamiento y procesamiento.

El edge reduce latencia.

Los estándares abiertos facilitan interoperabilidad.

La seguridad, la resiliencia y la analítica fortalecen el sistema.

<!-- Notas del presentador: Realizar una síntesis breve y clara. Reforzar que la evaluación se puede abordar identificando la función principal de cada concepto. Por ejemplo, si se habla de interoperabilidad, pensar en integración entre fabricantes; si se habla de edge, pensar en procesamiento cercano al origen; si se habla de nube, pensar en escalabilidad; si se habla de seguridad, pensar en cifrado y autenticación. -->

---
layout: slide-08-titulo-texto
---

::title::
Recordatorio institucional

::content::
Antes de finalizar, recuerde revisar los recursos del aula virtual y desarrollar la actividad correspondiente a la semana.

También se invita a diligenciar la Encuesta de Percepción Estudiantil, ya que sus respuestas contribuyen al mejoramiento continuo del curso, la metodología, los recursos y el acompañamiento académico.

<!-- Notas del presentador: Hacer el recordatorio de manera explícita y cordial. Explicar que la encuesta no es un trámite aislado, sino una herramienta institucional para fortalecer la experiencia académica. Invitar a los estudiantes a responder con criterio, responsabilidad y sentido formativo. -->

---
layout: slide-12-cierre
---

::title::
Gracias por su participación

::content::
Internet de las cosas — Semana 2

Estructuras, arquitectura, interoperabilidad, seguridad, nube, edge computing y práctica con ESP32.

Próximo paso: revisar la actividad de la semana, fortalecer los conceptos clave y practicar nuevamente la simulación en Wokwi.

<!-- Notas del presentador: Cerrar agradeciendo la participación. Invitar a los estudiantes a conservar el código de la práctica y modificar los umbrales de temperatura y humedad como ejercicio autónomo. Recordar que el aprendizaje de IoT mejora cuando se conectan tres dimensiones: arquitectura conceptual, análisis de casos y prototipado técnico. -->