---
title: "LoRaWAN Soil-Moisture Monitoring for Australian Farms"
description: "How Australian farms can use LoRaWAN soil-moisture sensors, gateways and weather data to monitor irrigation, compare fields and plan a small pilot."
tags: [iot, agriculture, lorawan]
cover: "/assets/articles/0007-lorawan-soil-moisture-monitoring-for-australian-farms/farm-soil-monitoring-architecture.jpeg"
---

# LoRaWAN Soil-Moisture Monitoring for Australian Farms

**How wireless soil sensors can help Australian farmers make better irrigation decisions**

Farmers need to know when and where crops need water. This matters across horticulture, vineyards, broadacre farming, pasture and intensive agriculture.

Traditional soil-moisture monitoring often relies on manual checks or systems that need extensive cabling. LoRaWAN soil sensors provide another option. They collect measurements across a property and transmit them to a central platform using little power. Farmers can track soil moisture, temperature and other conditions as they change.

## What is LoRaWAN soil-moisture monitoring?

LoRaWAN is a low-power, long-range wireless communication technology designed for connecting sensors and other IoT devices. In an agricultural application, a typical system consists of:

The system links soil-moisture sensors, a LoRaWAN gateway, an internet connection, an IoT platform and a farmer dashboard.

![Soil-moisture sensors send field data over LoRaWAN through a gateway to a farmer dashboard.](/assets/articles/0007-lorawan-soil-moisture-monitoring-for-australian-farms/farm-sensor-gateway-dashboard.jpeg)

Sensors installed at selected locations in a field periodically measure soil conditions. The data is transmitted wirelessly to a LoRaWAN gateway, which forwards it to an IoT platform where it can be stored, visualised and analysed. Because LoRaWAN devices can operate for long periods using batteries, sensors can be installed in locations where providing mains power or network cabling would be impractical.

## Why monitor soil moisture?

The amount of water available to plants is influenced by rainfall, irrigation, soil characteristics, temperature, evaporation, plant growth and drainage. A soil-moisture sensor provides a direct measurement of conditions at a particular location and depth.

Continuous monitoring can help answer questions such as:

- Is the soil sufficiently wet?
- How quickly is moisture being lost?
- Did recent rainfall penetrate the root zone?
- Has irrigation reached the required depth?
- Is water moving through the soil profile?
- Are some areas of the farm drying faster than others?
- Is irrigation being applied when it is actually needed?
- Are there areas receiving too much water?

Instead of relying entirely on a fixed irrigation schedule, farmers can use measured soil conditions as one of the inputs to their irrigation decisions.

## How does a LoRaWAN farm monitoring system work?

A typical installation includes several layers.

### 1. Soil sensors

Sensors are installed at representative locations throughout the farm.

Depending on the application, they may measure:

- Volumetric water content
- Soil moisture
- Soil temperature
- Electrical conductivity
- Other soil parameters

Sensors can be installed at one or multiple depths.

### 2. LoRaWAN connectivity

The sensor periodically wakes up, takes a measurement and transmits a small data packet. The device can remain in a low-power state between measurements, which helps extend battery life.

### 3. LoRaWAN gateway

The gateway receives transmissions from sensors distributed across the property and forwards the information to the network server. A strategically positioned gateway can cover a substantial agricultural area, although actual coverage depends on terrain, vegetation, antenna height, buildings and other radio conditions.

### 4. IoT platform

The data can be stored in a cloud-based or locally hosted platform. The platform can provide:

- Current soil-moisture readings
- Historical trends
- Graphs
- Maps
- Sensor status
- Alerts
- Irrigation records
- Weather information
- Reports

### 5. Mobile and web dashboards

Farm managers can access the information from a computer, tablet or mobile device.

This is particularly useful when monitoring multiple fields or properties.

## Why LoRaWAN is useful on Australian farms

Australian farms can cover very large areas, and agricultural monitoring locations are often far away from buildings and conventional communications infrastructure.

LoRaWAN is particularly useful because it combines long-range wireless communication with low power consumption. A farm may have sensors distributed across:

