---
layout: projectPost
title: Microsoft Round 2
role: Windows Kernel Driver Software Developer Intern
start: September 2017
end: November 2017
image: microsoft.jpg
categories: ['software', 'recent']
location: Redmond, Washington
brief: Kernel driver to support new Intel chipset DMA
date: 2017-11-15 00:00:00
---
*Disclaimer: I originally wrote this as a blog post to be published on Microsoft's Windows blog*

I interned in the summer of 2016 as an explorer intern in the developer tools division and now (Fall 2017) am finishing up a SWE internship in SFS. This articles serves to focus on the technical details of the project I worked on and my experience as a whole at Microsoft.

# The Technical Project
	
##	The Exposition
Day one I was greeted by my manager, Scott,  with a loose definition of a project, to write a driver to support a new DMA component. This project had no associated spec and only one goal, make it work. 

Every intern in SFS has a mentor and a manager, so I asked my mentor, Pedro, where I should start, and I got pointed to tutorials on working with the kernel debugger and writing a physical driver. I then got sent a hefty textbook and an e-textbook of a newer version and directed to read through the first 100 pages or so to get an understanding. 

Eventually, I graduated through the tutorials and was rewarded with hundreds of pages of documentation on the specific DMA chipset that I would be writing a driver for. Needless to say, the first four weeks of my twelve-week internship was spent understanding the documentation, the windows kernel programming paradigm, and structuring my coding approach.

By week 5, I had reached a low point of my internship. I had written only enough code to load the driver for the DMA device into Windows, but was stuck on actually programming the DMA to work. Until finally, I got my first sign of real progress, when I was able to use the user mode test to copy a 1 and override a 2 in a part of user mode virtual memory, by calling the kernel mode driver. 

The resulting initial pull request got 79 comments which required resolution.
By the end of my internship, I had written a functioning driver ready to be performance tested and integrated into the complete windows stack. 
	
### The nitty gritty
I wrote a Kernel Mode Driver Framework (KMDF) driver to support a new DMA chipset to be used in servers in order to offload memory copy operations or zero physical memory to the DMA. 
In order to write a driver to support a hardware component, there are several crucial steps that need to be followed:

1.	Register the EvtDriverAdd callback
2.	Call an EvtDeviceAdd routine to register the individual device
3.	Register I/O Queue
4.	Memory map the necessary hardware registers
5.	Allocate contiguous memory (necessary for building a descriptor chain)
6.	Receive the IOCTL
7.	Probe and Lock the source and destination buffer addresses in the caller process context
8.	Build associated Scatter Gather Lists (lists of contiguous physical memory for the buffers)
9.	Program each contiguous memory location (up to 2MB) in a descriptor
10.	Chain these descriptors together and program in contiguous memory.
11.	Program the DMA hardware
12.	Run ISR when DMA errors or completes and check status
13.	If completed, complete the request. If not, chain more descriptors.

# Overall Microsoft Experience
	
Microsoft is a large place to work. That means there’s lots of structure and lots of intradependencies. This monolith lends itself to naturally slower development cycles and vendor contracts require locking in on agreements years in advance.

This was my first time working in industry with hardware and working on the windows core operating system. The process is extremely rewarding from an engineering perspective, as the problems that are presented take a sizable amount of time to think through and solve. 

In terms of work like balance, I found that most people, myself included, felt comfortable separating work from home life and living a life outside of work. Working from home, when necessary, is seamless and there is a lot of flexibility in scheduling and hours. 
One of the things that I didn’t like, was a high level of team autonomy. The code that I wrote was predominantly only touched by myself, and then would get later integrated into the rest of the product. 

Also, Microsoft is a huge campus, with not very much nearby in the immediate surroundings. Food on campus is good, but can become tiring and every other restaurant that would be off of the campus needs a car or public transit to get to.
Fundamentally, one of the issues that Microsoft faces is a poor level of discoverability for internal documentation. Where past internships it’s been easy to solve problems by googling, since many of the problems that I’ve been solving had not been commonly solved the approach taken had to be different, and therefore not easily found when bing-ing for answers
	
# Advice for other interns
	
Microsoft sells summer hard, but Fall is nice too. There are about 60 fall interns so you get to know most of them pretty closely (with what felt like 80% of interns hailing from the university of waterloo). I think that sticking to the summer is still the best bet, unless you want a drastically different internship over the summer

On transitioning from explorer to SWE, I think that if you really enjoyed the explorer experience you’ll enjoy the SWE experience. This sounds tautological; however, I thought that my experience would drastically change and that has not been the case.

On living in Redmond vs living in Seattle. I think it’s always more exciting to opt out of corporate housing, but that’s personal. I think that living in the city is only worth it if you plan to go out during the week/weekends. Unfortunately, to go out anywhere you need to be 21+ so when you’re under I think it makes the most sense to live in Redmond.

On working out, take care of your health and go to the gym or have some level of physical activity. You weren’t made to sit for eight hours every day so try and offset it by going to a gym that has free towels, a sauna, and a chandelier at the entrance.

