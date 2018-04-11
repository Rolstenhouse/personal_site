---
layout: projectPost
title: Krispy Kreme
role: Hacker
techStack: Flask, Python, Javascript, Mongo
brief: Is the Gainesville Krispy Kreme donut hot light on?
start: January 2018
end: March 2018
image: krispy.png
githubURL: https://github.com/Rolstenhouse/hot_light
siteURL: http://www.isthekrispykremehotlighton.com
categories: ['recent']
date: 2018-03-15 00:00:00
---

[Check it out!]({siteURL})

# Inspiration

At 2AM one night, I had a craving for Krispy Kreme, and in order to find out if the donuts were hot, I had to download an app from the app store. I certainly didn't need an app for this one time desire, so I accessed the website and spent considerably more time clicking around than I'd like to admit, before giving up.

Rather than go get donuts, I did a quick search on Namecheap and bought the domain name, isthekrispykremehotlighton.com for $10. I assumed and mentally readied myself to plant a camera on top of a friends apartment complex and wait for the hot light to turn onn or off and update the website based on that.

## What ended up happening

I woke up in the morning with a slight amount of buyer's remorse and did a little more research, only to discover that the official Krispy Kreme website did in fact update the hot light status on their website, with an API endpoint. 

Unfortunately, Namecheap doesn't allow returns on domain names, so rather than have spent $10 in vain, I decided to build out the basic UI and stick with it.

## Technical details

This project was a little trickier than expected because I was determined not to pay anything more for it. In order to do this I took a couple steps.

* Signed up for Heroku's free tier and input my credit card, so I could get access to 1000 free single process hours per month. (A downfall of the free tier is that it times out)
* Set up new-relic to ping the site and report when it's down (a free plugin from heroku)
* Used flask as my backend server to store the hot light status in order to set notifications
* Stored phone numbers and hot light status in Mlab's free 500MB mongo DB store
* Ran a looped thread to check the API endpoint every five minutes to make sure my website's status was still correct
* Had a separate thread run if the hot light was on to email all the phone numbers, a hack I found out about 3 years ago on the useless facts project.
* Added Google Analytics to track how many users visited my site when I launched

I used this project as an opportunity to build something for fun, and I really enjoyed working on it. Unfortunately, the codebase is pretty gross, but I intended to use this project to learn and to never update again. It won't scale and I think that's cool.

### Status

Completed and active.
