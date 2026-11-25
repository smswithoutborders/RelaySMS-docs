---
sidebar_position: 3
---

# RelaySMS

## Preguntas frecuentes sobre la app RelaySMS

### 1. **¿Necesito conexión a internet para usar RelaySMS?** {#1-do-i-need-an-internet-connection-to-use-relaysms}

- **Respuesta:**
  - **No** necesitas internet para enviar mensajes. RelaySMS envía tu mensaje por SMS a un número de enrutamiento, que lo publica en línea en la plataforma que elijas.
  - **Sí** necesitas internet para descargar la app y para guardar plataformas (Gmail, Bluesky, Telegram, RelaySMS Mail, Mastodon). Guarda tus plataformas antes de un corte de internet.

### 2. **¿Cuál es la forma más rápida de enviar un mensaje?** {#2-what-is-the-quickest-way-to-send-a-message}

- **Respuesta:**
  - Usa **RelaySMS Mail sin conexión**. No necesita configuración ni plataformas guardadas.
  - Toca **Redactar**, selecciona **"Enviar desde un alias aleatorio"**, introduce la dirección de correo del destinatario y tu mensaje, y toca **Enviar**.
  - Consulta [Enviar un mensaje](/docs/Android%20Tutorial/Step-5-Sending-a-Message).

### 3. **¿A qué plataformas puedo enviar?** {#3-which-platforms-can-i-send-to}

- **Respuesta:**
  - Actualmente RelaySMS admite **Gmail**, **Bluesky**, **Telegram**, **RelaySMS Mail** y **Mastodon**.
  - Ve a la pestaña **Plataformas** y toca una plataforma para guardarla. Una plataforma guardada se ilumina. Tócala para ver qué cuenta está conectada.
  - Consulta [Guardar plataformas](/docs/Android%20Tutorial/Step-3-Save-Platforms).

### 4. **¿Qué diferencia hay entre una cuenta de RelaySMS Mail anónima y una autenticada?** {#4-what-is-the-difference-between-an-anonymous-and-an-authenticated-relaysms-mail-account}

- **Respuesta:**
  - **Anónima (RelaySMS Mail sin conexión):** envías desde un alias aleatorio sin verificar tu número de teléfono. Útil para enviar rápido.
  - **Autenticada (RelaySMS Mail guardado):** verificas tu número de teléfono con un código enviado por Signal o Telegram. Así puedes recibir respuestas por SMS, incluso durante un corte de internet, y tu cuenta es más segura.

### 5. **¿Por qué no recibo el código de verificación de RelaySMS Mail?** {#5-why-am-i-not-receiving-the-verification-code-for-relaysms-mail}

- **Posibles causas:**
  - El código se envía por **Signal** o **Telegram**, no por SMS. Revisa la app que elegiste.
  - El número que introdujiste no está registrado en esa app, o el prefijo del país es incorrecto.
  - No tenías conexión a internet al solicitar el código.
- **Solución:**
  - Espera un minuto y vuelve a tocar **Solicitar código**, o elige la otra app.
  - Consulta la [Guía de solución de problemas](/docs/Troubleshooting/Troubleshooting-FAQ) para más ayuda.

### 6. **¿Qué es un número de enrutamiento y cuál debo elegir?** {#6-what-is-a-routing-number-and-which-one-should-i-choose}

- **Respuesta:**
  - Un número de enrutamiento es un número de teléfono conectado a internet. Recibe tu SMS y reenvía tu mensaje a la plataforma que elijas.
  - Al elegir uno, ten en cuenta:
    - ¿Ese país sufre un corte de internet?
    - ¿Tu SIM puede enviar SMS a ese país?
    - ¿Qué número está más cerca de ti?
    - ¿Qué número te sale más barato para enviar SMS?
  - También puedes añadir tu propio número de enrutamiento. Consulta [Números de enrutamiento](/docs/Android%20Tutorial/Step-6-Routing-Numbers).

### 7. **¿Por qué no se entregan mis mensajes?** {#7-why-are-my-messages-not-being-delivered}

- **Posibles causas:**
  - El número de enrutamiento que elegiste no funciona o está en un país con un corte.
  - Tu tarjeta SIM no tiene saldo o no puede enviar SMS al país del número de enrutamiento.
  - RelaySMS no es tu app de mensajería predeterminada y el mensaje no se envió desde la app de SMS a la que se te redirigió.
  - El acceso a una plataforma guardada ha caducado.
- **Solución:**
  - Prueba otro número de enrutamiento. Si marcaste **"No volver a preguntar"**, puede que tengas que elegir uno nuevo.
  - Comprueba el saldo y la señal de tu SIM.
  - Elimina la plataforma y vuelve a guardarla.

### 8. **¿Por qué mi SMS saliente parece una serie de letras y números al azar?** {#8-why-does-my-outgoing-sms-look-like-random-letters-and-numbers}

- **Respuesta:**
  - Es lo esperado. RelaySMS cifra tu mensaje automáticamente antes de enviarlo por SMS. No tienes que hacer nada para activar el cifrado.

### 9. **¿Debo hacer de RelaySMS mi app de mensajería predeterminada?** {#9-should-i-make-relaysms-my-default-messaging-app}

- **Respuesta:**
  - Es opcional, pero recomendable. Como app de mensajería predeterminada, RelaySMS puede enviar mensajes directamente y te permite **enviar imágenes**.
  - Si no es tu app predeterminada, se te pedirá que elijas una app de SMS para terminar cada envío.

### 10. **¿Cómo envío una imagen?** {#10-how-do-i-send-an-image}