- Orchards
- Vineyards
- Vegetable crops
- Pastures
- Greenhouses
- Irrigated fields
- Tree plantations
- Experimental plots

Instead of connecting every sensor to a local Wi-Fi network, a small number of strategically positioned LoRaWAN gateways can provide connectivity to many battery-powered devices.

## Soil moisture at different depths

One of the most useful aspects of soil-moisture monitoring is the ability to monitor different depths. A sensor installed near the surface may respond quickly to rainfall and evaporation. A deeper sensor may provide a better indication of the water available to plant roots. For example:

### Surface layer

Rainfall and evaporation may cause relatively rapid changes.

### Root-zone layer

This can provide useful information about water available to plants.

### Deeper layer

This can help identify whether irrigation or rainfall is penetrating beyond the intended root zone. Using sensors at multiple depths can therefore provide considerably more information than a single measurement.

## Soil type matters

A soil-moisture reading should not be interpreted in isolation. Different soils retain and release water differently. For example, sandy soils generally drain more rapidly than heavier clay soils. The same sensor reading may therefore have different implications depending on the soil characteristics. Important factors include:

- Soil texture
- Soil structure
- Organic matter
- Drainage
- Root depth
- Crop type
- Irrigation method
- Soil salinity

For this reason, a successful monitoring system should be configured for the specific agricultural application rather than treating every soil-moisture reading as universally applicable.

## Combining soil moisture with weather data

Soil moisture becomes much more useful when it is analysed together with other environmental information. A farm monitoring platform can combine sensor data with:

- Rainfall
- Air temperature
- Relative humidity
- Solar radiation
- Wind
- Evapotranspiration information
- Weather forecasts

For example, a declining soil-moisture trend combined with high temperature, low humidity and strong wind may indicate increasing water demand. Conversely, rainfall followed by a substantial increase in soil moisture can provide evidence that water has entered the monitored soil profile. The objective is not simply to collect more data, but to create information that supports better decisions.

![Soil moisture, rainfall, air temperature and humidity readings shown across a week.](/assets/articles/0007-lorawan-soil-moisture-monitoring-for-australian-farms/soil-moisture-and-weather-trends.png)

## Irrigation monitoring

LoRaWAN soil sensors can also be used alongside irrigation systems. A monitoring platform can show:

```mermaid
flowchart LR
    accTitle: Soil-moisture readings before and after irrigation
    accDescr: Before irrigation soil moisture approaches a management threshold. Irrigation raises soil moisture, and readings over the following days show the drying rate.
    before["Before irrigation: moisture falls toward threshold"] --> irrigation["Irrigation system operates"]
    irrigation --> after["After irrigation: soil moisture rises"]
    after --> follow["Following days: monitor drying rate"]
```

The platform records the rate at which moisture declines again. This historical information can help farmers understand how their soil and irrigation system behave over time.

## Detecting irrigation problems

Distributed soil sensors can reveal differences between areas of a field. For example, if most sensors show an increase in soil moisture after irrigation but one sensor does not, possible causes might include:

- Blocked irrigation equipment
- Damaged irrigation lines
- Uneven water distribution
- Local soil differences
- Sensor problems

Similarly, an unexpected increase in soil moisture could indicate excessive irrigation, drainage from another area or an environmental event.

The sensor does not necessarily identify the cause, but it can provide an early indication that an investigation is warranted.

## Creating a soil-moisture map

When sensors are installed at multiple locations, their readings can be displayed on a map. A farm dashboard could show:

| Field | Soil moisture | Trend | Status |
| --- | --- | --- | --- |
| Field A | 31% | Declining | Monitor |
| Field B | 42% | Stable | Normal |
| Field C | 24% | Rapidly declining | Investigate |
| Field D | 48% | Increasing | Recently irrigated |

The exact interpretation of these values depends on the sensor technology, soil and crop. The important advantage is the ability to identify spatial variation across the farm rather than assuming that one measurement represents the entire property.

## How many sensors are required?

There is no universal number. Sensor density depends on:

