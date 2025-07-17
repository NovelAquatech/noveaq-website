---
title: Setup Instructions
description: Follow these steps to set up your Novel IoT environment.
author: NovelAQ Team
date: 2025-07-17
---

# Setup Instructions for Novel IoT Environment

## 2.1 Connect your Devices

- Ensure the gateway used has a network server option.
- Go to the network server tab in the gateway.
- Set up an new application - the name of it does not matter.
- Add a new connection. Click on HTTP. Add the required url in the uplink section:
  - Development Enviornment: `https://prod-08.australiaeast.logic.azure.com:443/workflows/139847fb6ac344b78ea9727a8cc51bf8/triggers/WebHook/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FWebHook%2Frun&sv=1.0&sig=OruDuzhSPA-55mKYRW8QZU9tUfU91kRo5PUzuPa5Yko`
  - Production Environment: `https://prod-23.australiaeast.logic.azure.com:443/workflows/0abfb0873c7f4f25a6d186de3e57c7d0/triggers/WebHook/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FWebHook%2Frun&sv=1.0&sig=6L7gshNNsm3Cy5qK7J6UOEC0ta5wxmDZS1-5t-JiD8E`
- Click save

## 2.1a Connecting a Controller

If there is a UC51x controller that needs to be connected to the Gateway:

  1. Add another connection under the same application
  2. The connection type should be MQTT.
  3. Host: `namespace1.australiaeast-1.ts.eventgrid.azure.net`
  4. ClientID: `<any unique ID that hasnt been used before>`
  5. Port: 8883
  6. Username: `<OrgName>`
  7. Click the dropdown for CA signed certificate and select Self-signed certificate
  8. Client Certificate file: the `ClientName-authn-ID.pem` file generated above
  9. Key file: the `ClientName-authn-ID.key` file generated above
  10. For the topic, in the textbox to the right of downlink topic, put `<exact Org Name>/downlink/$deveui`
  11. Save this application

## 2.2 Set Up the Decoders

- Go to https://github.com/Milesight-IoT/SensorDecoders and get the decoders for ALL devices you are setting up. Download the JS file to your local machine.
- In each decoder add in two lines of code to the milesightDeviceDecode function:

```javascript
  function milesightDeviceDecode(bytes) {
    var decoded = {};

    // Add these two lines:
    decoded.devEUI = LoRaObject.devEUI;
    decoded.devName = LoRaObject.deviceName;

    ...
  }
```

- Save the decoder files.
- In the network server go to the decoder tab. Click on the plus button at the very bottom of the page.
- Enter the name of the device as the decoder name
- Copy and paste the contents of the decoder from the edited js file.
- Save it

## 2.3 Add devices

- Connect the devices to the Gateway by going to the devices tab and clicking add device
- Give the device a unique name.
- When selecting the decoder ensure to select the `Custom` decoder you created. It should be under the custom section in the dropdown.
- Select the application that you just created from the application dropdown.
- Click save and do this for each device.
- Ensure the device seen status is green and the devices are being registered on the gateway.