---
layout: projectPost
title: BarterTown
role: CoFounder and Lead Developer
techStack: MeteorJS, materializeCSS, ElasticSearch
brief: Worked in HackerHouse, a startup accelerator/incubator, on the bartering of services and products.
start: May 2015
end: August 2015
image: barterTown.png
githubURL: 
siteURL: http://www.bartertown.xyz
date: 2015-08-15 00:00:00
---

# Summary
Over the summer after freshman year, I took place in the [HackerHouse](http://hackerhouse.info/) startup accelerator/incubator. This four-month long program (and potentially longer) began with an ideation process, validation, a prototype, more validation, pitching, incorporating and ultimately halting progress on our project, BarterTown. We were setup to live in an old Victorian house rent-free and without a need to buy food, so that we were truly trying to bootstrap our success.

Our idea was to enable Craigslist type interactions, but rather than using money, we focused only on the exchange of goods and services. Which in hindsight was a poor match for my passions and the passions of my cofounders, Guru Sharan and Daniel Diaz.

### What we built 

After iterating through several prototypes and design drafts, I got my first real experience at trying to build and deploy a website, which at the time seemed incredibly difficult. 

We used `MeteorJS` as our full-stack solution, which allows you to write javascript on both the frontEnd and the backEnd. The server architecture was a version of Node, and in a similar fashion there were lots of user-submitted packages in the online equivalent of npm for meteor, Atmosphere. The frontEnd used Meteor's native templating engine, Handlebars, and the MaterializeCSS css and javascript library. 

Meteor uses `MongoDB` as its database, which we felt had met our needs, since all we initially thought we needed to store was the individual products or services that we would be advertising, but we soon ran into design decisions on when to duplicate data and when to query as we introduced more tracking, categorizing, and user accounts monitoring their own activity.

We implemented a real-time messaging system between two use accounts to allow for safe communication with the users, who had been previously verified based on their email *if it was from `@ufl.edu`*.

We added `ElasticSearch` as a search engine to build up an index of the services and products that were offered to enable a faster search response time and an overall cohesive experience. It added the ability for fuzzy searching in order to provide suggestions based on spelling errors.

We were planning on monetizing through targeted advertising and to eventually offer payment through a service such as Venmo or Braintree, which would allow us to take a small transaction of the order.

### What we found 

As we pitched to investors, we continuously got questions on how this was going to make money and how we were going to acquire users. We answered these questions as best as we could; however, we soon discovered that we had no passion for carrying this idea to term. In an attempt to get users on the website, we realized that the interface was cumbersome and that no one was interested in trying a platform that was difficult to use. We felt these pains during the summer, but felt that we were locked into the program and idea we had and that a dramatic pivot would not be possible.

We decided not to continue on with the project, primarily due to lack of interest among founders. From this experience, I learned a lot about generating business ideas, executing on them, and working with investors.

### Status

Despite officially registering as an LLC in Florida, we ultimately parted ways and moved on to other projects and ideas.