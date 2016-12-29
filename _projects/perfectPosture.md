---
layout: projectPost
title: Perfect Posture
role: Swift Developer
techStack: Swift, Applescript, Launchpad TI CC3200, Chart.js, M2X ATT
brief: Wearable technology that shuts off computer screen when user is slouching
start: February 2016
end: 24 hours later
image: perfectPosture.png
githubURL: https://github.com/joshbenner851/Perfect-Posture
siteURL:
categories: ['recent']
date: 2016-02-15 00:00:00
---

# Summary

During our time in Hong Kong, a couple other expats and I decided to try our luck at Bitwise Hacks, a hackathon taking place at the Hong Kong international secondary school. Our team, comprised of myself, Josh Benner, Joel Walker, Cloe Liu, and Ethan Raymond, worked together to develop a wearable posture assistant, Perfect Posture.

We received 2nd place during this competition, for developing the best software hack.

How it broke down:
- We utilized the TI Launchpad CC3200, which had yaw sensitivity as well as WiFi enabled, in order to detect the angle of the back, thus indicating posture, by strapping the "wearable" microcontroller onto the upper back of the consumer.
- The Launchpad would receive the data and send it through ATT's M2X stream technology, which would then push status updates to both:
-  - a website (where past sensitivity was charted using `Chart.js`)
-  - a `Mac OS` menubar application, which would execute a script to shut the users computer off at a set threshold.

### During this project I used

`Swift` to develop the menubar application. Developing the application as a menubar was a necessary design decision for Mac OS since it would be a nonintrusive way to tell a user that the dedicated application is running in the background while they carry out regular tasks.

In order to execute calls to the system in order to turn off the screen, `Applescript` which was similar to a `.bat` script you might run on windows, executed the lower screen brightness command 15 times, in order to effectively darken the screen without putting it to sleep.

#### Our team's responsibilities

Ethan Raymond
- Getting the Mac OS app to poll the ATT M2X stream in order to detect when the pitch hit a certain threshold
- Initial Launchpad setup

Cloe Liu
- Market research
- Business plan
- Pitch (Along with myself)

Josh Benner & Joel Walker
- Figuring out ATT M2X
- Developing website using Chart.js
- Writing code to Launchpad to send to data stream

### Status
This project was completed, although buggy, during the time of the hackathon. Work on it has been discontinued.