- **Solución:**
  - Configura RelaySMS como tu app de mensajería predeterminada.
  - Toca **Redactar**, elige tu plataforma, toca el icono de adjunto y selecciona tu imagen.
  - Usa las herramientas de compresión y cambio de tamaño para reducir el coste en SMS y enviar más rápido, y luego toca **Listo** y **Enviar**.
  - Consulta [Enviar una imagen](/docs/Android%20Tutorial/Step-5-Sending-a-Message#sending-an-image).

### 11. **¿Dónde se guardan mis plataformas?** {#11-where-are-my-saved-platforms-stored}

- **Respuesta:**
  - Tus plataformas guardadas se almacenan **en tu dispositivo**. Si borras la app, borras sus datos o cambias de teléfono, puedes perderlas.
  - [Haz copias de seguridad](/docs/Android%20Tutorial/Step-4-Back-Up-and-Restore#back-up) con frecuencia y guarda tu clave de verificación en un lugar seguro.

### 12. **¿Cómo hago una copia de seguridad de mis plataformas y cómo las restauro?** {#12-how-do-i-back-up-and-restore-my-platforms}

- **Solución:**
  - **Copia de seguridad:** toca el menú de 3 puntos de la pantalla de inicio y luego **Copia de seguridad > Hacer copia ahora**. Guarda el archivo, toca **Ver clave de verificación** y guarda la clave en un lugar seguro.
  - **Restaurar:** solo puedes restaurar en la **pantalla de bienvenida, durante los primeros pasos**. Toca **Restaurar copia de seguridad**, elige tu archivo e introduce tu clave de verificación.
  - Consulta [Copia de seguridad y restauración](/docs/Android%20Tutorial/Step-4-Back-Up-and-Restore).

### 13. **¿Cómo concedo permisos de SMS a RelaySMS?** {#13-how-do-i-grant-sms-permissions-for-relaysms}

- **Solución:**
  - Abre los **Ajustes** de tu teléfono.
  - Ve a **Aplicaciones** y selecciona **RelaySMS**.
  - Toca **Permisos** y configura el permiso de SMS en **Permitir**.

### 14. **¿Por qué no recibo notificaciones de RelaySMS?** {#14-why-am-i-not-getting-notifications-from-relaysms}

- **Posibles causas:**
  - Las notificaciones de RelaySMS están desactivadas en los ajustes de tu dispositivo.
  - La app está limitada por la optimización de batería o el modo "No molestar".
  - Tu dispositivo no tiene señal para recibir SMS.

### 15. **¿Por qué RelaySMS se cierra o se congela?** {#15-why-does-relaysms-keep-crashing-or-freezing}

- **Solución:**
  - Asegúrate de tener la última versión de la app.
  - Reinicia tu teléfono.
  - Borra la caché de la app: **Ajustes > Aplicaciones > RelaySMS > Almacenamiento > Borrar caché**.
  - RelaySMS requiere **Android 7.0 o posterior**.

> *Borrar los **datos** de la app elimina tus plataformas guardadas. Haz antes una copia de seguridad.*

---

# RelaySMS en iOS

### 1. **¿Cómo instalo RelaySMS en iOS?** {#1-how-do-i-install-relaysms-on-ios}

- **Pasos:**
  1. Abre la App Store en tu iPhone.
  2. Busca **"RelaySMS"** o usa [este enlace](https://apps.apple.com/us/app/relaysms/id6630382970).
  3. Toca **Obtener** para descargar e instalar la app.

### 2. **¿Cuáles son los requisitos de RelaySMS en iOS?** {#2-what-are-the-system-requirements-for-relaysms-on-ios}

- **Respuesta:**
  - Un iPhone que pueda enviar SMS y tenga **iOS 15.0 o posterior**.

### 3. **¿Qué plataformas están disponibles en iOS?** {#3-which-platforms-are-available-on-ios}

- **Respuesta:**
  - Puedes guardar **Bluesky**, **Gmail**, **Mastodon** y **Telegram**. También puedes enviar correos con **R-Mail** sin guardar nada.

### 4. **¿Cómo envío un mensaje en iOS?** {#4-how-do-i-send-a-message-on-ios}

- **Respuesta:**
  - Toca el botón de redactar. En el menú **Enviar con...**, elige una plataforma guardada o la opción **Sin cuenta** de abajo para enviar un correo desde una dirección aleatoria (R-Mail). No puedes recibir respuestas en R-Mail.
  - Toca el icono de enviar, comprueba el número de enrutamiento y envía. iOS abre una pantalla de mensaje con tu mensaje cifrado. Toca la flecha de enviar para terminar.
  - Consulta [Enviar un mensaje en iOS](/docs/iOS%20Tutorial/Step-5-Sending-a-Message).

### 5. **¿Cómo hago una copia de seguridad y restauro en iOS?** {#5-how-do-i-back-up-and-restore-on-ios}

- **Respuesta:**
  - **Copia de seguridad:** toca el menú **...**, luego **Copias de seguridad**, y sigue los pasos. Elige una carpeta para la copia y guarda tu **clave de recuperación** de 64 caracteres en un lugar seguro.
  - **Restaurar:** solo puedes restaurar en la pantalla de bienvenida, durante los primeros pasos. Toca **Restaurar copia de seguridad**, elige tu archivo e introduce tu clave de recuperación.
  - Consulta [Copia de seguridad y restauración en iOS](/docs/iOS%20Tutorial/Step-4-Back-Up-and-Restore).

---

## ¿Sigues necesitando ayuda? {#still-need-help}

- Únete a nuestra comunidad en [Telegram](https://t.me/+IPYp6q06dWsyZjY0).
- Informa de problemas en [GitHub](https://github.com/smswithoutborders).
- Contacta con nuestro <a href="mailto:developers@smswithoutborders.com">equipo de soporte</a>.
