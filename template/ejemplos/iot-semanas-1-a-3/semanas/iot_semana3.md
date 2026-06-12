---
layout: slide-01-portada
---

::title::
Internet de las cosas

::week::
Semana 3

::date::
Mayo 18 de 2026

<!--
Notas del presentador:
Dar la bienvenida a la Open Class de la semana 3 del curso Electiva CPC Internet de las Cosas. Esta sesión debe iniciar reconociendo que, en las semanas anteriores, los estudiantes han revisado la lógica general del Internet de las cosas: dispositivos que capturan datos del entorno físico, microcontroladores que los procesan, redes que permiten su transmisión y plataformas que transforman esos datos en decisiones. A partir de esa base, explicar que esta semana introduce una pregunta crítica: ¿qué ocurre cuando esos dispositivos, datos y redes no están protegidos adecuadamente?

Conviene presentar la seguridad IoT no como un tema aislado de informática, sino como una condición para que los sistemas conectados sean confiables, sostenibles y útiles. Un sensor de temperatura, una cámara IP, una cerradura inteligente, un medidor industrial, un sistema de riego automatizado o una pulsera de salud pueden parecer dispositivos simples; sin embargo, cuando se conectan a una red, pueden convertirse en puntos de entrada para accesos no autorizados, robo de datos, interrupción de servicios, manipulación de información o ataques distribuidos.

Es importante indicar que la clase combinará tres momentos: primero, una activación breve para identificar riesgos cotidianos; segundo, un desarrollo conceptual sobre amenazas, vulnerabilidades, monitoreo, autenticación, actualizaciones, privacidad y auditoría; tercero, una práctica guiada en Wokwi con ESP32 y MicroPython para simular un monitor básico de eventos de seguridad. Aclarar que la práctica no busca realizar ataques reales ni enseñar técnicas ofensivas, sino comprender cómo un sistema puede registrar eventos, clasificar anomalías y activar respuestas sencillas.

Recordar la dinámica institucional de la Open Class: se tendrá una tolerancia máxima de cinco minutos, una actividad de integración breve, desarrollo conceptual suficiente, práctica aplicada, socialización, espacio de dudas y cierre metacognitivo. Invitar a los estudiantes a participar de manera activa, conectando los ejemplos con situaciones reales de hogares, empresas, universidades, laboratorios, ciudades inteligentes e industrias conectadas.
-->

---
layout: slide-02-titulo
---

::title::
Seguridad en sistemas IoT

::content::
Esta sesión aborda los riesgos principales de la interconexión de dispositivos IoT y las prácticas esenciales para protegerlos.

Pregunta orientadora:

**¿Cómo se diseña, configura y monitorea un sistema IoT para reducir riesgos de acceso no autorizado, malware, interrupciones, pérdida de datos y afectaciones a la privacidad?**

<!--
Notas del presentador:
Iniciar esta diapositiva señalando que la seguridad en IoT debe entenderse como un proceso integral. No basta con proteger únicamente la contraseña de un dispositivo ni instalar una herramienta aislada. Un sistema IoT está formado por varias capas: la capa física, donde se ubican sensores y actuadores; la capa de procesamiento local, donde participa el microcontrolador o dispositivo embebido; la capa de conectividad, que puede usar Wi-Fi, Bluetooth, LoRaWAN, Ethernet, redes celulares u otros protocolos; la capa de servicios, donde se almacenan y procesan los datos; y la capa de usuario, donde aparecen aplicaciones, paneles de control, alertas, reportes y decisiones.

La pregunta orientadora debe ayudar a que el estudiante conecte la seguridad con la arquitectura vista en semanas anteriores. Si un sensor captura información personal, si un actuador controla una puerta, si una cámara transmite video, si un dispositivo industrial regula una máquina o si un sistema de salud monitorea signos vitales, entonces la seguridad deja de ser un elemento opcional. En estos casos, una mala configuración puede afectar no solo datos digitales, sino también personas, procesos, recursos económicos, reputación institucional y continuidad operativa.

Explicar que en IoT se presentan riesgos particulares porque muchos dispositivos tienen recursos limitados, firmware desactualizado, configuraciones predeterminadas, contraseñas débiles, poca capacidad de registro de eventos, dependencia de servicios externos y ciclos de vida extensos. Además, en muchos entornos hay cientos o miles de dispositivos conectados, lo que aumenta la superficie de ataque. Una vulnerabilidad pequeña en un equipo aparentemente secundario puede convertirse en una puerta de entrada para comprometer la red completa.

Presentar la sesión como una ruta aplicada: reconocer riesgos, comprender términos técnicos, revisar ejemplos, relacionar la temática con las preguntas de evaluación y desarrollar una práctica guiada. Enfatizar que la finalidad académica es que el estudiante pueda razonar sobre medidas de protección: monitoreo, IDS, SIEM, VPN, MFA, parches, auditorías, configuración segura y protección de la privacidad.
-->

---
layout: slide-09-objetivos
---

::title::
Propósitos de aprendizaje de la sesión

::content::
Al finalizar la Open Class, se espera que el estudiante pueda:

* Identificar riesgos frecuentes en sistemas IoT conectados.
* Diferenciar amenaza, vulnerabilidad, riesgo, incidente y control.
* Reconocer medidas de protección ante DoS, malware, accesos remotos inseguros y fallas de autenticación.
* Relacionar monitoreo, IDS, SIEM, auditorías y logs con la continuidad operativa.
* Aplicar una simulación básica de monitoreo de eventos con ESP32 y MicroPython en Wokwi.
* Reflexionar sobre privacidad, ética y responsabilidad en el tratamiento de datos IoT.

<!--
Notas del presentador:
Explicar que estos propósitos organizan la clase desde una perspectiva conceptual y práctica. El primer propósito busca que el estudiante no vea la seguridad como una lista de términos aislados, sino como una capacidad para observar un sistema IoT y detectar posibles puntos débiles. Por ejemplo, un dispositivo con contraseña de fábrica, una cámara conectada a una red pública, un sensor que envía datos sin cifrado o un equipo que nunca recibe actualizaciones representan situaciones de riesgo que deben ser analizadas.

El segundo propósito es clave para evitar confusiones terminológicas. Una amenaza es un evento o actor con potencial de causar daño; una vulnerabilidad es una debilidad explotable; el riesgo surge de la combinación entre amenaza, vulnerabilidad e impacto; un incidente es la materialización de un evento no deseado; y un control es una medida para reducir la probabilidad o el impacto. Esta distinción permite responder con mayor precisión preguntas de evaluación y casos prácticos.

El tercer propósito se relaciona directamente con los escenarios de seguridad de la semana: ataques de denegación de servicio, malware en dispositivos IoT, acceso remoto inseguro, fallas de autenticación y configuraciones inadecuadas. La idea no es memorizar respuestas, sino entender por qué medidas como firewalls, IDS, VPN, MFA, actualizaciones de firmware y cambios de contraseñas predeterminadas son coherentes con una estrategia de defensa.

El cuarto propósito introduce el valor del monitoreo. En seguridad, lo que no se observa difícilmente puede ser gestionado. Los logs, las alertas, los sistemas de detección de intrusiones y los SIEM permiten analizar eventos, detectar comportamientos anómalos y tomar decisiones oportunas. Esto conecta con la práctica en Wokwi, donde se simularán eventos y respuestas básicas.

Finalmente, subrayar que IoT implica responsabilidades éticas y legales. Muchos sistemas recopilan datos personales o sensibles: ubicación, hábitos, imágenes, patrones de consumo, variables de salud o información de operación empresarial. Por ello, la privacidad debe estar presente desde el diseño, no añadirse al final del proyecto.
-->

---
layout: slide-08-titulo-texto
---

::title::
Contextualización inicial: cuando todo se conecta, todo debe protegerse

::content::
IoT amplía las posibilidades de automatización, monitoreo y toma de decisiones, pero también amplía la superficie de ataque.

Un sistema IoT vulnerable puede generar:

* Acceso no autorizado a dispositivos.
* Interrupción de servicios por tráfico malicioso.
* Robo o exposición de datos.
* Manipulación de sensores o actuadores.
* Uso del dispositivo como parte de una botnet.
* Afectación de la privacidad de personas y organizaciones.

<!--
Notas del presentador:
Plantear esta contextualización con ejemplos cercanos. En un hogar, un dispositivo IoT puede ser una cámara de vigilancia, un asistente de voz, un tomacorriente inteligente o un sistema de iluminación. En una universidad, puede ser un sistema de control de acceso, sensores ambientales, cámaras, laboratorios remotos o dispositivos de medición. En una empresa, puede ser un sistema de inventario automatizado, monitoreo de máquinas, rastreo logístico, control de energía o mantenimiento predictivo. En todos los casos, el valor del sistema depende de que el dato capturado sea confiable, que el dispositivo responda adecuadamente y que la información no sea alterada, expuesta o bloqueada.

Explicar el concepto de superficie de ataque. Cada dispositivo conectado, cada puerto abierto, cada credencial, cada servicio web, cada API, cada aplicación móvil, cada actualización pendiente y cada conexión remota representa una posible vía de acceso. A mayor cantidad de componentes conectados, mayor necesidad de control, monitoreo y gestión. En IoT, esta superficie se incrementa porque los dispositivos suelen estar distribuidos físicamente, operar con recursos limitados y depender de fabricantes, plataformas o redes externas.

