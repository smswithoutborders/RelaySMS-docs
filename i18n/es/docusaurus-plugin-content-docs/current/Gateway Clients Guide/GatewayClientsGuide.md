---
sidebar_position: 1
unlisted: true
---

# Números de enrutamiento

Los números de enrutamiento son una parte esencial del funcionamiento de RelaySMS. Son números de teléfono o dispositivos situados en zonas con conexión a internet activa que llevan los mensajes de los usuarios sin conexión a las plataformas en línea.

Cuando un usuario envía un mensaje con RelaySMS sin acceso a internet, el mensaje se entrega por SMS a un número de enrutamiento. Ese número lo reenvía a un servidor en línea, donde se procesa y se publica en la plataforma elegida.

En la app, los números de enrutamiento aparecen en la pestaña Países. Los usuarios deben elegir un número en una región con conexión a internet para que sus mensajes se envíen.

Los números de enrutamiento se pueden configurar con la app DekuSMS. Ampliar su disponibilidad en distintas regiones mejora la fiabilidad, reduce costes y ayuda a que más usuarios sigan conectados durante los cortes de internet.

## Alojar y mantener un número de enrutamiento {#hosting-and-running-a-routing-number}

Sigue esta guía para instalar y configurar un número de enrutamiento de Deku SMS en tu dispositivo Android.

### Requisitos para configurar un número de enrutamiento: {#requirements-for-setting-up-a-routing-number}

#### Dispositivo Android: {#android-device}

- Tu dispositivo debe poder conectarse a internet.  
- Debe tener una tarjeta SIM que pueda recibir SMS.

#### Conexión a internet: {#internet-connection}

- Necesitas una conexión a internet fiable (wifi o datos móviles).  
- Deku SMS usa muy pocos datos, así que los datos móviles son suficientes.

## Pasos para configurar Deku SMS en un dispositivo Android: {#steps-to-configure-deku-sms-on-an-android-device}

### Paso 1: descarga la app Deku SMS {#step-1-download-the-deku-sms-app}

Puedes descargar la app Deku SMS desde cualquiera de estas fuentes:

- Google Play Store  
- F-Droid  
- Versiones de GitHub  

### Paso 2: configura Deku SMS como app de SMS predeterminada {#step-2-set-deku-sms-as-your-default-sms-app}

<img src="/mockup/Deku/1.png" alt="Configurar Deku SMS como predeterminada" class="resized-image"/>

Una vez instalada, configúrala como app de SMS predeterminada en tu dispositivo Android.

### Paso 3: configura el reenvío de mensajes {#step-3-configure-message-forwarding}

<img src="/mockup/Deku/2.png" alt="Menú de Deku SMS" class="resized-image"/>
<img src="/mockup/Deku/3.png" alt="Reenvío de mensajes" class="resized-image"/>


1. Abre la app Deku SMS.  
2. Toca los tres puntos de la esquina superior derecha de la app.  
3. En el menú desplegable, selecciona **Reenvío de mensajes.**

### Paso 4: añade un servidor de pasarela {#step-4-add-a-gateway-server}

<img src="/mockup/Deku/4.png" alt="Página de mensajes enrutados" class="resized-image"/>
<img src="/mockup/Deku/5.png" alt="Menú de la página de mensajes enrutados" class="resized-image"/>
<img src="/mockup/Deku/6.png" alt="Añadir reenviadores HTTPS" class="resized-image"/>


1. Toca los puntos de menú de la esquina superior derecha de la página de mensajes enrutados.  
2. Toca los tres puntos de la esquina superior derecha de la página de mensajes enrutados.  
3. Toca otra vez los tres puntos y elige **Añadir reenviadores HTTPS.**

### Paso 5: rellena la información necesaria {#step-5-fill-in-the-required-information}

<img src="/mockup/Deku/7.png" alt="Formulario del servidor de pasarela" class="resized-image"/>
<img src="/mockup/Deku/8.png" alt="Formulario del servidor de pasarela completado" class="resized-image"/>

- Introduce la siguiente URL:  
https://gatewayserver.smswithoutborders.com/v3/publish  

- **Etiqueta**: escribe un nombre para tu servidor de pasarela.  

- **Marca "Todos"**: asegúrate de que la casilla "Todos" esté marcada para enviar todos los SMS a través del servidor.

### Paso 6: termina la configuración {#step-6-finalize-the-setup}

<img src="/mockup/Deku/9.png" alt="Guardar la configuración" class="resized-image"/>

1. Toca **Guardar** para guardar la configuración de tu servidor de pasarela.

<img src="/mockup/Deku/10.png" alt="Servidor de pasarela guardado" class="resized-image"/>

## Tu número de enrutamiento ya está listo {#your-routing-number-is-now-ready}

Ahora puedes compartir tu número con los usuarios de RelaySMS. Tu dispositivo Android funcionará como número de enrutamiento y llevará los mensajes a través de la app Deku SMS.
