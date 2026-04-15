---
sidebar_position: 1
---

# Hosting and Running Gateway Clients Guide

Follow this simple guide to set up and configure a Deku SMS Gateway Client on your Android device.

## Requirements for Setting Up a Gateway Client:

### Android Device:
Your device must be able to connect to the internet.  
It should have a SIM card capable of receiving SMS messages.

### Internet Connection:
You will need a reliable internet connection (Wi-Fi or mobile data).  
Deku SMS uses very little data, so mobile data is sufficient.

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

Open the Deku SMS app.  
Tap on the three dots in the top right corner of the app.  
From the dropdown menu, select Message Forwarding.

### Step 4: Add a Gateway Server

<img src="/GatewayHosting/3.png" alt="GatewayAvailable" class="resized-image"/>
<img src="/GatewayHosting/4.png" alt="GatewayAvailable" class="resized-image"/>
<img src="/GatewayHosting/5.png" alt="GatewayAvailable" class="resized-image"/>


Tap on the menu dots in the top right corner of the routed messages page.  
Tap on the three dots in the top right corner of the Gateway clients messages page.  
Tap the three dots once more and choose Add HTTPS Forwarders.

### Step 5: Fill in the Required Information
<img src="/GatewayHosting/6.png" alt="GatewayAvailable" class="resized-image"/>
<img src="/GatewayHosting/7.png" alt="GatewayAvailable" class="resized-image"/>

Enter the following URL:  
https://gatewayserver.smswithoutborders.com/v3/publish  

Tag: Enter a name for your gateway server.  

Check "All": Ensure the "All" checkbox is checked to route all SMS messages through the server.

### Step 6: Finalize the Setup

<img src="/GatewayHosting/8.png" alt="GatewayAvailable" class="resized-image"/>

Tap Save to save your gateway server configuration.

<img src="/GatewayHosting/9.png" alt="GatewayAvailable" class="resized-image"/>

## Your Gateway Client is Now Ready!



You can now share your number with RelaySMS users. Your Android device will act as a gateway client, helping route messages through the Deku SMS app.