- Farm size
- Soil variability
- Crop type
- Irrigation layout
- Terrain
- Management zones
- Budget
- Required monitoring accuracy

A relatively uniform field may require fewer monitoring points.

A property containing several soil types, slopes or irrigation zones may require substantially more sensors. A practical approach is often to begin with representative monitoring locations and expand the network as the value of the data becomes established.

## Sensor placement is critical

The quality of the monitoring system depends heavily on where sensors are installed.

Sensors should be located where their measurements represent the conditions experienced by the crop. Avoid relying exclusively on locations that are:

- Immediately beside irrigation outlets
- Near drainage channels
- On unusual soil formations
- In areas affected by vehicle traffic
- Outside the crop's effective root zone
- In locations that are not representative of the management zone

Where appropriate, multiple sensors at different depths can provide a better understanding of water movement through the soil profile.

## LoRaWAN gateway placement on farms

Gateway placement is an important part of system design.

A gateway should generally be positioned to provide good radio visibility to the monitoring area.

Factors include:

- Gateway antenna height
- Terrain
- Trees
- Buildings
- Hills
- Metal structures
- Vegetation
- Distance from sensors
- Antenna characteristics
- Radio interference

A gateway installed at an elevated location may provide significantly better coverage than one positioned close to ground level.

For very large properties or those with difficult terrain, multiple gateways may be appropriate. For setup and frequency-plan guidance, see [How to Set Up a LoRaWAN Gateway in Australia](/articles/0005-how-to-set-up-a-lorawan-gateway-in-australia).

## Australian LoRaWAN considerations

LoRaWAN deployments in Australia need to use the appropriate Australian radio-frequency configuration and comply with applicable Australian requirements.

For agricultural installations, the system designer should also consider:

- Gateway radio configuration
- Antenna selection
- Outdoor enclosure protection
- Lightning and surge protection
- Power availability
- Backup power
- Cellular or other backhaul connectivity
- Sensor battery performance
- Environmental exposure

Equipment should be selected and configured specifically for the Australian operating environment.

## Solar-powered LoRaWAN gateways

Remote farms may not have convenient access to mains electricity. A gateway can therefore be designed with:

- Solar panels
- Battery storage
- Charge controller
- Low-power communications equipment
- Cellular backhaul

This can create an autonomous monitoring point capable of operating in remote locations. The power budget needs to account for seasonal solar variation, gateway consumption, communications requirements and battery capacity.

## Battery-powered soil sensors

One of the advantages of LoRaWAN is that sensor devices can remain in a low-power state for much of their operating life. A typical sensor may:

- Wake up
- Measure soil conditions
- Process the reading
- Transmit the data
- Return to low-power mode

The required battery life depends on:

- Measurement frequency
- Transmission frequency
- Radio conditions
- Sensor technology
- Battery chemistry
- Operating temperature
- Device design

For agricultural installations, long battery life can significantly reduce maintenance requirements.

## Setting useful alerts

A monitoring platform can generate alerts when measured conditions change significantly. Examples include:

### Low soil moisture

Notify the farm manager when soil moisture falls below a configured management level.

### Rapid moisture loss

Identify locations where moisture is declining faster than expected.

### Irrigation response

Generate an alert if soil moisture does not increase after a scheduled irrigation event.

### Sensor failure

Notify the operator if a sensor stops communicating.

### Abnormal readings

Identify readings that are substantially different from neighbouring sensors or historical behaviour. Alerts should be designed carefully. Too many notifications can cause users to ignore them.

## From monitoring to intelligent irrigation

The longer a monitoring system operates, the more useful its historical data can become. A farm may gradually develop a picture of:

- Typical moisture levels
- Drying rates
- Rainfall response
- Irrigation response
- Seasonal variation
- Differences between fields
- Differences between soil types
- Crop water demand

This creates an opportunity to move from simple monitoring toward data-driven irrigation management. The system can eventually combine measured soil conditions with weather and crop information to support more informed irrigation decisions.

## LoRaWAN soil monitoring architecture

