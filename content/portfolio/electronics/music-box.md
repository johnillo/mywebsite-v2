---
title: Music Box
description: "Two-song music box made with Arduino and tupperware."
thumbnail: /portfolio/electronics/music-box-tn.jpg
sort: 2
tech: [Arduino, Audio, "Piezoelectric Speaker", tupperware]
---

I find the music box fascinating. For my second electronics project, I decided to make a digital music box powered by an ATMega328 microcontroller as a gift.

<figure>
  <a href="/portfolio/electronics/music-box-07.jpg" target="_blank">
    <img src="/portfolio/electronics/music-box-07.jpg" />
  </a>
  <figcaption>The final product</figcaption>
</figure>

I completed this almost a year after the [digital clock](/portfolio/electronics/digital-clock). Likewise, I designed this with the knowledge I acquired through self-study.

## Materials

- Piezoelectric speaker
- Resistors
- Transistors
- Wires
- Perforated Circuit Boards
- LEDs
- Bunch of screws
- Push buttons
- Toggle switch
- Transparent plasticware for casing
- ATMega328 (on Arduino Uno board for development)
- Crystal oscillator
- Capacitors (for the microcontroller)
- Soldering iron and lead

## Development

#### First version

The final product was different from the first iteration I created. I originally wanted to make the music box display the note currently playing through a seven-segment and an array of LEDs. A sheet of paper with a printed design would cover the display panel, where the background is filled with black ink to block the light.

<figure>
  <a href="/portfolio/electronics/music-box-03.jpg" target="_blank">
    <img src="/portfolio/electronics/music-box-03.jpg" />
  </a>
</figure>

<figure>
  <a href="/portfolio/electronics/music-box-01.jpg" target="_blank">
    <img class="sm" src="/portfolio/electronics/music-box-01.jpg" />
  </a>
  <a href="/portfolio/electronics/music-box-02.jpg" target="_blank">
    <img class="sm" src="/portfolio/electronics/music-box-02.jpg" />
  </a>
  <figcaption>The failed design</figcaption>
</figure>

However, this design was a total flop. The array of LEDs draws too much power, and displaying the notes takes a significant microcontroller duty cycle. This weakened the speaker output to the point that you need to put the speaker near your ear to hear the music.

The microcontroller is playing the notes directly, so it shouldn't do anything else as much as possible. I think an amplifier circuit should've fixed the volume issue, but I didn't have enough knowledge and resources at that time.

#### Second version

I had no choice but to redo it with fewer components. Also, the ATMega328 only has 32KB ROM, so I can only fit about two full-length songs plus the codes for the operational functions.

<figure>
  <a href="/portfolio/electronics/music-box-04.jpg" target="_blank">
    <img src="/portfolio/electronics/music-box-04.jpg" />
  </a>
  <figcaption>Second iteration with least components possible</figcaption>
</figure>

I added three LEDs - two red for showing the current song playing and a green to indicate the state. There's also orange for the power-on state.

<figure>
  <a href="/portfolio/electronics/music-box-05.jpg" target="_blank">
    <img src="/portfolio/electronics/music-box-05.jpg" />
  </a>
  <figcaption>Test run with components attached</figcaption>
</figure>

I used jumper wires so the components can easily be attached to and detached from the mainboard. The jumper wires are more flexible than the solid wires. It uses 3x AA batteries to get 4.5V, so I jumped the battery holder's unused slot with a wire. It didn't have a voltage regulator, so it's risky to give it more than 5V.

<figure>
  <a href="/portfolio/electronics/music-box-06.jpg" target="_blank">
    <img src="/portfolio/electronics/music-box-06.jpg" />
  </a>
  <figcaption>Components fitted into the plastic container</figcaption>
</figure>

I chose a cylindrical plastic food container that perfectly houses all the components. The three push-buttons are screwed on the top of the case so the user can select and play the songs. The button far from the two is the play/pause button, and the two are for selecting songs one and two, respectively.

<figure>
  <a href="/portfolio/electronics/music-box-08.jpg" target="_blank">
    <img src="/portfolio/electronics/music-box-08.jpg" />
  </a>
  <figcaption>The music box playing</figcaption>
</figure>

I drilled multiple small holes on the surface for the sounds to pass through. I didn't spray the container with black paint like the first version because it doesn't attach to the plastic. I think the see-through design is also good.

#### Encoding the music

The two songs included in the music box are:

- [Like I'm Gonna Lose You - Meghan Trainor ft. John Legend](https://www.youtube.com/watch?v=2-MBfn8XjIU)
- [Locked Away - R. City ft. Adam Levine](https://www.youtube.com/watch?v=6GUm5g8SG4o)

I manually encoded the music by reading the sheet music of the songs created by [Joyce Leong](https://joycemusic1.com/), then referred to [this frequency chart](https://pages.mtu.edu/~suits/notefreqs.html) to play the notes through pulse-width modulation (PWM).

It took me some time to complete the two songs, but I learned a lot and enjoyed the process.

## Software

The software is in C, programmed with the Arduino IDE. You can view the source code [here](https://github.com/johnillo/KateMusicBox).