El docente puede usar una pregunta sencilla: ¿qué podría pasar si una cámara IP de una oficina mantiene la contraseña predeterminada del fabricante? Las respuestas pueden incluir acceso a video, uso del equipo para escaneo de red, ingreso a otros sistemas, filtración de información o participación en ataques de mayor escala. Luego, ampliar: ¿qué ocurre si el dispositivo controla una puerta, una bomba de agua, una máquina industrial o un sistema médico? En ese punto, la seguridad deja de ser un asunto únicamente digital y se convierte en un asunto operativo, institucional y humano.

Cerrar la explicación recordando que proteger IoT implica aplicar controles antes, durante y después del despliegue. Antes: diseño seguro, selección de dispositivos confiables y configuración inicial. Durante: autenticación, cifrado, segmentación y control de acceso. Después: monitoreo, actualización, auditoría, respuesta a incidentes y mejora continua.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Actividad de integración: ¿riesgo bajo, medio o alto?

::left::
**Duración:** 10 a 15 minutos

**Instrucciones para estudiantes**

Clasifiquen cada caso como riesgo bajo, medio o alto:

* Sensor con contraseña de fábrica.
* Cámara IoT con acceso remoto sin VPN.
* Dispositivo actualizado y con MFA.
* Sensor que envía datos sin cifrado.
* Dispositivo sin registro de eventos.
* Red IoT sin monitoreo de tráfico.

::right::
**Instrucciones para el docente**

* Organizar respuestas rápidas por participación oral o chat.
* Pedir justificación breve de cada clasificación.
* Relacionar las respuestas con amenaza, vulnerabilidad, impacto y control.
* Cerrar con una idea central: **la seguridad IoT se razona por contexto, no por intuición.**

<!--
Notas del presentador:
Esta actividad busca activar saberes previos y preparar el terreno para el desarrollo conceptual. No se trata de que los estudiantes conozcan todos los términos técnicos al inicio, sino de que puedan reconocer situaciones problemáticas y justificar por qué un caso representa mayor o menor riesgo. El docente puede presentar cada caso de manera rápida y pedir que los estudiantes levanten la mano, escriban en el chat o respondan verbalmente con una clasificación: bajo, medio o alto. También se puede pedir que indiquen una medida de mitigación para cada situación.

Para el caso del sensor con contraseña de fábrica, orientar la discusión hacia la configuración segura. Las contraseñas predeterminadas son ampliamente conocidas, pueden estar documentadas en manuales públicos y facilitan accesos no autorizados. La medida mínima sería cambiar la contraseña, usar credenciales robustas, deshabilitar usuarios innecesarios y, cuando sea posible, aplicar autenticación multifactor.

Para la cámara IoT con acceso remoto sin VPN, conectar con la exposición de servicios hacia Internet. Un acceso remoto mal configurado puede permitir que terceros intenten autenticarse, exploten vulnerabilidades o intercepten comunicaciones. La VPN permite crear un canal seguro y restringido para acceder al dispositivo, reduciendo la exposición directa.

Para el dispositivo actualizado y con MFA, explicar que no necesariamente es riesgo cero, pero sí representa una postura más sólida. Las actualizaciones reducen vulnerabilidades conocidas y la autenticación multifactor dificulta el uso indebido de credenciales robadas.

Para el sensor que envía datos sin cifrado, dirigir la discusión hacia confidencialidad e integridad. Aunque el dato parezca simple, puede revelar hábitos, ubicación, condiciones de operación o información sensible. Para el dispositivo sin logs y la red sin monitoreo, enfatizar que la ausencia de observabilidad impide detectar incidentes a tiempo.

Cerrar mostrando que la clasificación depende del contexto: no es igual un sensor en un laboratorio educativo que un actuador en una planta industrial o un dispositivo asociado a datos personales. El riesgo se analiza considerando probabilidad, impacto, controles existentes y criticidad del proceso.
-->

---
layout: slide-11-dos-titulos-dos-columnas
---

::leftTitle::
Términos clave

::rightTitle::
Relación con IoT

::left::
**Amenaza:** posible causa de daño.

**Vulnerabilidad:** debilidad explotable.

**Riesgo:** posibilidad de afectación.

**Incidente:** evento de seguridad materializado.

**Control:** medida para reducir riesgo.

::right::
En IoT, estos conceptos aparecen en dispositivos, redes, firmware, aplicaciones, usuarios, datos, servicios en la nube y procesos de operación.

La seguridad requiere prevenir, detectar, responder y mejorar.

<!--
Notas del presentador:
Esta diapositiva permite consolidar el lenguaje básico de la sesión. Es recomendable dedicar algunos minutos a explicar cada término con ejemplos aplicados a IoT. Una amenaza puede ser un atacante externo, un malware, un botnet, una falla eléctrica, un error humano o incluso una mala configuración. Una vulnerabilidad puede ser una contraseña predeterminada, un firmware obsoleto, un puerto abierto innecesario, una API sin autenticación, una comunicación sin cifrado o un dispositivo sin capacidad de actualización.

El riesgo aparece cuando una amenaza puede aprovechar una vulnerabilidad y generar un impacto. Por ejemplo, si una cámara IoT usa una contraseña débil y está expuesta a Internet, existe el riesgo de acceso no autorizado. Si el dispositivo controla un proceso crítico, el impacto puede ser mayor. Si además no existe monitoreo, el incidente podría pasar desapercibido durante mucho tiempo. Por eso, el análisis de riesgos no se limita a identificar fallas técnicas, sino que considera el contexto de uso, la criticidad del activo, los datos tratados y las consecuencias operativas.

Un incidente es la materialización de un evento no deseado. Puede ser un acceso no autorizado, una interrupción por denegación de servicio, una infección por malware, la filtración de datos, la alteración de mediciones o el uso del dispositivo para atacar otros sistemas. Los controles son las medidas que buscan reducir la probabilidad o el impacto: cambio de contraseñas, MFA, VPN, cifrado, segmentación de red, actualizaciones, firewalls, IDS, SIEM, auditorías, copias de respaldo, políticas de acceso y capacitación.

Conectar estos conceptos con el ciclo de seguridad: prevenir mediante diseño y configuración segura; detectar mediante monitoreo, logs e IDS; responder mediante aislamiento, bloqueo, actualización o restauración; y mejorar mediante auditorías, análisis de causa raíz y ajustes de política. Señalar que la seguridad IoT no es un producto que se instala una vez, sino una práctica permanente durante todo el ciclo de vida del sistema.
-->

---
layout: slide-04-imagen-derecha
---

::title::
Arquitectura IoT y puntos de exposición

::image:: 
<img src="/imagenes/iot-semana3-arquitectura-puntos-exposicion.png" alt="Imagen de apoyo sobre arquitectura IoT y puntos de exposición de seguridad" />

::content::
Un sistema IoT puede exponerse en varias capas:

* Dispositivo físico.
* Firmware y configuración.
* Red local e Internet.
* Servicios en la nube.
* Aplicaciones móviles o web.
* Usuarios, roles y credenciales.
* Datos almacenados o transmitidos.

<!--
Notas del presentador:
Explicar la arquitectura IoT desde una mirada de seguridad. En la capa del dispositivo físico se encuentran sensores, actuadores, microcontroladores, módulos de comunicación, memoria y alimentación. Esta capa puede estar expuesta a manipulación física, reinicios, cambios de conexión, sustitución de componentes o extracción de información si el dispositivo no cuenta con protecciones adecuadas. Aunque en entornos educativos como Wokwi se trabaja de manera simulada, en la realidad muchos dispositivos IoT quedan instalados en espacios públicos, zonas industriales, aulas, vehículos, campos agrícolas o viviendas, donde no siempre existe control físico estricto.

En la capa de firmware y configuración aparecen riesgos como versiones desactualizadas, contraseñas de fábrica, servicios innecesarios habilitados, puertos abiertos, claves embebidas en el código o ausencia de mecanismos de actualización. Esta capa es crítica porque el firmware define el comportamiento interno del dispositivo. Si un atacante logra modificarlo o explotar una vulnerabilidad, puede alterar mediciones, activar actuadores, capturar datos o incorporar el dispositivo a una botnet.

En la capa de red se presentan riesgos asociados a tráfico no cifrado, redes compartidas, ausencia de segmentación, exposición directa a Internet, falta de monitoreo o ataques de denegación de servicio. Una red IoT debería limitar comunicaciones innecesarias y separar dispositivos críticos de redes de usuarios generales. La segmentación reduce la posibilidad de que un compromiso en un dispositivo se propague a toda la organización.

En la capa de servicios en la nube y aplicaciones se deben considerar APIs, almacenamiento de datos, autenticación, autorización, manejo de sesiones, permisos de usuarios y registros de actividad. Muchos sistemas IoT dependen de paneles web o aplicaciones móviles; si estas aplicaciones son inseguras, el dispositivo físico puede estar bien configurado, pero el sistema completo seguirá siendo vulnerable.

Finalmente, recalcar que los datos atraviesan todas las capas. La seguridad debe proteger confidencialidad, integridad y disponibilidad. Confidencialidad significa evitar accesos no autorizados; integridad significa impedir alteraciones indebidas; disponibilidad significa asegurar que el servicio funcione cuando se necesita.
-->

---
layout: slide-08-titulo-texto
---

::title::
Riesgos frecuentes en IoT

::content::
Los riesgos más comunes se relacionan con:

* Contraseñas débiles o predeterminadas.
* Acceso remoto inseguro.
* Falta de actualizaciones de firmware.
* Servicios innecesarios habilitados.
* Tráfico sin cifrado.
* Ausencia de monitoreo y logs.
* Malware y botnets.
* Saturación de red por ataques DoS.
* Recolección excesiva de datos personales.

