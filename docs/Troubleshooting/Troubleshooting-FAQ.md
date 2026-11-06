---
sidebar_position: 1
---

## RelaySMS Troubleshooting Guide

### Common Issues and Solutions

---

### App Download and Installation

**Issue**: Unable to download the app  
**Solutions**:

- Ensure your Android device is running Android 7 or later, and your iOS device is running iOS 15 or later.
- Check your internet connection and try downloading again.
- If the Play Store does not work for you, download the app from [GitHub](https://github.com/smswithoutborders/SMSwithoutBorders-Android/releases). See [Download the app](/docs/Android%20Tutorial/Step-1-Download-the-App).
- If the issue persists, contact our <a href="mailto:developers@smswithoutborders.com">support team</a> for assistance.

---

### App Crashes

**Issue**: The app crashes frequently or unexpectedly  
**Solutions**:

- Verify your device's operating system meets the minimum requirements (Android 7 or later, iOS 15 or later).
- Make sure you have the latest version of the app installed.
- Restart your device and try opening the app again.
- Clear the app's cache: **Settings > Apps > RelaySMS > Storage > Clear Cache**.

> *Important: Your saved platforms are stored on your device. Clearing the app's **data** or deleting the app removes them. [Back up](/docs/Android%20Tutorial/Step-4-Back-Up-and-Restore#back-up) before you clear data or reinstall.*

---

### Verification Code Not Received When Saving RelaySMS Mail

You only need a verification code when you save and authenticate a **RelaySMS Mail** account. Sending with **Offline RelaySMS Mail** (from a random alias) needs no code and no setup.

**Issue**: The verification code for RelaySMS Mail does not arrive  
**Solutions**:

- The code is sent through **Signal** or **Telegram**, not by SMS. Check the app you chose when you tapped **Request Code**.
- Make sure the phone number you entered is registered on the app you chose, and that the country code is correct.
- Make sure you have an internet connection when you request the code.
- Wait a minute, then tap **Request Code** again. You can also try the other app (Signal or Telegram).
- If you need to send a message right away, use [Offline RelaySMS Mail](/docs/Android%20Tutorial/Step-5-Sending-a-Message) while you sort this out.
- If the issue persists, contact our <a href="mailto:developers@smswithoutborders.com">support team</a> for assistance.

See [Save platforms: RelaySMS Mail](/docs/Android%20Tutorial/Step-3-Save-Platforms#relaysms-mail) for the full steps.

---

### Platform Saving Issues

**Issue**: Unable to save a platform (Gmail, Bluesky, Telegram, RelaySMS Mail or Mastodon)  
**Solutions**:

- Make sure you have an internet connection. Saving a platform needs the internet; sending does not.
- **Gmail**: Make sure you grant all the permissions RelaySMS asks for before tapping **Continue**.
- **Bluesky / Mastodon**: Make sure you finish signing in and tap **Authorize**.
- **Telegram**: The code is sent to your Telegram app, not by SMS. Make sure you enter the phone number linked to your Telegram account.
- If a platform does not light up after saving, tap it to remove it, then save it again.
- If the issue persists, contact our <a href="mailto:developers@smswithoutborders.com">support team</a> for assistance.

See [Save platforms](/docs/Android%20Tutorial/Step-3-Save-Platforms) for the full steps.

---

### Back Up and Restore Issues

Your saved platforms are stored on your device, so a backup is the only way to keep them if you delete the app or switch phones.

**Issue**: I can't find the Restore option  
**Solutions**:

- You can only restore a backup on the **welcome screen during onboarding**. It is not available from the menu after onboarding.
- If you have already finished onboarding, clear the app's data (**Settings > Apps > RelaySMS > Storage > Clear Data**) or reinstall the app to return to the welcome screen, then tap **Restore backup**. This removes any platforms currently saved on the device, so back them up first if you need them.

**Issue**: Restore fails or my verification key is not accepted  
**Solutions**:

- Make sure you are entering the verification key that was shown for **that** backup file. Each backup has its own key.
- Copy and paste the key instead of typing it, and check for extra spaces at the start or end.
- Make sure you selected the correct backup file. If you have several, use the most recent one.
- If you have lost the verification key, the backup cannot be restored. Save your platforms again and make a new backup.

**Issue**: I can't find my backup file  
**Solutions**:

- Check the folder you chose when you tapped **Save** during backup (often **Downloads**).
- When switching phones, copy the backup file to the new phone before you start onboarding.

**Issue**: I'm not sure my backup worked  
**Solution**:

- Tap the 3-dot menu on the home screen, then **Back Up**. You should see the date of your last backup.

**Issue**: I lost my platforms after reinstalling or switching phones  
**Solution**:

- If you have a backup and its verification key, restore it during onboarding.
- If you don't have a backup, save your platforms again and [back up](/docs/Android%20Tutorial/Step-4-Back-Up-and-Restore#back-up) right away.

See [Back up and restore](/docs/Android%20Tutorial/Step-4-Back-Up-and-Restore) for the full steps.

---

### Message Sending Issues

**Issue**: Messages are not being delivered  
**Solutions**:

- Try a different [routing number](/docs/Android%20Tutorial/Step-6-Routing-Numbers). Choose one in a country that is not under an internet shutdown, that your SIM can send SMS to, and that is affordable for you.
- If you ticked **"Do not ask again"**, RelaySMS reuses the same routing number automatically. If messages stop arriving, choose a different number.
- Check that your SIM card is active, has credit, and can send SMS messages.
- If RelaySMS is not your default messaging app, make sure you complete sending in the SMS app you are redirected to.
- If you haven't used a saved platform for a long time, remove it and save it again.
- If the issue persists, contact our <a href="mailto:developers@smswithoutborders.com">support team</a> for assistance.

**Issue**: I can't send an image  
**Solution**:

- You can only send images when RelaySMS is set as your default messaging app. Use the compression and resize tools to reduce the number of SMS messages needed. See [Sending an image](/docs/Android%20Tutorial/Step-5-Sending-a-Message#sending-an-image).

**Issue**: My outgoing SMS looks like random letters and numbers  
**Answer**:

- This is expected. Your message is encrypted before it is sent by SMS.

---

### Additional Tips

- **Update the App**: Ensure you have the latest version of the RelaySMS app installed.
- **Back up regularly**: Back up every time you save a new platform, and keep your verification key somewhere safe.
- **Refresh platforms**: It is recommended to remove and save your platforms again every 3 to 6 months, then make a new backup.
- **Check for Network Issues**: Verify that your device is active and is able to send SMS messages.
- **Get Help**: Join our community on [Telegram](https://t.me/+IPYp6q06dWsyZjY0), or contact our <a href="mailto:developers@smswithoutborders.com">support team</a>.
