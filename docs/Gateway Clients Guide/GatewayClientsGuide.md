---
sidebar_position: 1
---

# Gateway Clients

Gateway Clients are a core part of how RelaySMS works. They are phone numbers or devices located in areas with an active internet connection that act as a bridge between offline users and online platforms.

When a user sends a message through RelaySMS without internet access, the message is delivered via SMS to a Gateway Client. The Gateway Client then forwards that message to an online server, where it is processed and published to the user’s selected platform.

Within the app, Gateway Clients are listed under the Countries tab. Users must select a gateway in a region with internet connectivity to successfully send their messages.

Gateway Clients can be set up using the DekuSMS app, and expanding their availability across different regions helps improve reliability, reduce costs, and ensure more users can stay connected during internet shutdowns.

# Hosting and Running Gateway Clients Guide

Follow this simple guide to set up and configure a Deku SMS Gateway Client on your Android device.

## Requirements for Setting Up a Gateway Client:

### Android Device:

- Your device must be able to connect to the internet.  
- It should have a SIM card capable of receiving SMS messages.

### Internet Connection:

- You will need a reliable internet connection (Wi-Fi or mobile data).  
- Deku SMS uses very little data, so mobile data is sufficient.

## Steps to Configure Deku SMS on an Android Device:

### Step 1: Download the Deku SMS App

You can download the Deku SMS app from one of the following sources:

- Google Play Store  
- F-Droid  
- GitHub Releases  

### Step 2: Set Deku SMS as Your Default SMS App

<img src="/GatewayHosting/1.png" alt="GatewayAvailable" class="resized-image"/>

Once the app is installed, set it as the default SMS app on your Android device.

### Step 3: Configure Message Forwarding

<img src="/GatewayHosting/2.png" alt="GatewayAvailable" class="resized-image"/>

1. Open the Deku SMS app.  
2. Tap on the three dots in the top right corner of the app.  
3. From the dropdown menu, select **Message Forwarding.**

### Step 4: Add a Gateway Server

<img src="/GatewayHosting/3.png" alt="GatewayAvailable" class="resized-image"/>
<img src="/GatewayHosting/4.png" alt="GatewayAvailable" class="resized-image"/>
<img src="/GatewayHosting/5.png" alt="GatewayAvailable" class="resized-image"/>


1. Tap on the menu dots in the top right corner of the routed messages page.  
2. Tap on the three dots in the top right corner of the Gateway Clients messages page.  
3. Tap the three dots once more and choose **Add HTTPS Forwarders.**

### Step 5: Fill in the Required Information

<img src="/GatewayHosting/6.png" alt="GatewayAvailable" class="resized-image"/>
<img src="/GatewayHosting/8.png" alt="GatewayAvailable" class="resized-image"/>

- Enter the following URL:  
https://gatewayserver.smswithoutborders.com/v3/publish  

- **Tag**: Enter a name for your gateway server.  

- **Check "All"**: Ensure the "All" checkbox is checked to route all SMS messages through the server.

### Step 6: Finalize the Setup

<img src="/GatewayHosting/7.png" alt="GatewayAvailable" class="resized-image"/>

1. Tap **Save** to save your gateway server configuration.

<img src="/GatewayHosting/9.png" alt="GatewayAvailable" class="resized-image"/>

## Your Gateway Client is Now Ready!

You can now share your number with RelaySMS users. Your Android device will act as a gateway client, helping route messages through the Deku SMS app.