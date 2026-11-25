---
sidebar_position: 1
sidebar_label: Guía de solución de problemas
---

# Guía de solución de problemas de RelaySMS

### Problemas comunes y soluciones

---

### Descarga e instalación de la app {#app-download-and-installation}

**Problema**: no puedo descargar la app  
**Soluciones**:

- Asegúrate de que tu dispositivo Android tenga Android 7 o posterior, y tu dispositivo iOS tenga iOS 15 o posterior.
- Comprueba tu conexión a internet e intenta descargarla de nuevo.
- Si Play Store no te funciona, descarga la app desde [GitHub](https://github.com/smswithoutborders/SMSwithoutBorders-Android/releases). Consulta [Descargar la aplicación](/docs/Android%20Tutorial/Step-1-Download-the-App).
- Si el problema continúa, contacta con nuestro <a href="mailto:developers@smswithoutborders.com">equipo de soporte</a>.

---

### La app se cierra {#app-crashes}

**Problema**: la app se cierra con frecuencia o de forma inesperada  
**Soluciones**:

- Comprueba que el sistema de tu dispositivo cumpla los requisitos mínimos (Android 7 o posterior, iOS 15 o posterior).
- Asegúrate de tener instalada la última versión de la app.
- Reinicia tu dispositivo y vuelve a abrir la app.
- Borra la caché de la app: **Ajustes > Aplicaciones > RelaySMS > Almacenamiento > Borrar caché**.

> *Importante: tus plataformas guardadas se almacenan en tu dispositivo. Borrar los **datos** de la app o desinstalarla las elimina. [Haz una copia de seguridad](/docs/Android%20Tutorial/Step-4-Back-Up-and-Restore#back-up) antes de borrar los datos o reinstalar.*

---

### No recibo el código de verificación al guardar RelaySMS Mail {#verification-code-not-received-when-saving-relaysms-mail}

Solo necesitas un código de verificación cuando guardas y autenticas una cuenta de **RelaySMS Mail**. Enviar con **RelaySMS Mail sin conexión** (desde un alias aleatorio) no necesita código ni configuración.

**Problema**: el código de verificación de RelaySMS Mail no llega  
**Soluciones**:

- El código se envía por **Signal** o **Telegram**, no por SMS. Revisa la app que elegiste al tocar **Solicitar código**.
- Asegúrate de que el número que introdujiste esté registrado en la app que elegiste y de que el prefijo del país sea correcto.
- Asegúrate de tener conexión a internet al solicitar el código.
- Espera un minuto y vuelve a tocar **Solicitar código**. También puedes probar con la otra app (Signal o Telegram).
- Si necesitas enviar un mensaje ya, usa [RelaySMS Mail sin conexión](/docs/Android%20Tutorial/Step-5-Sending-a-Message) mientras lo solucionas.
- Si el problema continúa, contacta con nuestro <a href="mailto:developers@smswithoutborders.com">equipo de soporte</a>.

Consulta [Guardar plataformas: RelaySMS Mail](/docs/Android%20Tutorial/Step-3-Save-Platforms#relaysms-mail) para ver todos los pasos.

---

### Problemas al guardar plataformas {#platform-saving-issues}

**Problema**: no puedo guardar una plataforma (Gmail, Bluesky, Telegram, RelaySMS Mail o Mastodon)  
**Soluciones**:

- Asegúrate de tener conexión a internet. Guardar una plataforma necesita internet; enviar, no.
- **Gmail**: concede todos los permisos que pide RelaySMS antes de tocar **Continuar**.
- **Bluesky / Mastodon**: termina de iniciar sesión y toca **Autorizar**.
- **Telegram**: el código se envía a tu app de Telegram, no por SMS. Introduce el número de teléfono vinculado a tu cuenta de Telegram.
- Si una plataforma no se ilumina después de guardarla, tócala para eliminarla y vuelve a guardarla.
- Si el problema continúa, contacta con nuestro <a href="mailto:developers@smswithoutborders.com">equipo de soporte</a>.

Consulta [Guardar plataformas](/docs/Android%20Tutorial/Step-3-Save-Platforms) para ver todos los pasos.

---

### Problemas con la copia de seguridad y la restauración {#back-up-and-restore-issues}

Tus plataformas guardadas se almacenan en tu dispositivo, así que una copia de seguridad es la única forma de conservarlas si borras la app o cambias de teléfono.

**Problema**: no encuentro la opción Restaurar  
**Soluciones**:

- Solo puedes restaurar una copia de seguridad en la **pantalla de bienvenida, durante los primeros pasos**. No está disponible en el menú después.
- Si ya terminaste los primeros pasos, borra los datos de la app (**Ajustes > Aplicaciones > RelaySMS > Almacenamiento > Borrar datos**) o reinstálala para volver a la pantalla de bienvenida, y toca **Restaurar copia de seguridad**. Esto elimina las plataformas guardadas actualmente en el dispositivo, así que haz antes una copia de seguridad si las necesitas.

**Problema**: la restauración falla o no se acepta mi clave de verificación  
**Soluciones**:

- Asegúrate de introducir la clave de verificación (llamada **clave de recuperación** en iOS) que se mostró para **ese** archivo de copia de seguridad. Cada copia tiene su propia clave.
- Copia y pega la clave en lugar de escribirla, y comprueba que no haya espacios de más al principio o al final.
- Asegúrate de haber seleccionado el archivo correcto. Si tienes varios, usa el más reciente.
- Si perdiste la clave de verificación, la copia de seguridad no se puede restaurar. Vuelve a guardar tus plataformas y haz una nueva copia.

**Problema**: no encuentro mi archivo de copia de seguridad  
**Soluciones**:

- Revisa la carpeta que elegiste al tocar **Guardar** durante la copia de seguridad (a menudo **Descargas**).
- Si cambias de teléfono, copia el archivo de copia de seguridad al teléfono nuevo antes de empezar los primeros pasos.

**Problema**: no estoy seguro de que la copia de seguridad haya funcionado  
**Solución**:

- Toca el menú de 3 puntos de la pantalla de inicio y luego **Copia de seguridad**. Deberías ver la fecha de tu última copia.

**Problema**: perdí mis plataformas después de reinstalar o cambiar de teléfono  
**Solución**:

- Si tienes una copia de seguridad y su clave de verificación, restáurala durante los primeros pasos.
- Si no tienes copia de seguridad, vuelve a guardar tus plataformas y [haz una copia de seguridad](/docs/Android%20Tutorial/Step-4-Back-Up-and-Restore#back-up) enseguida.

Consulta [Copia de seguridad y restauración](/docs/Android%20Tutorial/Step-4-Back-Up-and-Restore) para ver todos los pasos.

---

### Problemas al enviar mensajes {#message-sending-issues}

**Problema**: los mensajes no se entregan  
**Soluciones**:

- Prueba otro [número de enrutamiento](/docs/Android%20Tutorial/Step-6-Routing-Numbers). Elige uno en un país sin corte de internet, al que tu SIM pueda enviar SMS y que te resulte asequible.
- Si marcaste **"No volver a preguntar"**, RelaySMS reutiliza automáticamente el mismo número de enrutamiento. Si los mensajes dejan de llegar, elige otro número.
- Comprueba que tu tarjeta SIM esté activa, tenga saldo y pueda enviar SMS.
- Si RelaySMS no es tu app de mensajería predeterminada, asegúrate de terminar el envío en la app de SMS a la que se te redirige.
- Si hace mucho que no usas una plataforma guardada, elimínala y vuelve a guardarla.
- Si el problema continúa, contacta con nuestro <a href="mailto:developers@smswithoutborders.com">equipo de soporte</a>.

**Problema**: no puedo enviar una imagen  
**Solución**:

- Solo puedes enviar imágenes cuando RelaySMS es tu app de mensajería predeterminada. Usa las herramientas de compresión y cambio de tamaño para reducir el número de SMS necesarios. Consulta [Enviar una imagen](/docs/Android%20Tutorial/Step-5-Sending-a-Message#sending-an-image).

**Problema**: mi SMS saliente parece una serie de letras y números al azar  
**Respuesta**:

- Es lo esperado. Tu mensaje se cifra antes de enviarse por SMS.

---

### Consejos adicionales {#additional-tips}

- **Actualiza la app**: asegúrate de tener instalada la última versión de RelaySMS.
- **Haz copias de seguridad con frecuencia**: haz una copia cada vez que guardes una plataforma nueva y guarda tu clave de verificación en un lugar seguro.
- **Renueva tus plataformas**: se recomienda eliminar y volver a guardar tus plataformas cada 3 a 6 meses, y después hacer una nueva copia de seguridad.
- **Comprueba la red**: verifica que tu dispositivo esté activo y pueda enviar SMS.
- **Pide ayuda**: únete a nuestra comunidad en [Telegram](https://t.me/+IPYp6q06dWsyZjY0) o contacta con nuestro <a href="mailto:developers@smswithoutborders.com">equipo de soporte</a>.