<!--
Notas del presentador:
Desarrollar cada riesgo con ejemplos concretos. Las contraseñas débiles o predeterminadas siguen siendo uno de los problemas más frecuentes porque muchos dispositivos se instalan rápidamente y se dejan funcionando con la configuración de fábrica. Esto facilita accesos no autorizados, especialmente cuando el dispositivo está conectado a Internet o a una red compartida. La práctica recomendada es cambiar credenciales iniciales, usar contraseñas robustas, aplicar políticas de rotación cuando corresponda y activar autenticación multifactor si el dispositivo o plataforma lo permite.

El acceso remoto inseguro aparece cuando se habilitan servicios de administración sin controles suficientes. Por ejemplo, paneles web abiertos, conexiones sin cifrado, puertos expuestos o credenciales compartidas. La medida correcta es restringir el acceso, usar VPN, aplicar listas de control, autenticar usuarios y registrar eventos. En entornos institucionales, el acceso remoto debe estar documentado y autorizado, no improvisado.

La falta de actualizaciones de firmware permite que vulnerabilidades conocidas permanezcan explotables. Un dispositivo IoT puede operar durante años; por eso, la gestión de parches es fundamental. También debe revisarse si el fabricante ofrece soporte, actualizaciones y documentación. Un dispositivo económico, pero sin mantenimiento de seguridad, puede convertirse en un costo mayor.

La ausencia de monitoreo y logs impide detectar comportamientos anómalos. Un sistema puede estar bajo ataque o presentar fallos sin que el administrador lo note. Por ello se usan herramientas de monitoreo, IDS y SIEM. El malware y las botnets convierten dispositivos vulnerables en herramientas para ataques masivos, especialmente cuando hay muchos equipos similares con configuraciones débiles.

Los ataques DoS buscan afectar la disponibilidad, saturando recursos, tráfico o servicios. En IoT, esto es grave porque puede detener monitoreo, bloquear actuadores o impedir decisiones oportunas. Finalmente, la recolección excesiva de datos personales plantea riesgos éticos y legales. Un sistema IoT debe recolectar solo lo necesario, protegerlo adecuadamente y explicar su finalidad.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Confidencialidad, integridad y disponibilidad en IoT

::left::
**Confidencialidad**

Evitar que datos, credenciales, configuraciones o comunicaciones sean vistos por personas no autorizadas.

**Integridad**

Asegurar que los datos y comandos no sean alterados de forma indebida.

::right::
**Disponibilidad**

Garantizar que dispositivos, redes y servicios funcionen cuando se necesitan.

**Idea central**

En IoT, una falla de seguridad puede afectar información, operaciones y decisiones físicas.

<!--
Notas del presentador:
Presentar la tríada confidencialidad, integridad y disponibilidad como una base clásica de la seguridad de la información, pero traducida al contexto IoT. La confidencialidad se relaciona con proteger datos personales, datos operativos, credenciales, claves de conexión, información de ubicación, video, audio o mediciones sensibles. En un sistema IoT doméstico, la exposición de datos puede revelar hábitos de los usuarios. En una empresa, puede revelar procesos internos. En un entorno educativo, puede comprometer información de estudiantes, docentes o infraestructura.

La integridad es especialmente importante en IoT porque los datos no solo se consultan, sino que pueden generar acciones. Si un sensor de temperatura reporta un valor alterado, un sistema de refrigeración podría activarse o apagarse incorrectamente. Si un sensor de humedad en agricultura envía datos manipulados, el sistema de riego podría desperdiciar agua o dañar cultivos. Si un actuador recibe un comando alterado, puede abrir una puerta, detener una máquina o cambiar una condición física. Por eso, proteger la integridad implica asegurar que los datos provienen de una fuente legítima, que no fueron modificados y que los comandos son autorizados.

La disponibilidad se refiere a que el sistema esté operativo cuando se requiere. Los ataques de denegación de servicio afectan esta dimensión. En un sistema de monitoreo ambiental, la pérdida temporal de disponibilidad puede parecer menor; pero en salud, industria, seguridad física o transporte, puede generar consecuencias serias. Un sistema IoT debe considerar redundancia, monitoreo, balanceo, protección ante tráfico anómalo y planes de contingencia.

Explicar que muchas medidas de seguridad se relacionan con una o varias dimensiones. El cifrado protege confidencialidad; las firmas o validaciones protegen integridad; los firewalls, IDS, mitigación DoS y redundancia protegen disponibilidad. Sin embargo, la seguridad real requiere equilibrio: un sistema extremadamente cerrado puede ser seguro, pero poco usable; un sistema muy abierto puede ser cómodo, pero riesgoso. El diseño debe buscar protección proporcional al contexto.
-->

---
layout: slide-08-titulo-texto
---

::title::
Monitoreo continuo: observar para decidir

::content::
El monitoreo permite identificar comportamientos anómalos antes de que se conviertan en incidentes mayores.

En IoT se monitorean:

* Tráfico de red.
* Intentos de acceso.
* Logs de dispositivos.
* Uso de puertos y protocolos.
* Cambios de configuración.
* Alertas de firmware.
* Disponibilidad de servicios.
* Patrones inusuales de datos.

<!--
Notas del presentador:
Explicar que el monitoreo continuo es uno de los pilares de la seguridad operativa. En un sistema IoT, no basta con instalar dispositivos y esperar que funcionen. Es necesario observar su comportamiento, registrar eventos y analizar señales que indiquen posibles problemas. Un dispositivo que intenta conectarse a direcciones desconocidas, que genera tráfico excesivo, que reinicia repetidamente, que cambia su configuración sin autorización o que presenta intentos fallidos de acceso puede estar mostrando síntomas de compromiso o mala operación.

Los logs son registros de eventos. Pueden incluir información sobre inicios de sesión, cambios de configuración, errores, reinicios, conexiones, comandos enviados, alertas de sensores o fallas de comunicación. Aunque un log individual puede parecer poco importante, el análisis conjunto de muchos registros permite detectar patrones. Por ejemplo, múltiples intentos fallidos de acceso en poco tiempo pueden indicar fuerza bruta; tráfico saliente inusual puede sugerir malware; cambios no autorizados de configuración pueden indicar compromiso.

Un SIEM, sistema de gestión de eventos e información de seguridad, centraliza, correlaciona y analiza eventos provenientes de varias fuentes. En una organización, un SIEM puede recibir logs de dispositivos IoT, servidores, firewalls, aplicaciones y sistemas de autenticación. Su valor está en conectar señales dispersas para generar alertas con contexto. Por eso, frente a la pregunta de qué herramienta puede ayudar a monitorizar y analizar tráfico y eventos en IoT, SIEM es una respuesta coherente.

También debe explicarse que monitoreo no equivale a vigilancia indiscriminada. Desde la perspectiva ética, se debe monitorear lo necesario para proteger el sistema, respetando privacidad, finalidad y proporcionalidad. El monitoreo debe estar definido en políticas, con responsables claros, tiempos de retención y medidas de protección de datos.

Conectar esta idea con la práctica en Wokwi: el monitor serial funcionará como un registro básico de eventos. Aunque es una simulación sencilla, permite comprender cómo un sistema clasifica estados, registra intentos, detecta umbrales anómalos y activa señales visuales.
-->

---
layout: slide-08-titulo-texto
---

::title::
IDS, SIEM y firewalls: controles complementarios

::content::
**Firewall:** filtra conexiones según reglas.

**IDS:** detecta actividad sospechosa en la red o en el sistema.

**SIEM:** centraliza y correlaciona eventos de seguridad.

**Mitigación DoS:** reduce el impacto del tráfico malicioso sobre la disponibilidad.

Estos controles se complementan, no se sustituyen entre sí.

<!--
Notas del presentador:
Aclarar que muchas veces los estudiantes confunden herramientas de red con herramientas de seguridad. Un firewall, un IDS y un SIEM cumplen funciones distintas. El firewall actúa como un punto de control que permite o bloquea tráfico según reglas: origen, destino, puerto, protocolo o política. En IoT puede usarse para impedir conexiones no necesarias, limitar acceso remoto, separar segmentos de red o bloquear tráfico sospechoso. Sin embargo, un firewall no necesariamente interpreta todo el contexto de un comportamiento anómalo.

Un IDS, sistema de detección de intrusiones, observa actividad en la red o en sistemas específicos para identificar patrones sospechosos. Puede detectar intentos de escaneo, tráfico inusual, firmas conocidas de ataque, comportamientos anómalos o intentos de explotación. La pregunta de evaluación sobre qué sistema se utiliza para detectar y responder a actividades sospechosas en una red IoT se relaciona directamente con IDS. Es importante señalar que algunos sistemas son IDS, centrados en detección, y otros son IPS, con capacidad de prevención o bloqueo automático. Para esta sesión basta con comprender que el IDS permite reconocer señales de posible intrusión.

Un SIEM opera en otro nivel. Recibe eventos de múltiples fuentes y los correlaciona para generar una visión más amplia. Por ejemplo, puede combinar intentos fallidos de autenticación, cambios de configuración, tráfico de red y alertas de firmware. Esta correlación ayuda a priorizar incidentes y responder con mayor rapidez. En entornos pequeños puede no haber un SIEM complejo, pero la lógica de centralizar registros y revisar eventos sigue siendo válida.

La mitigación DoS se orienta a proteger la disponibilidad. Un ataque DoS intenta saturar recursos para que el sistema deje de responder. En IoT esto puede afectar sensores, gateways, paneles de control o servicios en la nube. Las medidas incluyen firewalls, sistemas de detección, filtrado, limitación de tasa, segmentación, redundancia y monitoreo.

Cerrar enfatizando que la seguridad se construye por capas. Ningún control aislado resuelve todos los problemas. Un sistema robusto combina prevención, detección, respuesta y revisión continua.
-->

