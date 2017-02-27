---
layout: projectPost
title: Emote
role: Back-End Developer
techStack: R, Bootstrap, MeteorJS, ngrok, Microsoft Facial API
brief: Real-Time facial emotion recognition for individuals with high functioning autism.
start: January 2017
end: present
githubURL: 
siteURL: 
techStack: 
image: emote.png
categories: []
date: 2017-01-15 00:00:00
---

# Summary

*AWARDED 2nd PLACE OVERALL AT SWAMPHACKS*

Imagine going through your everyday conversations – and not being able to read body language, social cues, or emotions.

**This is a reality for people with autism.**

Unfortunately, this leads to people with high-functioning autism being socially outcasted from early education to the work force – and beyond. Not because they do not understand emotion, but because they need to be explicitly told how someone is feeling to respond accordingly.

Our team set out to create a way to do that by providing an application that would read another individuals emotion based on an image fed to Microsoft's emotion API.

### What we built

We build our backEnd with `R` in order to expose our API to take the image from our web application. We then sent that image to the Microsoft facial recognition API. 

It's functionality fell severely short of what we initially envisioned; however, we have continued to work on it.

### How I Contributed

This was my most embarassing hackathon. As a hackathon veteran at that point, I spent the first 10 hours our so of the project working on another application called **Wow Reacts Only** that was destined to be a chrome extension that when pressed from within facebook, would automatically WOW (similar to Liking) all of their facebook profile pictures. 

After switching to working on Emote, I struggled for hours on being able to pass a canvas image to the API that we were trying to use. I had taken an image from a webcam stream and could successfully save it to disk and then upload it to the API; however, I wanted to be able to do all the operations in memory in order to improve latency. I was unsuccessful and ultimately had to succumb to sleep, confident that I would be able to tackle the problem in the morning.

However, while I slept, my other teammates decided to build a prototype that could simply take an image and give the reaction using the Microsoft API *which is what I should have used in the first place, rather than the 3rd party I was looking at* and then send that reaction via a text to the users phone; which would be able to discreetly show up on a users pebble watch. 

They made a product that was effective for a compelling demo and all success was due to their work rather than my own. I learned an important lesson from this which is to **always surround yourself with individuals determined to be successful** as they can take over the wheel regardless of the situation.

### Status

We have continued to work on this project and have gathered interested developers and have successfully pitched our products to UF's graphic design school, who agreed to take on designing aspects of this project, rather than their traditional curriculum.

