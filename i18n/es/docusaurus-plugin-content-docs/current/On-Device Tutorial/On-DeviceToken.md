---
sidebar: false
unlisted: true
---

# Cómo usar el almacenamiento de tokens en el dispositivo

Nuestra función **"Guardar tokens en el dispositivo"** te da más control sobre tus credenciales, porque guarda tus tokens de acceso en tu teléfono en lugar de en los servidores de RelaySMS. Este tutorial explica cómo activar o desactivar esta función y cómo renovar los tokens de Twitter cuando usas el almacenamiento local.

### Activar el almacenamiento de tokens en el dispositivo {#enabling-on-device-token-storage}

Para empezar a guardar tus tokens de acceso en tu dispositivo:

- Abre la app **RelaySMS**.

- Toca **Ajustes**.

- Ve a la sección **Seguridad**.

- Busca el interruptor **"Guardar tokens en el dispositivo"** y actívalo.

<img src="/OnDeviceToken/1.png" alt="Almacenamiento en el dispositivo, paso 1" class="resized-image"/>
<img src="/OnDeviceToken/2.png" alt="Almacenamiento en el dispositivo, paso 2" class="resized-image"/>
<img src="/OnDeviceToken/3.png" alt="Almacenamiento en el dispositivo, paso 3" class="resized-image"/>
<img src="/OnDeviceToken/4.png" alt="Almacenamiento en el dispositivo, paso 4" class="resized-image"/>
<img src="/OnDeviceToken/5.png" alt="Almacenamiento en el dispositivo, paso 5" class="resized-image"/>

### ¿Qué pasa después? {#what-happens-next}

- Todos los tokens de acceso que estaban guardados en los servidores de RelaySMS se transfieren de forma segura a tu dispositivo.

- A partir de ahora, todos los tokens nuevos se guardan solo en tu teléfono.

### Desactivar el almacenamiento de tokens en el dispositivo {#disabling-on-device-token-storage}

Para dejar de usar el almacenamiento local y volver a guardar los tokens en la nube:

1. Ve a **Ajustes** > **Seguridad**.

2. Desactiva el interruptor **"Guardar tokens en el dispositivo"**.

### Qué significa esto: {#what-this-means}

- Los tokens **ya guardados en tu dispositivo** se quedan ahí y siguen funcionando.

- Sin embargo, los **tokens nuevos** que se generen después se guardarán en el **servidor en la nube de RelaySMS**, no en tu dispositivo.

<img src="/OnDeviceToken/5.png" alt="Desactivar el almacenamiento en el dispositivo, paso 1" class="resized-image"/>
<img src="/OnDeviceToken/4.png" alt="Desactivar el almacenamiento en el dispositivo, paso 2" class="resized-image"/>
<img src="/OnDeviceToken/3.png" alt="Desactivar el almacenamiento en el dispositivo, paso 3" class="resized-image"/>

### Renovar los tokens de Twitter (solo con almacenamiento en el dispositivo) {#refreshing-twitter-tokens-for-on-device-use-only}

Por las limitaciones de seguridad de Twitter, los tokens guardados en tu dispositivo solo se pueden usar **una vez por tuit**. Para enviar otro tuit, tienes que **revocar y restaurar** el token.

Así se hace:

1. Después de enviar un tuit, recibirás un **SMS con el estado de entrega**. Si usas un token guardado en el dispositivo, este mensaje incluirá un **token de Twitter renovado.**

2. **Copia el SMS completo** (tal cual).

3. Abre la **app RelaySMS** y ve a la sección **Bandeja de entrada**.

4. **Pega** el SMS completo en la bandeja de entrada.

5. La app extraerá y renovará automáticamente tu token de Twitter.

6. Ya puedes enviar tu siguiente tuit.

<img src="/OnDeviceToken/6.png" alt="Renovar el token de Twitter, paso 1" class="resized-image"/>
<img src="/OnDeviceToken/7.png" alt="Renovar el token de Twitter, paso 2" class="resized-image"/>
<img src="/OnDeviceToken/8.png" alt="Renovar el token de Twitter, paso 3" class="resized-image"/>
<img src="/OnDeviceToken/9.png" alt="Renovar el token de Twitter, paso 4" class="resized-image"/>
<img src="/OnDeviceToken/10.png" alt="Renovar el token de Twitter, paso 5" class="resized-image"/>

Repite este proceso **después de cada mensaje de Twitter** si usas el almacenamiento local de tokens.
