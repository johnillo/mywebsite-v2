---
title: Digital Clock
description: Digital clock made with Arduino, 7-segment displays, and tupperware.
thumbnail: /portfolio/electronics/digital-clock13.jpg
sort: 1
tech: [Arduino, Logic Gates, 7-Segment Display]
---

I was inspired to make a clock that looks like a Steins;Gate [Divergence Meter](https://steins-gate.fandom.com/wiki/Divergence_Meter). However, I didn't have any resources to build it. Electronic parts are quite pricey and hard to come by in my location. As a beginner, it's best to start with simple projects first.

<figure>
  <a href="/portfolio/electronics/digital-clock13.jpg" target="_blank">
    <img src="/portfolio/electronics/digital-clock13.jpg" />
  </a>
  <figcaption>The final product, completed around 2015-12-28</figcaption>
</figure>

I designed this with the knowledge I learned through school and self-study while learning new things along the way. My logic design course taught me the basics of logic gates and prototyping.

## Materials

- Seven Segment Display (10x)
- Logic Gates (74LS08 AND, 74LS04 NOT)
- Resistors
- Transistors
- Wires
- Perforated Circuit Boards
- LEDs
- Bunch of screws
- Push buttons
- Transparent plasticware for casing
- ATMega328 (on Arduino Uno board for development)
- Crystal oscillator
- Capacitors (for the microcontroller)
- Soldering iron and lead
- Hot glue

I wasn't able to keep the note of the exact parts I used.

## Development

<figure>
  <a href="/portfolio/electronics/digital-clock02.jpg" target="_blank">
    <img src="/portfolio/electronics/digital-clock02.jpg" />
  </a>
  <figcaption>Early prototype</figcaption>
</figure>

After doing the schematics, I did a breadboard prototype of the display, driven by several logic gates working as a demultiplexer to help the ATmega328 drive the 10 seven segment displays. I didn't have access to proper display driver ICs back then. I also wanted to practice some logic gate designing.

<figure>
  <a href="/portfolio/electronics/digital-clock03.jpg" target="_blank">
    <img class="sm" src="/portfolio/electronics/digital-clock03.jpg" />
  </a>
  <a href="/portfolio/electronics/digital-clock04.jpg" target="_blank">
    <img class="sm" src="/portfolio/electronics/digital-clock04.jpg" />
  </a>
  <figcaption>Display demux module</figcaption>
</figure>

The logic gates were soldered onto the perforated circuit board. It's the only way to do it because I didn't know how to do a printed circuit board.

<figure>
  <a href="/portfolio/electronics/digital-clock05.jpg" target="_blank">
    <img src="/portfolio/electronics/digital-clock05.jpg" />
  </a>
  <figcaption>Testing the demux module with the display on the breadboard</figcaption>
</figure>

I added ten transistors that toggle the power of the displays. The demux helped reduced the pins needed to switch the displays from ten to four, a necessary optimization given the limited output pins of the ATMega328.

<figure>
  <a href="/portfolio/electronics/digital-clock06.jpg" target="_blank">
    <img class="sm" src="/portfolio/electronics/digital-clock06.jpg" />
  </a>
  <a href="/portfolio/electronics/digital-clock07.jpg" target="_blank">
    <img class="sm" src="/portfolio/electronics/digital-clock07.jpg" />
  </a>
  <figcaption>Putting the seven segment displays on the board</figcaption>
</figure>

Having limited tools and materials forces you to be more resourceful and creative. For the display, I used an illustration board to hold them in place. It's thick enough not to wobble and hold the components firmly. I used a portable electric drill to drill holes with a standard diameter for electronic components.

<figure>
  <a href="/portfolio/electronics/digital-clock08.jpg" target="_blank">
    <img src="/portfolio/electronics/digital-clock08.jpg" />
  </a>
  <figcaption>Display pins with soldered wires</figcaption>
</figure>

After securing the displays on the board using hot glue, I soldered the wires on the pins at the back. Yes, it was that messy.

<figure>
  <a href="/portfolio/electronics/digital-clock09.jpg" target="_blank">
    <img src="/portfolio/electronics/digital-clock09.jpg" />
  </a>
  <figcaption>Logic board</figcaption>
</figure>

The logic board holds the ATMega328 and the main power connector. The power port was a micro type B USB from a cheap piece of equipment I bought from a thrift electronics store.

<figure>
  <a href="/portfolio/electronics/digital-clock10.jpg" target="_blank">
    <img src="/portfolio/electronics/digital-clock10.jpg" />
  </a>
  <figcaption>Logic board, demux, and display soldered together</figcaption>
</figure>

The modules were connected via soldered wires, making them tightly coupled. I didn't have enough jumper wires to spare, so assembly was cumbersome.

<figure>
  <a href="/portfolio/electronics/digital-clock11.jpg" target="_blank">
    <img src="/portfolio/electronics/digital-clock11.jpg" />
  </a>
  <figcaption>Initial assembly</figcaption>
</figure>

I cut the excess plastic off the latch of the tupperware lid in front, drilled three holes on the top of the case for the switches, and some holes at the backside to fit the power cable and switch.

<figure>
  <a href="/portfolio/electronics/digital-clock12.jpg" target="_blank">
    <img src="/portfolio/electronics/digital-clock12.jpg" />
  </a>
  <figcaption>Optimized display wiring</figcaption>
</figure>

However, the display's messy and bulky wiring didn't fit in the casing, so most snapped off due to pressure. I was able to fix it by connecting the similar pins of the displays using short wires before connecting them to the display circuit. The outcome was a lot better than the first wiring.

I had an excess window tint lying around, so I put some on the display area to reduce glare and obfuscate the internals when viewing the time.

<figure>
  <a href="/portfolio/electronics/digital-clock01.jpg" target="_blank">
    <img src="/portfolio/electronics/digital-clock01.jpg" />
  </a>
</figure>

The clock can be powered by any standard USB charger through a standard micro USB type b cable. The buttons above allow adjusting of the date and time as you would do with any other clock.

### Software

The clock's firmware is in C, programmed with the Arduino IDE. You can view the source [here](https://github.com/johnillo/KateDigitalClock) (I apologize for the ugly code).