---
layout: slide-05-titulo-superior-texto-derecha
---

::title::
Acceso remoto seguro: VPN, autenticación y mínimo privilegio

::image:: 
<img src="/imagenes/iot-semana3-acceso-remoto-seguro.png" alt="Imagen de apoyo sobre acceso remoto seguro a dispositivos IoT" />

::content::
El acceso remoto debe ser controlado porque puede convertirse en una puerta de entrada al sistema.

Buenas prácticas:

* Usar VPN para conexiones remotas.
* Evitar servicios expuestos directamente a Internet.
* Activar MFA cuando esté disponible.
* Crear usuarios individuales.
* Aplicar mínimo privilegio.
* Registrar accesos y cambios.
* Deshabilitar servicios innecesarios.

<!--
Notas del presentador:
Explicar que el acceso remoto es una necesidad frecuente en IoT. Permite administrar dispositivos ubicados en otras sedes, consultar datos, actualizar configuraciones, revisar fallas o responder a incidentes sin desplazamiento físico. Sin embargo, esa misma facilidad puede convertirse en una vulnerabilidad si el acceso se habilita sin controles. Un panel administrativo expuesto directamente a Internet, una contraseña compartida por varios usuarios o una conexión sin cifrado pueden facilitar accesos indebidos.

La VPN, red privada virtual, crea un canal seguro para conectarse a una red o servicio remoto. En lugar de exponer el dispositivo directamente, se restringe el acceso a usuarios autorizados que primero deben autenticarse en la VPN. Esto reduce la visibilidad pública del servicio y agrega una capa de control. En la pregunta de evaluación sobre acceso remoto, la opción correcta es utilizar conexiones VPN seguras, porque mejora la confidencialidad y reduce la exposición del dispositivo.

La autenticación multifactor agrega una capa adicional. Aunque una contraseña sea robada, adivinada o filtrada, el atacante necesitaría un segundo factor, como una aplicación de autenticación, token o confirmación adicional. En IoT, el MFA puede aplicarse a plataformas de administración, aplicaciones móviles, paneles web o cuentas de usuario. Debe evitarse el uso de contraseñas compartidas, ya que impiden atribuir acciones a personas específicas y dificultan auditorías.

El principio de mínimo privilegio indica que cada usuario, dispositivo o servicio debe tener únicamente los permisos necesarios para cumplir su función. No todos los usuarios requieren acceso de administrador; no todos los dispositivos necesitan comunicarse con toda la red; no todos los servicios deben estar habilitados. Reducir privilegios limita el impacto de un compromiso.

También se deben registrar accesos y cambios. Si alguien modifica una configuración crítica, debe quedar evidencia. Esto permite investigar incidentes y fortalecer la gestión. Cerrar recordando que el acceso remoto seguro combina VPN, autenticación fuerte, roles definidos, cifrado, monitoreo y políticas claras.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Autenticación y configuración segura

::left::
**Autenticación robusta**

* Cambiar contraseñas predeterminadas.
* Usar contraseñas fuertes.
* Activar MFA o 2FA.
* Evitar cuentas compartidas.
* Revocar accesos no usados.

::right::
**Configuración segura**

* Deshabilitar servicios innecesarios.
* Cerrar puertos no requeridos.
* Actualizar firmware.
* Restringir acceso remoto.
* Registrar eventos.
* Documentar cambios.

<!--
Notas del presentador:
Esta diapositiva conecta varias preguntas de evaluación con una misma lógica: la seguridad comienza desde la configuración inicial. Muchos incidentes en IoT no se producen por ataques altamente sofisticados, sino por omisiones básicas: dejar credenciales predeterminadas, activar servicios no utilizados, no revisar permisos, no actualizar firmware o permitir acceso remoto sin restricciones. Por ello, el primer paso de un despliegue seguro es modificar la configuración de fábrica.

La autenticación robusta busca garantizar que solo usuarios y dispositivos autorizados puedan acceder. Cambiar contraseñas predeterminadas es una práctica mínima. Usar contraseñas fuertes reduce la probabilidad de ataques por adivinación o fuerza bruta. Activar MFA o 2FA agrega una capa de seguridad adicional. Aunque en algunos dispositivos IoT pequeños no exista MFA local, sí puede estar disponible en la plataforma de administración o en la aplicación asociada. Es importante explicar que MFA y 2FA se relacionan: 2FA es un caso específico de autenticación multifactor con dos factores.

Las cuentas compartidas deben evitarse porque dificultan la trazabilidad. Si cinco personas usan la misma cuenta de administrador, no se puede saber quién realizó un cambio o si una credencial fue comprometida. En ambientes académicos, empresariales o institucionales, cada usuario debe tener su propia cuenta y permisos adecuados. Además, cuando una persona deja de participar en un proyecto, sus accesos deben ser revocados.

La configuración segura implica reducir la superficie de ataque. Deshabilitar servicios innecesarios impide que funciones no usadas se conviertan en vulnerabilidades. Cerrar puertos no requeridos limita caminos de entrada. Actualizar firmware corrige fallas conocidas. Restringir acceso remoto disminuye exposición. Registrar eventos permite detectar y analizar incidentes. Documentar cambios facilita continuidad y auditoría.

Relacionar esta diapositiva con la pregunta final de evaluación: la medida que ayuda a asegurar la configuración de dispositivos IoT es cambiar contraseñas predeterminadas y deshabilitar servicios no necesarios. Esta opción refleja dos principios: endurecimiento de configuración y reducción de superficie de ataque.
-->

---
layout: slide-08-titulo-texto
---

::title::
Malware, botnets y actualizaciones de firmware

::content::
El malware en IoT puede convertir dispositivos vulnerables en herramientas de ataque.

Una protección básica incluye:

* Mantener firmware actualizado.
* Aplicar parches de seguridad.
* Evitar contraseñas predeterminadas.
* Descargar firmware de fuentes oficiales.
* Revisar alertas del fabricante.
* Retirar dispositivos sin soporte.
* Segmentar la red IoT.

<!--
Notas del presentador:
Explicar que el malware en IoT tiene características particulares. A diferencia de un computador personal, muchos dispositivos IoT operan de forma silenciosa, sin pantalla, sin antivirus tradicional y con poca interacción directa del usuario. Esto significa que pueden estar comprometidos durante mucho tiempo sin que sea evidente. Un dispositivo infectado puede enviar tráfico malicioso, participar en ataques distribuidos, capturar datos, abrir puertas traseras o afectar el funcionamiento normal del sistema.

Las botnets son redes de dispositivos comprometidos controlados por un atacante. En IoT, las botnets pueden crecer rápidamente cuando miles de dispositivos comparten vulnerabilidades similares, contraseñas de fábrica o firmware obsoleto. Un dispositivo doméstico o institucional aparentemente sencillo puede convertirse en parte de un ataque contra terceros. Esta idea ayuda a comprender que la seguridad IoT no solo protege al dueño del dispositivo, sino también al ecosistema digital en general.

La actualización de firmware es una medida esencial porque corrige vulnerabilidades conocidas y mejora la estabilidad. Sin embargo, debe hacerse de manera segura. El firmware debe provenir de fuentes oficiales, verificarse cuando sea posible y aplicarse siguiendo instrucciones del fabricante. Instalar archivos de procedencia dudosa puede introducir nuevos riesgos. También es importante revisar si el fabricante mantiene soporte. Un dispositivo que ya no recibe actualizaciones puede representar un riesgo creciente, especialmente si permanece conectado a una red.

Aplicar parches de seguridad al software y realizar auditorías regulares permite reducir la exposición a fallas conocidas. Esta idea se relaciona con la pregunta de evaluación sobre vulnerabilidades de software: la práctica esencial es realizar auditorías regulares y aplicar parches de seguridad. Ignorar actualizaciones, evitar revisión de código o usar software no actualizado incrementa el riesgo.

La segmentación de red también es relevante. Si un dispositivo IoT se compromete, no debería tener acceso libre a todos los sistemas de la organización. Separar redes, limitar comunicaciones y monitorear tráfico permite contener impactos. Cerrar explicando que seguridad IoT requiere mantenimiento continuo: instalar y olvidar no es una estrategia aceptable.
-->

---
layout: slide-08-titulo-texto
---

::title::
Privacidad en IoT: datos personales, ética y responsabilidad

::content::
IoT puede recolectar datos sobre personas, hábitos, ubicación, salud, consumo, movilidad o comportamiento.

Principios de protección:

* Recolectar solo los datos necesarios.
* Informar la finalidad del tratamiento.
* Proteger datos en tránsito y reposo.
* Limitar accesos.
* Definir tiempos de conservación.
* Evitar usos no autorizados.
* Revisar implicaciones éticas y legales.

<!--
Notas del presentador:
Presentar la privacidad como un componente central de la seguridad IoT. Muchos dispositivos conectados recopilan datos que, por separado, parecen poco sensibles, pero al combinarse pueden revelar información detallada sobre personas y organizaciones. Un sensor de presencia puede indicar horarios de ocupación; un medidor inteligente puede sugerir hábitos de consumo; una cámara puede registrar rostros; un dispositivo de salud puede manejar información altamente sensible; un sistema de geolocalización puede revelar trayectos y rutinas. Por ello, no basta con proteger la red; también se debe analizar qué datos se capturan, para qué se usan y quién puede acceder a ellos.

Explicar el principio de minimización de datos: recolectar solo lo necesario para cumplir la finalidad del sistema. Si un proyecto de monitoreo ambiental solo requiere temperatura y humedad, no debería capturar datos de identidad sin justificación. Si una plataforma necesita almacenar eventos, debe definir qué información queda registrada y durante cuánto tiempo. La protección de datos no se resuelve únicamente con tecnología; requiere decisiones de diseño, políticas institucionales y responsabilidad ética.

