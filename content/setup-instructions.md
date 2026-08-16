---
title: Setup Instructions
description: Follow these steps to set up your Novel IoT environment.
author: NovelAQ Team
---
# Setup Instructions for Novel IoT Environment

## 2.1 Connect your Devices

*   Ensure the gateway used has a network server option.
    
*   Go to the network server tab in the gateway.
    
*   Set up an new application - the name of it does not matter.
    
*   Then add a new connection by pressing the + button on this page. Click on HTTP. Add the required url in the uplink section:
    
    *   Development Enviornment: `https://api-dev.novelaquatech.com/api/ug65-data-ingestion-http`
        
    *   Production Environment: `https://api.novelaquatech.com/api/ug65-data-ingestion-http`
        
*   Click save
    

## 2.1a Connecting a Controller

If there is a UC51x controller that needs to be connected to the Gateway:

1.  Add another connection under the same application
    
2.  The connection type should be MQTT.
    
3.  Host: `namespace1.australiaeast-1.ts.eventgrid.azure.net`
    
4.  ClientID: `<any unique ID that hasnt been used before>`
    
5.  Port: 8883
    
6.  Username: `<OrgName>`
    
7.  Click the dropdown for CA signed certificate and select Self-signed certificate
    
8.  Client Certificate file: the `ClientName-authn-ID.pem` file generated above
    
9.  Key file: the `ClientName-authn-ID.key` file generated above
    
10.  For the topic, in the textbox to the right of downlink topic, put `<exact Org Name>/downlink/$deveui`
    
11.  Save this application
    

## 2.2 Set Up the Decoders

*   Go to [https://github.com/DeeplyDiligent/SensorDecoders](https://github.com/DeeplyDiligent/SensorDecoders) and find the appropriate decoder for each device you are setting up.
    
*   Copy the contents of the decoder for your device.
    
*   In the network server go to the `Payload Codec` tab. Click on the plus button at the very bottom of the page.
    
*   Enter the name of the device as the decoder name
    
*   Paste the copied decoder contents.
    
*   Save it
    

## 2.3 Add devices

*   Connect the devices to the Gateway by going to the devices tab and clicking add device
    
*   Give the device a unique name.
    
*   When selecting the decoder ensure to select the `Custom` decoder you created. It should be under the custom section in the dropdown.
    
*   Select the application that you just created from the application dropdown.
    
*   Click save and do this for each device.
    
*   Ensure the device seen status is green and the devices are being registered on the gateway.

## 2.4 Connect a Milesight gateway to DeviceHub

DeviceHub lets NovelAQ support staff monitor and manage compatible Milesight gateways remotely. You will need an internet-connected gateway and the DeviceHub authentication code supplied by NovelAQ.

1. Sign in to the gateway's local web interface.
2. Go to `System` > `Device Management`.
3. Enable device management.
4. Set `Platform Type` to `DeviceHub`.
5. Set the DeviceHub server address to `https://devicehub.novelaquatech.com/acs`.
6. Set `Activation Method` to `By Authentication Code`.
7. Enter the authentication code supplied by NovelAQ.
8. Click `Apply` or `Save`.
9. Wait for the DeviceHub status to show `Connected` or `Activated`. This can take a few minutes after the first connection.

Do not share the authentication code or reuse a code issued for another organisation. If the gateway does not connect, confirm that its date, time, DNS and internet connection are correct, then contact NovelAQ support with the gateway serial number.

### Activate your DeviceHub account

NovelAQ will create a DeviceHub account for you. You will receive an email from DeviceHub containing an account activation link.

1. Check your inbox for the DeviceHub email. If it has not arrived, check your spam or junk folder.
2. Open the activation link in the email.
3. Set a password for your DeviceHub account.
4. Sign in to [NovelAQ DeviceHub](https://devicehub.novelaquatech.com) using your email address and new password.

The activation link is intended only for you. Do not forward or share the email. If the link has expired or the email cannot be found, contact NovelAQ support for a new invitation.

### Allow temporary remote access

NovelAQ support may ask you to start a temporary visiting session when remote access to the gateway interface is required.

1. Sign in to [NovelAQ DeviceHub](https://devicehub.novelaquatech.com).
2. Open `Devices` and find the gateway by its name or serial number.
3. Select `Visiting Device`.
4. Choose the requested timeout, then click `Apply`.
5. Wait for the session to be created before opening the visit link. Do not close or refresh the page while the request is being processed.

The session closes automatically when its timeout expires. Create a new visiting session if more time is needed. Only create a session while NovelAQ support is assisting you, and close it early when it is no longer required.
