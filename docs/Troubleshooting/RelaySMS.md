---
sidebar_position: 3
---

# RelaySMS

## Common Questions About the RelaySMS App

### 1. **Do I need an internet connection to use RelaySMS?**

- **Answer:**
  - You do **not** need the internet to send messages. RelaySMS sends your message by SMS to a routing number, which publishes it to your chosen platform online.
  - You **do** need the internet to download the app and to save platforms (Gmail, Bluesky, Telegram, RelaySMS Mail, Mastodon). Save your platforms before an internet shutdown.

### 2. **What is the quickest way to send a message?**

- **Answer:**
  - Use **Offline RelaySMS Mail**. It needs no setup and no saved platforms.
  - Tap **Compose**, select **"Send from a random alias"**, enter the receiver's email address and your message, then tap **Send**.
  - See [Sending a message](/docs/Android%20Tutorial/Step-5-Sending-a-Message).

### 3. **Which platforms can I send to?**

- **Answer:**
  - RelaySMS currently supports **Gmail**, **Bluesky**, **Telegram**, **RelaySMS Mail** and **Mastodon**.
  - Go to the **Platforms** tab and tap a platform to save it. A saved platform lights up. Tap it to see which account is connected.
  - See [Save platforms](/docs/Android%20Tutorial/Step-3-Save-Platforms).

### 4. **What is the difference between an anonymous and an authenticated RelaySMS Mail account?**

- **Answer:**
  - **Anonymous (Offline RelaySMS Mail):** you send from a random alias without verifying your phone number. Good for sending quickly.
  - **Authenticated (saved RelaySMS Mail):** you verify your phone number with a code sent through Signal or Telegram. You can then receive replies by SMS, even during an internet shutdown, and your account is more secure.

### 5. **Why am I not receiving the verification code for RelaySMS Mail?**

- **Possible causes:**
  - The code is sent through **Signal** or **Telegram**, not by SMS. Check the app you chose.
  - The phone number you entered is not registered on that app, or the country code is wrong.
  - You had no internet connection when you requested the code.
- **Solution:**
  - Wait a minute and tap **Request Code** again, or choose the other app.
  - See the [Troubleshooting Guide](/docs/Troubleshooting/Troubleshooting-FAQ) for more help.

### 6. **What is a routing number and which one should I choose?**

- **Answer:**
  - A routing number is a phone number connected to the internet. It receives your SMS and forwards your message to your chosen platform.
  - When choosing one, consider:
    - Is that country under an internet shutdown?
    - Can your SIM send SMS to that country?
    - Which number is closer to you?
    - Which number is cheaper for you to SMS?
  - You can also add your own routing number. See [Routing numbers](/docs/Android%20Tutorial/Step-6-Routing-Numbers).

### 7. **Why are my messages not being delivered?**

- **Possible causes:**
  - The routing number you chose is not working or is in a country under a shutdown.
  - Your SIM card has no credit or cannot send SMS to the routing number's country.
  - RelaySMS is not your default messaging app and the message was not sent from the SMS app you were redirected to.
  - A saved platform's access has expired.
- **Solution:**
  - Try a different routing number. If you ticked **"Do not ask again"**, you may need to pick a new one.
  - Check your SIM credit and signal.
  - Remove the platform and save it again.

### 8. **Why does my outgoing SMS look like random letters and numbers?**

- **Answer:**
  - This is expected. RelaySMS encrypts your message automatically before sending it by SMS. You don't need to do anything to turn encryption on.

### 9. **Should I make RelaySMS my default messaging app?**

- **Answer:**
  - It is optional, but recommended. As your default messaging app, RelaySMS can send messages directly and lets you **send images**.
  - If it is not your default app, you will be asked to pick an SMS app to finish sending each message.

### 10. **How do I send an image?**

- **Solution:**
  - Set RelaySMS as your default messaging app.
  - Tap **Compose**, choose your platform, tap the attachment icon and select your image.
  - Use the compression and resize tools to reduce SMS cost and improve speed, then tap **Done** and **Send**.
  - See [Sending an image](/docs/Android%20Tutorial/Step-5-Sending-a-Message#sending-an-image).

### 11. **Where are my saved platforms stored?**

- **Answer:**
  - Your saved platforms are stored **on your device**. If you delete the app, clear its data, or switch phones, you can lose them.
  - [Back up](/docs/Android%20Tutorial/Step-4-Back-Up-and-Restore#back-up) regularly and keep your verification key somewhere safe.

### 12. **How do I back up and restore my platforms?**

- **Solution:**
  - **Back up:** tap the 3-dot menu on the home screen, then **Back Up > Back Up Now**. Save the file, then tap **View Verification Key** and keep the key somewhere safe.
  - **Restore:** you can only restore on the **welcome screen during onboarding**. Tap **Restore backup**, choose your backup file and enter your verification key.
  - See [Back up and restore](/docs/Android%20Tutorial/Step-4-Back-Up-and-Restore).

### 13. **How do I grant SMS permissions for RelaySMS?**

- **Solution:**
  - Go to your phone's **Settings**.
  - Navigate to **Apps** and select **RelaySMS**.
  - Tap **Permissions** and set the SMS permission to **Allow**.

### 14. **Why am I not getting notifications from RelaySMS?**

- **Possible causes:**
  - Notifications are turned off for RelaySMS in your device settings.
  - The app is restricted by battery optimization or "Do Not Disturb" mode.
  - Your device has no signal to receive SMS.

### 15. **Why does RelaySMS keep crashing or freezing?**

- **Solution:**
  - Make sure you have the latest version of the app.
  - Restart your phone.
  - Clear the app's cache: **Settings > Apps > RelaySMS > Storage > Clear Cache**.
  - RelaySMS requires **Android 7.0 or later**.

> *Clearing the app's **data** removes your saved platforms. Back up first.*

---

# RelaySMS on iOS

### 1. **How do I install RelaySMS on iOS?**

- **Steps:**
  1. Open the App Store on your iPhone.
  2. Search for **"RelaySMS"**, or use [this link](https://apps.apple.com/us/app/relaysms/id6630382970).
  3. Tap **Get** to download and install the app.

### 2. **What are the system requirements for RelaySMS on iOS?**

- **Answer:**
  - An SMS-capable iPhone running **iOS 15.0 or later**.

### 3. **How do I send a message on iOS?**

- **Answer:**
  - Like on Android, you can send with **Offline RelaySMS Mail** (no setup) or with saved platforms.
  - After you tap **Send**, RelaySMS opens your SMS app. Send the message from there to finish.
  - See [Getting started with iOS](/docs/iOS%20Tutorial/Getting-Started-With-iOS).

### 4. **How do I read replies on iOS?**

- **Answer:**
  - Open RelaySMS and go to the **Inbox**.
  - Tap **"Paste the incoming message here"**, paste the SMS reply, then tap **Decrypt**.

---

## Still need help?

- Join our community on [Telegram](https://t.me/+IPYp6q06dWsyZjY0).
- Report issues on [GitHub](https://github.com/smswithoutborders).
- Contact our <a href="mailto:developers@smswithoutborders.com">support team</a>.