La finalidad del tratamiento debe ser clara. Los usuarios o afectados deben saber qué información se recopila y con qué propósito. En entornos académicos, esto es especialmente importante cuando se desarrollan prototipos que capturan datos de personas. Aunque un proyecto sea educativo, debe promover buenas prácticas desde el inicio.

Proteger datos en tránsito implica usar comunicaciones cifradas cuando sea posible. Proteger datos en reposo implica cuidar bases de datos, respaldos, archivos de configuración y registros. Limitar accesos evita que personas sin necesidad operativa consulten información sensible. Definir tiempos de conservación reduce acumulación innecesaria de datos.

Invitar a los estudiantes a pensar en preguntas éticas: ¿el usuario sabe que está siendo monitoreado?, ¿los datos son necesarios?, ¿quién los administra?, ¿qué pasa si se filtran?, ¿cómo se eliminan?, ¿se pueden anonimizar? Cerrar afirmando que la confianza en IoT depende de que las personas perciban que los sistemas conectados son útiles, seguros y respetuosos de su privacidad.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Para tener en cuenta...

::left::
**Conceptos**

* Mitigación de DoS.
* SIEM para monitoreo.
* IDS para detección de intrusiones.
* VPN para acceso remoto.
* MFA y 2FA.
* Firmware actualizado.
* Auditorías y logs.
* Configuración segura.

::right::
**Claves de razonamiento**

* No elegir opciones que ignoren la seguridad.
* No usar configuraciones predeterminadas.
* No deshabilitar protecciones.
* No compartir credenciales.
* Asociar cada herramienta con su función.
* Pensar en prevención, detección y respuesta.

<!--
Notas del presentador:
Usar esta diapositiva para conectar la clase con la actividad evaluativa sin convertirla en una memorización mecánica de respuestas. Explicar que las preguntas de evaluación están orientadas a identificar prácticas correctas de seguridad IoT. En cada caso, el estudiante debe leer el escenario, reconocer el riesgo y seleccionar la medida que realmente reduce la exposición o mejora la respuesta.

Para la pregunta sobre DoS, la idea central es disponibilidad. Los ataques de denegación de servicio buscan saturar recursos o tráfico para impedir el funcionamiento normal. Por eso, las medidas de mitigación incluyen firewalls, detección de intrusiones, filtrado, monitoreo y estrategias de continuidad. Opciones que recomiendan ignorar el monitoreo, usar una única conexión sin redundancia o deshabilitar protecciones son incoherentes con la seguridad.

Para la pregunta sobre monitoreo, la herramienta adecuada es SIEM, porque permite gestionar eventos e información de seguridad, centralizar logs y correlacionar señales. DHCP, DNS y SMTP son protocolos o servicios importantes, pero no cumplen la función principal de análisis de eventos de seguridad. DHCP asigna direcciones IP; DNS resuelve nombres; SMTP gestiona correo. Esta distinción ayuda a evitar confusiones.

Para detección de actividades sospechosas, IDS es la respuesta adecuada. Un IDS identifica patrones de posible intrusión. FTP, DNS y DHCP no son sistemas de detección. Para acceso remoto, VPN es la medida correcta porque crea un canal seguro. Para autenticación, MFA o 2FA fortalecen el acceso; usar contraseñas por defecto, acceso sin autenticación o credenciales sin restricción aumenta el riesgo.

Para malware y vulnerabilidades de software, las prácticas correctas son actualizar firmware, aplicar parches y realizar auditorías regulares. Para auditoría, la respuesta adecuada es revisar logs y realizar auditorías periódicas. Para configuración segura, se deben cambiar contraseñas predeterminadas y deshabilitar servicios innecesarios.

Cerrar con una estrategia de lectura: descartar opciones que promuevan ignorar, deshabilitar, compartir credenciales, mantener valores de fábrica o evitar monitoreo. En seguridad, esas acciones casi siempre aumentan el riesgo.
-->

---
layout: slide-07-multimedia-con-titulo
---

::title::
Seguridad en Internet de las cosas: riesgos y buenas prácticas

::media::
<iframe width="100%" height="100%" src="https://www.youtube.com/embed/BXt-OndesTo?si=lKOkkKKiX4ZSzHRL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!--
Notas del presentador:
Esta diapositiva propone una curaduría responsable sin insertar enlaces no verificados. Es importante explicar que, para una Open Class, los videos deben cumplir una función pedagógica clara y no ocupar demasiado tiempo. Un video breve puede activar interés, reforzar un concepto o permitir una discusión rápida, pero no debe reemplazar el desarrollo conceptual del docente. La recomendación es usar videos de máximo cinco minutos para conservar el ritmo de la clase y mantener la duración efectiva de noventa minutos.

El primer video sugerido debe centrarse en seguridad IoT de manera general: riesgos, vulnerabilidades, buenas prácticas y ejemplos cotidianos. Su propósito es introducir el tema de forma visual y cercana. Puede utilizarse después de la bienvenida o antes de la actividad de integración. Lo ideal es que muestre casos como dispositivos con contraseñas débiles, cámaras conectadas, sensores industriales, actualizaciones de firmware y protección de datos.

El segundo video debe ayudar a diferenciar herramientas técnicas. Muchos estudiantes confunden SIEM, IDS, firewall, antivirus, DNS, DHCP y otros conceptos. Un recurso audiovisual corto puede facilitar la comprensión si presenta ejemplos claros: el firewall como filtro, el IDS como detector de actividad sospechosa y el SIEM como plataforma de correlación de eventos. Este video sería pertinente antes de revisar la relación con la evaluación, porque varias preguntas dependen de reconocer la función específica de cada herramienta.

El tercer video debe enfocarse en privacidad y datos personales. La seguridad IoT no solo consiste en impedir ataques, sino también en recolectar, tratar y conservar datos de manera responsable. Este recurso puede usarse como transición hacia el cierre metacognitivo, preguntando a los estudiantes qué datos genera un dispositivo conectado y qué responsabilidades surgen al tratarlos.

Antes de usar cualquier video en clase, verificar idioma, duración, calidad técnica, pertinencia académica, ausencia de publicidad excesiva y coherencia con los objetivos. Si se inserta en Slidev, usar el formato iframe indicado por la plantilla únicamente cuando el enlace haya sido confirmado.
-->

---
layout: slide-02-titulo
---

::title::
Wokwi: Monitor básico de eventos

::content::
Simularemos un dispositivo IoT que registra condiciones ambientales, intentos de acceso y carga de tráfico.

El sistema clasificará estados como:

**NORMAL · PRECAUCIÓN · ALERTA**

La salida se observará mediante el monitor serial y tres LEDs.

<!--
Notas del presentador:
Presentar la práctica como una simulación educativa orientada a la comprensión defensiva de la seguridad IoT. Aclarar que no se realizará ningún ataque real ni se enseñarán técnicas ofensivas. El objetivo es construir un prototipo conceptual que permita observar eventos, clasificarlos y responder con señales visuales. Esta lógica se parece a lo que hacen sistemas más avanzados: capturan datos, registran eventos, comparan con umbrales y generan alertas.

El prototipo usará un ESP32 en Wokwi con MicroPython. Se simularán tres dimensiones: condiciones ambientales mediante un sensor DHT22, carga de tráfico mediante un potenciómetro y eventos de acceso mediante un pulsador. La temperatura y humedad representan variables del entorno físico. El potenciómetro permitirá simular un aumento de tráfico o carga de red, asociado conceptualmente con saturación o posible DoS. El pulsador representará intentos de acceso fallidos o eventos que deben registrarse.

El sistema usará tres LEDs. El LED verde indicará operación normal. El LED amarillo indicará precaución cuando exista una condición que merece atención, como temperatura elevada, humedad alta, carga moderada o varios intentos fallidos. El LED rojo indicará alerta cuando se superen umbrales críticos, como carga alta o varios intentos de acceso acumulados. El monitor serial imprimirá registros con formato claro, mostrando valores, clasificación y recomendaciones.

Relacionar la práctica con los conceptos de la semana. El monitor serial funciona como un log básico; la clasificación por umbrales representa una detección simple de anomalías; los LEDs funcionan como alertas visuales; el conteo de intentos fallidos se conecta con autenticación; la carga simulada se conecta con disponibilidad y DoS; la recomendación de acciones se conecta con respuesta. Aunque es un prototipo simple, permite comprender la lógica de prevención, detección y respuesta que luego se implementa con herramientas reales como IDS, SIEM, firewalls y plataformas de monitoreo.

Indicar que el producto esperado no es un sistema de seguridad profesional, sino una evidencia funcional de comprensión aplicada.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Componentes necesarios y conexiones sugeridas

::left::
**Componentes en Wokwi**

* ESP32 DevKit.
* Sensor DHT22.
* Potenciómetro.
* Pulsador.
* LED verde.
* LED amarillo.
* LED rojo.
* Resistencias de 220 Ω.
* Cables de conexión.

::right::
**Conexiones sugeridas**

* DHT22 DATA → GPIO 15.
* DHT22 VCC → 3V3.
* DHT22 GND → GND.
* Potenciómetro SIG → GPIO 34.
* Pulsador → GPIO 13 y GND.
* LED verde → GPIO 18.
* LED amarillo → GPIO 19.
* LED rojo → GPIO 21.
* Cátodos de LEDs → GND con resistencia.