A typical Australian farm deployment can be represented as:

![Australian farm soil sensors, LoRaWAN gateway, network connectivity and IoT dashboard with alerts and insights.](/assets/articles/0007-lorawan-soil-moisture-monitoring-for-australian-farms/farm-soil-monitoring-architecture.jpeg)

This architecture separates the field sensors from the application platform, making it possible to expand the system over time.

## Integrating other farm sensors

The same LoRaWAN infrastructure can potentially support many other agricultural IoT devices. For example:

- Weather stations
- Rain gauges
- Water-level sensors
- Tank-level sensors
- Flow meters
- Pump monitoring
- Irrigation monitoring
- Temperature sensors
- Humidity sensors
- Environmental monitoring devices

A single IoT platform can therefore provide a broader view of farm operations.

## The value of historical data

Real-time readings are useful, but historical data can be even more valuable.

A graph showing soil moisture over several weeks can reveal patterns that are difficult to see from individual readings. For example:

![Soil moisture declining, rising after irrigation and declining again over a day.](/assets/articles/0007-lorawan-soil-moisture-monitoring-for-australian-farms/soil-moisture-irrigation-trend.png)

The farmer can compare these trends with rainfall, irrigation events and weather conditions. Over time, the data can become a valuable operational record.

## Important limitations

Soil-moisture monitoring should not be treated as a completely automatic replacement for agronomic knowledge. Sensor readings can be affected by:

- Soil composition
- Sensor installation
- Calibration
- Salinity
- Temperature
- Sensor ageing
- Localised soil conditions
- Poor sensor placement

Sensors should therefore be installed, configured and interpreted appropriately for the crop and soil conditions. It is also important to distinguish between the measurement produced by the sensor and the agricultural decision made from that measurement.

## Starting a LoRaWAN soil-monitoring project

A practical deployment can be developed progressively.

### Step 1 — Define the objective

Determine what the system is intended to achieve. For example:

- Reduce unnecessary irrigation
- Understand soil variability
- Monitor irrigation performance
- Improve crop management
- Detect abnormal conditions

### Step 2 — Identify monitoring zones

Divide the farm into areas with similar soil, crop and irrigation characteristics.

### Step 3 — Select sensor locations

Choose representative locations and, where useful, multiple depths.

### Step 4 — Test LoRaWAN coverage

Install a gateway and verify communication from the intended sensor locations.

### Step 5 — Deploy a pilot

Start with a limited number of sensors.

### Step 6 — Analyse the data

Observe how soil moisture responds to rainfall, irrigation and weather.

### Step 7 — Expand the system

Add sensors and additional monitoring zones based on the results of the pilot.

## Conclusion

LoRaWAN soil-moisture monitoring provides Australian farmers with a practical way to collect continuous information from widely distributed agricultural locations. By combining low-power wireless sensors, strategically positioned gateways and an IoT data platform, farmers can monitor soil conditions across multiple fields and depths without installing extensive communication cabling. The greatest value comes not from the sensor reading alone, but from understanding the relationship between soil moisture, rainfall, irrigation, weather, crop requirements and historical trends. As agricultural IoT systems become more capable, LoRaWAN can provide the communications infrastructure for a broader farm-monitoring platform that includes soil, water, weather and irrigation data. For Australian agriculture, this creates an opportunity to move from periodic manual measurements toward continuous, connected and data-driven environmental monitoring.

## Practical checklist

Before deploying a LoRaWAN soil-moisture monitoring system, consider:

- Define the agricultural objective
- Identify soil and crop management zones
- Select appropriate soil-moisture sensors
- Determine suitable sensor depths
- Select representative installation locations
- Test LoRaWAN radio coverage
- Select and position the gateway
- Plan gateway power and Internet backhaul
- Configure the Australian LoRaWAN frequency plan
- Protect outdoor equipment from environmental exposure
- Establish sensor calibration and maintenance procedures
- Create a dashboard for historical trends
- Configure meaningful alerts
- Integrate rainfall and weather information where appropriate
- Begin with a pilot before expanding across the entire farm
