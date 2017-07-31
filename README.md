# Pet 4.0
## Description
_**What is it ?**_

The system "Pet 4.0" will make people don't have to worry about their pets, such as feeding food anytime anywhere moreover you can know what they are doing. The tool contains variety of functions; for example, Color sensor, LDR Photoresistor sensor, Temperature sensor, and Ultrasonic sensor. The project is powered by Arduino Uno Wifi and Arduino IDE.

_**How does it work?**_

Pet 4.0 can do many things in order to look after or entertain your pets when you don’t stay at home. Our Pet 4.0 Web App will show you that all of your pets are arrive home, amount of food left in the bowl, temperature in that room, then we use all of this information that we detect to analyze what we should do for appropriate situations. The first, if all your pets in home and after 9 PM, the door will lock automatically, then 6 AM the door will open. The second, our feeder will be worked on time that we select. The third, air conditioner will be opened when the temperature higher than 28 °C, and all your cat must be in that room. Moreover, we have the toy for playing with your pets automatically, if your pets stay close enough to the toy, but you also interact with pets by manual mode too.

_**Concept "Make It Happen"**_

To the theme of "Make It Happen", so we look into the things that develop our life better. Then, we found the problem when we traveled or went outside, so we'll worry that nobody take care our pet at home. We hope our project "Pet 4.0" will benefit for us to not worry our pets anymore.

## Features

_**Hardware**_

This project use Arduino Uno Wifi controller board and variety of Hardware sensors. List of hardware sensors used in this project.

3x Arduino Uno Wifi
1x DHT11 humidity and temperature sensors
3x HC-SR04 Ultrasonic distance measurement
2x ZX-LED LED Light
1x LDR Photoresistor Sensor Module (Light compensate measurement)
1x RGB Color Sensor TCS230
3x Micro Servo Tower Pro SG90
We divide features of this project into several of module.

**Air conditioner controller**
- We use ZX-LED to simulate as an air conditioner, user can manually turn on or off.
- There is an automatic system that can turn on or turn off air conditioner by using data from Temperature detection module and number of pet in home. If the temperature is more than 28°C and there is a pet in the home, it will turn on air conditioner.

**Light controller**
- We use ZX-LED to simulate as light bulb, user can manually turn on or turn off.

**Pets Feeder**
- We use micro servo to dispense food from food storage to a pet bowl. When received feeding command from user, micro servo will rotate to 90 degree for a 1-3 second, then turn back to its origin position.
- We use LDR sensors at the bottom of pet bowl. If food is full field in a bowl, LDR can’t detect light and overriding to stop feeder command from user.

**Temperature detection**
- We use DHT11 temperature sensors to measurement temperature and send data to server every 10 second.

_**Software**_

User can control any gadgets by Friendly-UI such as turn in/off light, close/open the door, feeding the cats, we have automatic mode for light, air conditioner, toy, door. And user can see the number of cats and temperature in the house in real time. 

## Developers

- Nutcharueta Sihirunwong	
- Prakrid Kanokpongsakorn	
- Chananya Ruenpitak	
- Sorachat Patanasombat	
- Kanchanok Kannee	
- Wongsathorn Panichkurkul	
- Varit Assavavisidchai	