<!--
Notas del presentador:
Explicar las conexiones de manera pausada. El ESP32 será el microcontrolador principal. El DHT22 se conecta a 3V3, GND y un pin de datos, en este caso GPIO 15. Este sensor permite simular temperatura y humedad dentro de Wokwi. Aunque el foco de la sesión es seguridad, incluir una variable ambiental ayuda a mantener la estructura típica de un sistema IoT: captura de datos, procesamiento local y generación de alertas.

El potenciómetro se conecta como una entrada analógica. En el ESP32 se recomienda usar pines ADC adecuados; GPIO 34 es una buena opción porque permite lectura analógica. En la simulación, el valor del potenciómetro representará una carga de tráfico. No se está midiendo tráfico real de red, sino creando una variable didáctica que permite comprender el concepto de saturación. Cuando el valor sea bajo, el sistema interpretará carga normal; cuando aumente, interpretará precaución; cuando sea muy alto, interpretará posible condición de DoS o saturación.

El pulsador se conecta a GPIO 13 y GND. Se usará con resistencia interna pull-up desde el código. Esto significa que, cuando no se presiona, el pin estará en alto; cuando se presiona, irá a bajo. Cada pulsación representará un intento de acceso fallido. En un sistema real, estos intentos podrían provenir de una autenticación incorrecta, un acceso no autorizado o un comportamiento repetitivo. En la simulación, se acumularán intentos para activar estados de precaución o alerta.

Los LEDs funcionarán como salida visual. El verde indicará estado normal; el amarillo, precaución; el rojo, alerta. Cada LED debe tener una resistencia de 220 ohmios para limitar corriente. En Wokwi esto ayuda a mantener buenas prácticas de conexión.

Recalcar que la práctica busca reforzar una idea: un dispositivo IoT puede tomar decisiones locales básicas para detectar anomalías y generar alertas. Esa lógica puede escalarse a sistemas reales con logs, dashboards, notificaciones, SIEM o IDS.
-->

---
layout: slide-codigo
---

::title::
Código completo en MicroPython

::content::

```python {lines:true}
from machine import Pin, ADC
from time import sleep, ticks_ms
import dht

# -----------------------------
# Monitor básico de eventos IoT
# ESP32 + MicroPython + Wokwi
# -----------------------------

# Entradas
sensor_dht = dht.DHT22(Pin(15))
pot_trafico = ADC(Pin(34))
pot_trafico.atten(ADC.ATTN_11DB)
boton_acceso = Pin(13, Pin.IN, Pin.PULL_UP)

# Salidas
led_verde = Pin(18, Pin.OUT)
led_amarillo = Pin(19, Pin.OUT)
led_rojo = Pin(21, Pin.OUT)

# Variables de seguridad
intentos_fallidos = 0
ultimo_estado_boton = 1
ultimo_evento_ms = 0

def apagar_leds():
    led_verde.off()
    led_amarillo.off()
    led_rojo.off()

def mostrar_estado(estado):
    apagar_leds()
    if estado == "NORMAL":
        led_verde.on()
    elif estado == "PRECAUCION":
        led_amarillo.on()
    else:
        led_rojo.on()

def clasificar_evento(temp, hum, carga, intentos):
    riesgos = []

    if temp >= 35:
        riesgos.append("temperatura alta")
    elif temp >= 30:
        riesgos.append("temperatura en observacion")

    if hum >= 80:
        riesgos.append("humedad alta")
    elif hum >= 70:
        riesgos.append("humedad en observacion")

    if carga >= 80:
        riesgos.append("posible saturacion o DoS")
    elif carga >= 60:
        riesgos.append("trafico elevado")

    if intentos >= 5:
        riesgos.append("multiples intentos fallidos")
    elif intentos >= 3:
        riesgos.append("intentos fallidos repetidos")

    if carga >= 80 or intentos >= 5 or temp >= 35 or hum >= 80:
        return "ALERTA", riesgos
    elif carga >= 60 or intentos >= 3 or temp >= 30 or hum >= 70:
        return "PRECAUCION", riesgos
    else:
        return "NORMAL", ["sin anomalias relevantes"]

def recomendacion(estado):
    if estado == "NORMAL":
        return "Continuar monitoreo y mantener registros."
    elif estado == "PRECAUCION":
        return "Revisar logs, validar accesos y observar trafico."
    else:
        return "Aplicar respuesta: bloquear, aislar, actualizar o escalar."

while True:
    try:
        # Lectura del pulsador como intento de acceso fallido
        estado_boton = boton_acceso.value()
        ahora = ticks_ms()

        if ultimo_estado_boton == 1 and estado_boton == 0:
            if ahora - ultimo_evento_ms > 300:
                intentos_fallidos += 1
                ultimo_evento_ms = ahora

        ultimo_estado_boton = estado_boton

        # Lectura del sensor ambiental
        sensor_dht.measure()
        temperatura = sensor_dht.temperature()
        humedad = sensor_dht.humidity()

        # Lectura del potenciómetro como carga simulada de tráfico
        lectura_adc = pot_trafico.read()
        carga_trafico = int((lectura_adc / 4095) * 100)

        # Clasificación del evento
        estado, riesgos = clasificar_evento(
            temperatura,
            humedad,
            carga_trafico,
            intentos_fallidos
        )

        mostrar_estado(estado)

        print("----- LOG DE SEGURIDAD IoT -----")
        print("Temperatura:", temperatura, "C")
        print("Humedad:", humedad, "%")
        print("Carga simulada de trafico:", carga_trafico, "%")
        print("Intentos fallidos acumulados:", intentos_fallidos)
        print("Estado:", estado)
        print("Eventos:", ", ".join(riesgos))
        print("Recomendacion:", recomendacion(estado))
        print("--------------------------------")
        print()

        # Reinicio didáctico del contador después de alerta sostenida
        if intentos_fallidos >= 7:
            print("Reinicio controlado del contador de intentos para la simulacion.")
            intentos_fallidos = 0

        sleep(2)

    except Exception as error:
        apagar_leds()
        led_rojo.on()
        print("Error de lectura o configuracion:", error)
        print("Revisar conexiones del sensor DHT22 y pines definidos.")
        sleep(2)
```

<!--
Notas del presentador:
Explicar el código por bloques, no línea por línea de forma excesiva. Primero, se importan las librerías necesarias: Pin y ADC desde machine para controlar entradas y salidas del ESP32, sleep y ticks_ms para temporización, y dht para leer el sensor DHT22. Estas librerías están disponibles en MicroPython y son compatibles con la simulación en Wokwi.

Luego se declaran las entradas. El sensor DHT22 se asigna al GPIO 15. El potenciómetro se declara como entrada analógica en GPIO 34, usando atenuación de 11 dB para ampliar el rango de lectura. El botón se configura en GPIO 13 con resistencia interna pull-up. Esto significa que el pin lee 1 cuando no se presiona y 0 cuando se presiona. Esta configuración simplifica el circuito porque no se requiere resistencia externa para el pulsador.

Después se configuran los LEDs en GPIO 18, 19 y 21. Estos LEDs representan estados de seguridad. El código incluye funciones para apagar todos los LEDs, mostrar un estado y clasificar eventos. La función clasificar_evento es el corazón lógico de la práctica. Recibe temperatura, humedad, carga simulada de tráfico e intentos fallidos. Luego evalúa umbrales y construye una lista de riesgos. Si las variables superan niveles críticos, el estado será ALERTA. Si están en niveles intermedios, será PRECAUCION. Si no se identifican anomalías relevantes, será NORMAL.

El potenciómetro no mide tráfico real, sino que simula una carga de tráfico. Este recurso didáctico permite mover manualmente el valor y observar cómo cambia la clasificación. Cuando la carga supera ciertos umbrales, el sistema interpreta posible saturación o tráfico elevado. Esto se relaciona con la disponibilidad y con ataques DoS.

El botón representa intentos fallidos de acceso. Cada pulsación incrementa el contador. Si se acumulan varios intentos, el estado cambia a precaución o alerta. Esto se conecta con autenticación, monitoreo y detección de comportamientos anómalos. La función recomendacion genera una acción sugerida según el estado.

El monitor serial imprime un log estructurado. Allí se observan variables, eventos y recomendaciones. Este log representa, de forma simplificada, la importancia de registrar eventos para auditorías y respuesta. Cerrar aclarando que los umbrales son didácticos y pueden ajustarse según el contexto.
-->

---
layout: slide-08-titulo-texto
---

::title::
Pasos para probar en Wokwi

::content::

1. Crear un nuevo proyecto con ESP32 y MicroPython.
2. Agregar DHT22, potenciómetro, pulsador y tres LEDs.
3. Realizar las conexiones sugeridas.
4. Copiar el código en `main.py`.
5. Iniciar la simulación.
6. Abrir el monitor serial.
7. Modificar temperatura y humedad del DHT22.
8. Girar el potenciómetro para simular carga de tráfico.
9. Presionar el pulsador para simular intentos fallidos.
10. Observar LEDs, logs y recomendaciones.

<!--
Notas del presentador:
Guiar la práctica con calma, especialmente si algunos estudiantes no han usado Wokwi recientemente. Indicar que Wokwi permite simular el circuito sin necesidad de hardware físico. El primer paso es crear un proyecto con ESP32 y seleccionar MicroPython como entorno. Luego se agregan los componentes desde la librería de Wokwi: DHT22, potenciómetro, pulsador y LEDs. Cada componente debe ubicarse de manera ordenada para facilitar la conexión visual.

