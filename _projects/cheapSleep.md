---
layout: projectPost
title: CheapSleep
role: Android Developer
techStack: VenmoAPI, Java (Android), SQLite
brief: Native alarm clock application that donates to a charity every time you snooze the alarm
start: July 2015
end: 24 hours later
image: cheapSleep.png
githubURL:
siteURL:
date: 2015-07-15 00:00:00
---

# Summary

This project was built at HackStart with the goal to allow an alarm clock to donate to a chosen charity. During development at the hackathon, the alarm clock was functional; however, the donation was only enabled to donate to the developer, which just so happened to be myself. 

Despite being only halfway functional, I received an award for "Most Unique and Problem-Solving App" as the ultimate vision I had for the application was powerful.  

How it broke down:
- The alarm clock was based on open source github project, https://github.com/SheldonNeilson/Android-Alarm-Clock
- The Android application was developed with android studio, along with the Venmo API
- The database was slightly modified to keep track of the number of times the individual hit snooze, which would later be aggregated to send through the API.
- All monetary transactions were done through Venmo

### During this project I used

`Java` to develop most of the internal logic of the applications and `SQLite` for the database, as it as almost a requisite of Android. If I were to do it again, I would have stored most information locally, but also some information on our own servers; however when I developed the application, I was focused more on building everything into the application.

I also used lots of Redbull, pulling my first all-nighter at a hackathon, much thanks to the onsite Redbull vending machines.

### Status
This project was barely completed, and maybe pursued at some point in the future; however, this would be dependent on finding a charity API that would support micro-donations. Currently, the existing solution has a $10 minimum transfer amount. 
