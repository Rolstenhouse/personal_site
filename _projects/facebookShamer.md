---
layout: projectPost
title: Political Shamer
role: Front End Developer
techStack: PHP, Facebook API, Canvas
brief: Political filter overlay for Facebook profile picture
start: March 2016
end: March 2016
image: vote.jpeg
githubURL:
siteURL:
date: 2016-03-15 00:00:00
---
# Summary

During our time in Hong Kong, our original idea was to influence the election as much as possible, despite the fact that we were studying overseas. 

We created a web application which would

1. Grab your current Facebook profile picture
2. Allow you to choose a specific political associated filter
3. Link you to a private album where it was stored, where you would choose to set it as your profile picture

From a technical perspective, this wasn't completely trivial. 

##### During this project we used 

* PHP
* Facebook's Graph API
* Canvas

Canvas was used on the client-side and server-side to render the photo with a set image. 

Facebook's Graph API was used to grab the profile picture, and then automatically upload the picture to a privately created album within Facebook that would later be redirected to. Unfortunately, Facebook does not allow outside applications to update the profile picture (as of May 2016) and the user had to manually set the updated project.

PHP was used as a basic server so that images could be temporarily stored after Canvas was used to generate the graphic. This image would then be uploaded to Facebook and deleted off the server.

### Status
This project was never completed, but may be restarted closer to election time. We missed the viral period of the Primaries, and would be unlikely to gain traction right now.