Al conectar el DHT22, revisar que VCC vaya a 3V3, GND a GND y DATA a GPIO 15. Si el sensor no responde, normalmente el problema está en el pin de datos o en la alimentación. El potenciómetro debe conectarse con sus extremos a 3V3 y GND, y su pin central o señal a GPIO 34. El pulsador se conecta entre GPIO 13 y GND porque el código usa pull-up interno. Los LEDs deben conectarse desde el pin correspondiente hacia una resistencia y luego a GND. Recordar que el sentido del LED importa: ánodo al pin de salida y cátodo hacia resistencia y tierra, según el montaje elegido.

Una vez copiado el código en main.py, iniciar la simulación. El monitor serial será fundamental, porque allí se verán los logs. Pedir a los estudiantes que primero observen el estado normal. Luego pueden aumentar la temperatura o humedad del sensor DHT22 desde las propiedades del componente. Posteriormente, girar el potenciómetro para simular aumento de carga de tráfico. Finalmente, presionar varias veces el pulsador para simular intentos fallidos de acceso.

Durante la prueba, pedir que identifiquen cuándo cambia de NORMAL a PRECAUCION y de PRECAUCION a ALERTA. También deben observar qué recomendaciones aparecen. Esto permite conectar la práctica con los conceptos de monitoreo, logs, IDS conceptual, respuesta y auditoría. Si hay errores, usar el mensaje del monitor serial para revisar conexiones. Cerrar indicando que un buen prototipo no solo funciona, sino que permite explicar qué mide, qué decide, qué alerta y qué acción sugiere.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Producto esperado y evidencias de aprendizaje

::left::
**Producto esperado**

Un prototipo funcional en Wokwi que:

* Lee temperatura y humedad.
* Simula carga de tráfico.
* Registra intentos fallidos.
* Clasifica estados de seguridad.
* Muestra alertas con LEDs.
* Imprime logs en monitor serial.

::right::
**Evidencias**

El estudiante debe poder explicar:

* Qué evento representa cada entrada.
* Por qué cambia el estado.
* Qué control de seguridad se relaciona.
* Qué acción se recomienda.
* Qué mejoras aplicaría en un sistema real.

<!--
Notas del presentador:
Explicar que el producto esperado no es únicamente el circuito funcionando, sino la capacidad de interpretar lo que ocurre. En educación tecnológica, un prototipo tiene valor cuando permite argumentar decisiones de diseño. Por eso, además de verificar que los LEDs enciendan y que el monitor serial imprima datos, el estudiante debe explicar la relación entre entradas, clasificación y controles de seguridad.

La lectura de temperatura y humedad representa datos físicos capturados por el dispositivo. En un sistema real, estas variables podrían servir para monitoreo ambiental, refrigeración, agricultura, laboratorios, bodegas o espacios institucionales. En esta práctica, cuando superan umbrales, se consideran señales de observación o alerta. Aunque no son eventos de ciberseguridad por sí mismas, permiten recordar que IoT combina mundo físico y digital. Una condición ambiental anómala también puede afectar disponibilidad, integridad de operación o continuidad.

La carga de tráfico simulada mediante potenciómetro representa el comportamiento de red. Al aumentar el valor, se simula una condición de saturación. Esto conecta con DoS y disponibilidad. Los intentos fallidos representados por el pulsador conectan con autenticación y monitoreo de accesos. La clasificación por estados permite introducir una lógica de detección: normal, precaución y alerta. Esta clasificación se parece a los niveles de severidad usados en sistemas reales.

Los LEDs son una forma sencilla de visualizar alertas. El monitor serial funciona como un log. En un sistema real, estos registros podrían enviarse a un dashboard, una base de datos, un SIEM, una plataforma MQTT o un sistema de notificación. Pero antes de escalar, es necesario comprender la lógica básica.

Las evidencias de aprendizaje deben centrarse en la explicación. Preguntar: ¿qué significa que el LED rojo se active?, ¿qué variable generó la alerta?, ¿qué control aplicaría?, ¿cómo se registraría el evento?, ¿qué datos deberían protegerse?, ¿qué pasaría si el dispositivo estuviera conectado a Internet? Este tipo de preguntas permite valorar comprensión aplicada y no solo ejecución técnica.
-->

---
layout: slide-08-titulo-texto
---

::title::
Preguntas de análisis para la práctica

::content::
Después de probar el prototipo, respondan:

* ¿Qué variable se relaciona con disponibilidad?
* ¿Qué evento se relaciona con autenticación?
* ¿Qué parte del sistema funciona como log?
* ¿Qué acción se tomaría ante una alerta roja?
* ¿Cómo se integraría este prototipo con un SIEM?
* ¿Qué datos del sistema podrían considerarse sensibles?
* ¿Qué mejoras aplicarían para hacerlo más seguro?

<!--
Notas del presentador:
Usar estas preguntas para orientar la socialización posterior a la práctica. La primera pregunta busca que el estudiante relacione disponibilidad con carga de tráfico. En el prototipo, el potenciómetro simula tráfico o carga de red. Cuando el valor es alto, se interpreta como una condición que podría afectar la disponibilidad. Esta es una simplificación didáctica de un ataque DoS o de una saturación del sistema. La respuesta esperada es que la disponibilidad se asocia con la capacidad del dispositivo o servicio para seguir funcionando pese a la carga o el tráfico.

La segunda pregunta conecta el pulsador con autenticación. Cada pulsación representa un intento fallido. En un sistema real, estos intentos podrían registrarse cuando alguien ingresa credenciales incorrectas, intenta acceder sin autorización o repite acciones sospechosas. Si se acumulan muchos intentos, se debería activar una respuesta: bloqueo temporal, MFA, notificación, revisión de logs o investigación.

La tercera pregunta identifica el monitor serial como log. Allí se registran valores, estado, eventos y recomendaciones. Aunque es un registro simple, permite demostrar que la observabilidad es fundamental. Sin logs, no habría evidencia para auditar ni aprender del evento.

La cuarta pregunta debe llevar a discutir respuesta a incidentes. Ante una alerta roja, no basta con mirar el LED. En un sistema real habría que aislar el dispositivo, bloquear tráfico, validar credenciales, revisar firmware, analizar logs, notificar responsables y documentar acciones. La respuesta depende del contexto, pero siempre debe ser ordenada.

La quinta pregunta invita a escalar la práctica. Para integrar con un SIEM, el dispositivo o gateway tendría que enviar eventos estructurados a un sistema central. También podría usarse MQTT, HTTP o registros en una base de datos. La sexta pregunta introduce privacidad: valores ambientales, intentos de acceso, identificadores de dispositivo, ubicación o usuario pueden ser sensibles según el contexto. La última pregunta abre espacio a mejoras: cifrado, autenticación, MQTT seguro, certificados, segmentación, actualizaciones y control de acceso.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Socialización breve: del prototipo al sistema real

::left::
**Compartamos**

* Estado que logró activar.
* Variable que generó la alerta.
* Riesgo asociado.
* Control recomendado.
* Mejora posible.

::right::
**Criterios de discusión**

* Coherencia técnica.
* Relación con conceptos de seguridad.
* Claridad en la explicación.
* Pertinencia de la respuesta.
* Consideración de privacidad y datos.

<!--
Notas del presentador:
La socialización debe ser breve para respetar la duración de la Open Class. Se recomienda seleccionar algunos estudiantes o grupos para compartir hallazgos en uno o dos minutos. No es necesario que todos presenten extensamente; se puede pedir participación rápida con respuestas puntuales. El objetivo es pasar del funcionamiento del prototipo a la interpretación conceptual.

Pedir que cada grupo indique qué estado logró activar: normal, precaución o alerta. Luego deben explicar qué variable lo generó. Si fue el potenciómetro, la discusión se orienta hacia disponibilidad y posible saturación. Si fue el pulsador, se orienta hacia autenticación e intentos fallidos. Si fueron temperatura o humedad, se puede hablar de condiciones ambientales y continuidad operativa. Lo importante es que no se queden en “se encendió el LED”, sino que expliquen qué significa.

Después, pedir que asocien un riesgo. Por ejemplo, carga alta puede relacionarse con DoS o congestión; intentos fallidos, con acceso no autorizado; ausencia de logs, con falta de trazabilidad; firmware desactualizado, con explotación de vulnerabilidades. Luego deben proponer un control: firewall, IDS, SIEM, VPN, MFA, actualización, auditoría, segmentación, cambio de contraseña o deshabilitación de servicios innecesarios.

Los criterios de discusión deben guiar la retroalimentación. La coherencia técnica se refiere a que la explicación tenga sentido: no confundir DNS con SIEM, ni DHCP con IDS, ni VPN con contraseña. La relación conceptual implica usar términos de la sesión correctamente. La claridad en la explicación permite evidenciar aprendizaje. La pertinencia de la respuesta se relaciona con elegir controles adecuados al riesgo. La consideración de privacidad recuerda que todo sistema IoT puede manejar datos sensibles.

Cerrar esta socialización destacando buenas ideas de los estudiantes. Si aparece un error conceptual, corregirlo con tono formativo. Por ejemplo, si alguien dice que DHCP detecta intrusiones, aclarar que DHCP asigna direcciones IP, mientras que un IDS detecta actividad sospechosa.
-->

---
layout: slide-08-titulo-texto
---

::title::
Resolución de dudas: preguntas frecuentes

::content::
Preguntas orientadoras para el cierre técnico:

* ¿Cuál es la diferencia entre IDS y SIEM?
* ¿Por qué una VPN mejora el acceso remoto?
* ¿Por qué las contraseñas predeterminadas son peligrosas?
* ¿Qué relación existe entre DoS y disponibilidad?
* ¿Por qué los parches reducen vulnerabilidades?
* ¿Qué debe revisarse en una auditoría IoT?
* ¿Cuándo un dato IoT puede afectar la privacidad?

