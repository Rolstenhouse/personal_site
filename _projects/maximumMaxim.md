---
layout: projectPost
title: Maximum Maxim
role: Lead Developer
techStack: C++, MAX32600 mbed platform
brief: Darude Sandstorm on microcontroller for YHack
start: November 6th, 2016
end: November 8th, 2016
image: MaximumMaxim.png
githubURL: https://github.com/Rolstenhouse/MaximumMaxim
siteURL: https://vimeo.com/191319544
categories: ['recent']
date: 2016-11-08 00:00:00
---

# Summary

On a mission to use a piece of hardware without a connection to the internet, and an obvious lack in solid music to entertain those around, the project created itself out of necessity.

MaximumMaxim, is a hardware hack that plays Happy Birthday and then quickly plays Sandstorm accompanied by flashing lights. This was created as a joke hack, rather than to actually provide anyone with real value, besides a cheap laugh. The program is perfect for turning your birthday party into an instant rager.

This was my hackathon submission over my time at YHack, where I spent more time hanging out with friends than hacking with the goal to win.

### During this project I used

`C++` in coordination with the online compiler and IDE, [mbed](https://developer.mbed.org/compiler/#nav:/mbed-os-example-blinky/main.cpp) was used to program the MAX32600, a Maxim Integrated programmable board, in order to flash onboard multicolor LED's and play appropriate tones on an additional piezoelectric buzzer.

The programmed songs were as follows:

##### Happy Birthday

```cpp
    float melody[] = {g5, g5, a5, g5, c6, b5, g5, g5, a5, g5, d6, c6, g5, g5, g6, e6, c6, b5, a5, f6, f6, e6, c6, d6, c6};
    float beat[]   = {.1, .1, .2, .2, .2, .4, .1, .1, .2, .2, .2, .4, .1, .1, .2, .2, .2, .2, .2, .1, .1, .2, .23, .28, .4};
```

##### Darude Sandstorm

```cpp
    float melody[] = {b4, b4, b4, b4, b4, b4, b4, b4, b4, b4, b4, b4, e5, e5, e5, e5, e5, e5, e5, e5, d5, d5, d5, d5, d5, d5, d5, a4, a4};
    float beat[] =   {.1, .1, .1, .1, .2, .1, .1, .1, .1, .1, .1, .2, .1, .1, .1, .1, .1, .1, .1, .2, .1, .1, .1, .1, .1, .1, .2, .1, .1};

```

### Video

<iframe src="//player.vimeo.com/video/191319544" width="300" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

### Status
This project was completed, and has accomplished all intended functionality.
