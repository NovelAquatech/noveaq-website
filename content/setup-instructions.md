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

DeviceHub lets you view and manage compatible Milesight gateways from one account. You will need an internet-connected gateway and a DeviceHub account created by NovelAQ.

### Activate your DeviceHub account

1. Check your inbox for the DeviceHub account email. If it has not arrived, check your spam or junk folder.
2. Open the activation link in the email.
3. Set a password for your DeviceHub account.
4. Sign in to [NovelAQ DeviceHub](https://devicehub.novelaquatech.com) using your email address and new password.

The activation link is intended only for you. Do not forward or share the email. If the link has expired or the email cannot be found, contact NovelAQ support for a new invitation.

### Generate an activation code

1. In DeviceHub, click the device-shaped tab at the top of the page. This opens the `My Device` page.
2. Click `Add`.
3. Enter a name that will help you identify the gateway. You can also assign it to a group if required.
4. Click `Add` in the dialog.
5. DeviceHub will display a `Device Added` message containing the activation code. Click `Copy Code`, or select `Send Code to Email` if you want a copy sent to your email address.

Keep the activation code ready for the next step. Do not share it or reuse a code created for another gateway.

### Enter the code in the gateway

1. Sign in to the gateway's local web interface.
2. Go to `System` > `Remote Management`, then open the `Management Platform` tab.
3. Select `Enable`.
4. Set `Platform Type` to `DeviceHub 1.0`.
5. Set `Activation Server Address` to `devicehub.novelaquatech.com`.
6. Set `Device Management Server Address` to `https://devicehub.novelaquatech.com/acs`.
7. Set `Activation Method` to `By Authentication Code`.
8. Paste the activation code generated in DeviceHub.
9. Click `Save & Apply`.
10. Wait for the gateway to show that it is connected or activated. This can take a few minutes after the first connection.

If the gateway does not connect, confirm that its date, time, DNS and internet connection are correct, then contact NovelAQ support with the gateway serial number.