<!--
Notas del presentador:
Destinar este espacio a resolver dudas en un máximo de quince minutos. Las preguntas frecuentes de la diapositiva pueden usarse si los estudiantes no formulan preguntas de inmediato. La diferencia entre IDS y SIEM suele ser clave: el IDS detecta actividad sospechosa en red o sistema; el SIEM centraliza y correlaciona eventos de múltiples fuentes. Un IDS puede generar una alerta; un SIEM puede recibir esa alerta junto con logs de autenticación, firewall y aplicaciones para construir una visión más completa.

Sobre VPN, explicar que mejora el acceso remoto porque evita exponer directamente el dispositivo o servicio a Internet y crea un canal cifrado y autenticado para usuarios autorizados. No significa que todo esté resuelto, pero reduce la exposición y facilita control. Sobre contraseñas predeterminadas, indicar que son peligrosas porque suelen ser conocidas, repetidas entre dispositivos y fáciles de probar. Cambiarlas es una medida básica de configuración segura.

La relación entre DoS y disponibilidad debe quedar clara. Un ataque DoS no necesariamente busca robar datos, sino impedir que el sistema funcione. En IoT esto puede ser grave porque muchos sistemas conectados dependen de disponibilidad para monitorear, alertar o controlar procesos físicos. Por eso, firewalls, IDS, mitigación de tráfico, redundancia y monitoreo son medidas relevantes.

Sobre parches, explicar que reducen vulnerabilidades conocidas. Si una falla ya fue identificada y corregida por el fabricante, no aplicar el parche mantiene abierta una puerta de ataque. Sin embargo, las actualizaciones deben planificarse, probarse y documentarse, especialmente en entornos críticos.

En auditoría IoT se revisan configuraciones, logs, usuarios, permisos, versiones de firmware, puertos abiertos, servicios activos, políticas de acceso, segmentación, evidencias de actualización y cumplimiento de buenas prácticas. Finalmente, un dato IoT puede afectar privacidad cuando permite identificar personas, inferir hábitos, ubicación, salud, comportamiento, consumo o presencia. Cerrar preguntando si alguna de estas dudas se relaciona con la evaluación semanal.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
¿Qué aprendí y cómo lo aplico?

::left::
**Reflexión individual**

Respondo:

* ¿Qué riesgo IoT comprendo mejor ahora?
* ¿Qué control de seguridad aplicaría primero?
* ¿Qué concepto debo reforzar?
* ¿Qué aprendí con la simulación?

::right::
**Transferencia**

Aplicar lo aprendido a un caso real:

* Hogar inteligente.
* Laboratorio universitario.
* Empresa conectada.
* Sistema de salud.
* Ciudad inteligente.
* Industria 4.0.

<!--
Notas del presentador:
El cierre metacognitivo busca que el estudiante tome conciencia de su propio aprendizaje. No basta con terminar la práctica; es necesario preguntarse qué se comprendió, qué falta reforzar y cómo se aplicaría en un contexto real. Invitar a los estudiantes a responder de manera breve, ya sea mentalmente, en el chat o en una nota personal. La primera pregunta apunta a identificar el riesgo que ahora resulta más claro: DoS, malware, acceso remoto inseguro, contraseñas predeterminadas, falta de monitoreo, ausencia de auditoría o privacidad.

La segunda pregunta orienta hacia la priorización. En seguridad, siempre hay múltiples controles posibles, pero el estudiante debe aprender a decidir por dónde empezar. Si un dispositivo conserva contraseña de fábrica, cambiarla es urgente. Si está expuesto a Internet, restringir acceso y usar VPN puede ser prioritario. Si no hay logs, habilitar registros y monitoreo es fundamental. Si el firmware está desactualizado, aplicar parches puede reducir vulnerabilidades conocidas. Si se tratan datos personales, se debe revisar finalidad, acceso y protección.

La tercera pregunta reconoce que el aprendizaje es progresivo. Algunos estudiantes pueden necesitar reforzar diferencias entre IDS y SIEM; otros, entre VPN y MFA; otros, entre seguridad y privacidad. El docente puede recoger estas necesidades para orientar próximos encuentros o recursos de apoyo.

La cuarta pregunta conecta con la práctica. La simulación permitió observar cómo variables simples pueden transformarse en eventos, estados y recomendaciones. Esta lógica ayuda a comprender sistemas más avanzados.

La transferencia a casos reales es esencial. Pedir que piensen en un hogar inteligente, un laboratorio universitario, una empresa, un sistema de salud, una ciudad inteligente o un entorno industrial. En cada caso, preguntar: ¿qué dispositivos existen?, ¿qué datos capturan?, ¿qué podría fallar?, ¿quién accede?, ¿cómo se monitorea?, ¿qué impacto tendría un incidente? Con esto se cierra la clase desde la aplicación y no solo desde la teoría.
-->

---
layout: slide-08-titulo-texto
---

::title::
Recordatorio institucional

::content::
Antes de finalizar:

* Revisar la actividad o evaluación de la semana.
* Verificar los conceptos clave: DoS, SIEM, IDS, VPN, MFA, firmware, auditoría, logs y configuración segura.
* Participar en la **Encuesta de Percepción Estudiantil** cuando esté disponible.
* Registrar dudas pendientes para el acompañamiento académico.

<!--
Notas del presentador:
Usar esta diapositiva para realizar el cierre institucional. Recordar que la actividad de evaluación de la semana está directamente relacionada con los conceptos trabajados en clase. Recomendar a los estudiantes leer cada pregunta con atención, identificar el riesgo presentado y seleccionar la medida de seguridad que realmente lo mitiga. Insistir en que muchas opciones incorrectas se reconocen porque proponen ignorar monitoreo, mantener configuraciones predeterminadas, deshabilitar protecciones, compartir credenciales o evitar auditorías. Estas acciones son contrarias a una cultura de seguridad.

Repasar de manera oral los conceptos clave. DoS se relaciona con disponibilidad y saturación de servicios. SIEM se relaciona con gestión y correlación de eventos de seguridad. IDS se relaciona con detección de actividad sospechosa. VPN mejora el acceso remoto al crear un canal seguro y restringido. MFA o 2FA fortalecen autenticación. Firmware actualizado y parches reducen vulnerabilidades conocidas. Auditoría y revisión de logs permiten identificar anomalías, evidencias y oportunidades de mejora. Configuración segura implica cambiar contraseñas predeterminadas, cerrar servicios innecesarios y documentar cambios.

Recordar la Encuesta de Percepción Estudiantil como un espacio importante de retroalimentación institucional. Explicar que la participación de los estudiantes permite identificar fortalezas, oportunidades de mejora y necesidades del proceso formativo. Presentarla como un ejercicio de corresponsabilidad académica, no como un trámite.

También invitar a registrar dudas pendientes. Algunas preguntas pueden requerir más tiempo, especialmente si se relacionan con proyectos personales, prácticas adicionales, configuraciones específicas o casos laborales. Indicar que las dudas pueden retomarse en los canales definidos por el curso.

Finalizar agradeciendo la participación y resaltando que la seguridad IoT es una competencia transversal. Todo profesional que diseñe, implemente, administre o evalúe sistemas conectados debe incorporar seguridad y privacidad desde el inicio.
-->

---
layout: slide-12-cierre
---

::title::
Cierre de la sesión

::content::
La seguridad en IoT no consiste únicamente en conectar dispositivos, sino en proteger el ciclo completo:

**captura de datos · procesamiento · comunicación · almacenamiento · acceso · monitoreo · respuesta**

Gracias por participar en la Open Class de la Semana 3.

<!--
Notas del presentador:
Cerrar la sesión retomando la idea principal: IoT permite conectar el mundo físico con sistemas digitales, pero esa conexión implica responsabilidad. Cada sensor, actuador, microcontrolador, red, plataforma y usuario forma parte de una cadena de seguridad. Si un eslabón falla, el sistema completo puede verse afectado. Por eso, la seguridad no debe añadirse al final como un accesorio, sino diseñarse desde el inicio.

Recordar que durante la clase se abordaron riesgos frecuentes: contraseñas predeterminadas, acceso remoto inseguro, falta de actualizaciones, malware, botnets, DoS, ausencia de monitoreo, configuraciones débiles y problemas de privacidad. También se revisaron controles: firewalls, IDS, SIEM, VPN, MFA, parches, auditorías, logs, segmentación y configuración segura. Reforzar que estos controles cumplen funciones distintas y se complementan.

Mencionar la práctica de Wokwi como síntesis aplicada. El prototipo con ESP32 y MicroPython permitió simular monitoreo de eventos, clasificación de estados, generación de alertas y registro en monitor serial. Aunque fue una simulación simple, representa una lógica esencial: medir, observar, clasificar, alertar y responder. Esa misma lógica puede escalarse a sistemas reales con plataformas más avanzadas.

Invitar a los estudiantes a llevar esta reflexión a sus contextos. Si en el futuro diseñan un sistema IoT para una empresa, una institución educativa, un proyecto de salud, un entorno agrícola, un hogar inteligente o una ciudad conectada, deberán preguntarse: ¿qué datos recolecto?, ¿quién accede?, ¿cómo autentico?, ¿cómo actualizo?, ¿cómo monitoreo?, ¿cómo respondo a incidentes?, ¿cómo protejo privacidad?

Finalizar agradeciendo la asistencia, recordando revisar la evaluación de la semana y participar en la Encuesta de Percepción Estudiantil. Cerrar con una frase integradora: un sistema IoT verdaderamente inteligente no solo automatiza procesos; también protege a las personas, los datos y las decisiones que dependen de él.
-->
