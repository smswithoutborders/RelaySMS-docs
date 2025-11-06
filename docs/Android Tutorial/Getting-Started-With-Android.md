---
sidebar_position: 1
---

# RelaySMS App for Android

## Getting Started with Android

RelaySMS provides users with the ability to stay connected with their online platforms even when internet access is unavailable. By leveraging SMS messaging, users can continue communicating and their contacts receive online messages just as they normally would.

## Introduction​

RelaySMS helps you send messages online without needing internet access. It works in  **two ways:**


## [1. Using Bridges (No sign-up required)](/docs/Bridges%20Tutorial/Bridges#using-bridges-no-sign-up-required)

This is the fastest way to get started. The app creates a temporary alias using your phone number (e.g., **123456789@relaysms.me**) to send emails or tweets **without storing any tokens or logging in**.

Steps to Use the Bridge Feature:

**1. Download the RelaySMS app from :**

- [Google_Play_Store](https://play.google.com/store/apps/details?id=com.afkanerd.sw0b)
- [Github](https://github.com/smswithoutborders/SMSwithoutBorders-Android/releases/tag/v1.0) or
- Build from [source](https://github.com/smswithoutborders/SMSwithoutBorders-Android)

<img src="/Android/Playstore.png" alt="onbording1" class="resized-image"/>

## Technical Requirements

- SMS capability Android smartphone
- Android 6.0 and above

**2. Go through the onboarding pages** to understand how it works.

- Click the Make app default button (Optional)

<img src="/Android/gettingstarted.png" alt="onbording1" class="resized-image"/>
<img src="/Android/skip.png" alt="onbording" class="resized-image"/>
<img src="/Android/skip1.png" alt="onbording" class="resized-image"/>
<img src="/Android/skip2.png" alt="onbording" class="resized-image"/>
<img src="/Android/finish.png" alt="onbording2" class="resized-image"/>


**Select a Gateway Client:**

- Tap the 🌍 Country tab on the navigation bar.

- Choose a gateway client (these are phone numbers that route your offline message to the internet).

**3. Select a Gateway Client:**


<img src="/Android/1.png" alt="GatewayAvailable" class="resized-image"/>
<img src="/Android/GateWay2.png" alt="gateway" class="resized-image" />
<img src="/Android/addgateway.png" alt="addgatewayclient" class="resized-image"/>
<img src="/Android/addgateway2.png" alt="addgatewayclient" class="resized-image"/>

- Tap the 🌍 Country tab on the navigation bar.

- Choose a gateway client (these are phone numbers that route your offline message to the internet).

- Alternatively, you can select a gateway client from the list that pops up when you hit the send button after composing your message.

<!-- add images -->


*Note: If you don’t select one, the app will assign a default gateway for you.*



**4. Sending messages**
- Tap **“Compose New Message”**.
- **Fill in the required fields** (recipient email, subject, and message).
- Hit **Send** at the top right corner.
- Confirm the gateway client, and that's it.(if the RelaySMS app is set as your default messaging app)


*NB: If the RelaySMS app is not set as your default message app, you will need to choose a default messaging app to send your message.*

*Your message is now on its way online, even without internet!*




**5. Receiving messages**
- Copy the entire sms message 
- Go to the app and click on the inbox tab 
- Paste the message in the text box 
- Click on decrypt 




**2. Using Platforms (Sign-up and store access ahead of time)**

This method is ideal if you want to post to platforms like **Gmail, Twitter, or Telegram**during internet shutdowns using your own accounts.

Steps to Use the Platform Feature:

1. **Download the RelaySMS app.**


2. **Go through onboarding to get familiar.**
- Click the Make app default button (Optional)


3. **Create an account:**

- Tap Sign Up.

- Enter either your email or phone number and add a password.

- Check the privacy policy box.

- Click Create.

- Enter the Recaptcha code 

4. **Already have an account?** Tap **Login**, fill in your details, click **Login**and put in the recaptcha code.


5. **Verify your phone:**


- Enter the SMS code you received and hit **Submit.**


6. **Save your platforms:**


- Tap the **Platforms** tab.


- Choose from Gmail, Twitter, or Telegram.


- Click **Add Platform** and follow the setup steps for that platform.


- When successful, the icon will light up!



7. **Choose a Gateway Client:**


-  Tap the **Country** tab.


- Pick a number and tap **Make Default**.


- You can even **add your own gateway client** here by tapping **Add Number**.
- Alternatively, you can select a gateway client from the list that pops up when you hit the send button after composing your message.


8. **Send a message:**


- On the **Recent** page, tap the **Compose icon.**


- Pick a saved platform, write your message, and tap **Send**.

- Confirm the gateway client, and that's it.(if the RelaySMS app is set as your default messaging app)

*NB: If the RelaySMS app is not set as your default message app, you will be prompted to choose a default messaging app to send your message.
Your encrypted message will appear there,  just hit Send.*

- You’ll receive an SMS confirmation once your message is published to the selected platform.


### How to Use the On-Device Token Storage Feature

Our **"Store Tokens On-Device"** feature gives you more control over your account credentials by keeping your access tokens on your phone instead of on the RelaySMS servers. This tutorial walks you through how to enable or disable this feature and how to refresh Twitter tokens when using local storage.

**Enabling On-Device Token Storage**

To start storing your access tokens locally on your device:

1. Open the **RelaySMS** app.


2. Tap on **Settings**.


3. Go to the **Security**section.


4. Find the toggle for **“Store tokens on-device”** and switch it **ON.**


**What happens next?**

- All access tokens that were previously stored on RelaySMS servers will be securely transferred to your device.


- From now on, all **new tokens** will only be stored **locally** on your phone.

**Disabling On-Device Token Storage**

To stop using local token storage and go back to storing tokens on the cloud:

1. Go to **Settings > Security.**


2. Switch the **“Store tokens on-device”** toggle **OFF.**


**What this means:**

- The tokens that are **already stored on your device** will remain there and continue to work.


- However, **new tokens** generated after this will be saved to the **RelaySMS cloud server**, not your device.



**Refreshing Twitter Tokens (For On-Device Use Only)**

Due to Twitter's security limitations, tokens stored on your device can only be used **once per tweet**. To send another tweet, you’ll need to **revoke and restore** the token.

Here’s how:

1. After sending a tweet, you’ll receive an **SMS delivery status message**. If you're using an on-device token, this message will include a **refreshed Twitter token**.


2. **Copy the entire SMS message** (as-is).


3. Open the **RelaySMS app** and go to the **Inbox** section.


4. **Paste** the full SMS message into the inbox.


5. The app will automatically extract and refresh your Twitter token.


6. You’re now ready to send your next tweet.


Repeat this process **after every Twitter message** if you're using local token storage.

**IOS TUTORIAL**

2. **Using Platforms** (Sign-up and store access ahead of time)

This method is ideal if you want to post to platforms like **Gmail, Twitter, or Telegram** during internet shutdowns using your own accounts.
Steps to Use the Platform Feature:

9. Download the RelaySMS app.


10. **Go through onboarding**to get familiar.


11. **Create an account:**

<img src="/Android/pick.png" alt="sign_in" class="resized-image"/>
<img src="/Android/createaccount.png" alt="sign_in2" class="resized-image"/>
<img src="/Android/verificationcode.png" alt="verificationcode" class="resized-image"/>

- Tap **Sign Up.**


- Enter your phone number and password.


- Check the privacy policy box.


- Click **Create.**


12. **Already have an account?** Tap **Login**, fill in your details, and click **Login**.

<img src="/Android/pick.png" alt="sign_in" class="resized-image" />
<img src="/Android/login.png" alt="login1" class="resized-image" />
<img src="/Android/login1.png" alt="sign_in1" class="resized-image" />

13. **Verify your phone:**


- Enter the SMS code you received and hit Submit.
<img src="/Android/verificationcode.png" alt="verificationcode" class="resized-image"/>

14. **Save your platforms:**

<img src="/Android/GatewayNumber(1).png" alt="add-message" class="resized-image"/>
<img src="/Android/addPlateform.png" alt="add-message" class="resized-image"/>

- Tap the **Platforms** tab.


- Choose from Gmail, Twitter, or Telegram.


- Click **Add Platform** and follow the setup steps for that platform.


- When successful, the icon will light up!


15. **Choose a Gateway Client:**

<img src="/Android/1.png" alt="GatewayAvailable" class="resized-image"/>
<img src="/Android/GateWay2.png" alt="gateway" class="resized-image" />
<img src="/Android/addgateway.png" alt="addgatewayclient" class="resized-image"/>
<img src="/Android/addgateway2.png" alt="addgatewayclient" class="resized-image"/>

- Tap the **Country** tab.


- Pick a number and tap **Make Default**.


- You can even **add your own gateway client** here by tapping **Add Number**.


16. **Send a message:**

<img src="/Android/welcome.png" alt="add-message" class="resized-image"/>

- On the **Recent** page, tap the **Compose icon**.

<img src="/Android/GatewayNumber(1).png" alt="add-message" class="resized-image"/>
<img src="/Android/addPlateform.png" alt="add-message" class="resized-image"/>

- Pick a saved platform, write your message, and tap **Send**.

<img src="/Android/Continue.png" alt="add-message" class="resized-image"/>
<img src="/Android/Gmail.png" alt="add-message" class="resized-image"/>
<img src="/Android/Telegram.png" alt="add-message" class="resized-image"/>
<img src="/Android/Twitter.png" alt="add-message" class="resized-image"/>

- You’ll be prompted to choose your SMS app.

<img src="/Android/smsapp.png" alt="add-message" class="resized-image"/>

- Your encrypted message will appear there,  just hit **Send**.

<img src="/Android/forwardDeku.png" alt="add-message" class="resized-image"/>
<img src="/Android/encrypted.png" alt="add-message" class="resized-image"/>
<img src="/Android/notification.png" alt="notification" class="resized-image" />

- You’ll receive an **SMS confirmation** once your message is published to the selected platform.


## [How to Use the On-Device Token Storage Feature](/docs/On-Device%20Tutorial/On-DeviceToken#how-to-use-the-on-device-token-storage-feature)

