---
layout: projectPost
title: Useless Facts
role: Full-Stack Developer
brief: Textbot which sends random facts to a selected phone number
start: March 2015
end: 24 hours later
siteURL: http://uselessfacts.robertolsthoorn.com
githubURL: https://github.com/Rolstenhouse/useless-facts
techStack: PHP, MaterializeCSS
image: uselessFacts.png
date: 2015-03-15 00:00:00
---

# Summary

Built at hackFSU, this "bot" would send random facts to a friend or enemy at a specified phone number. At the time, the project would only send emails from your browser session, rather than forking a separate process on the backEnd. This was done in order to prevent spamming,

### During this project I Used

`PHP` to iterate over a list of Useless Facts that was stored as a variable within the program. In order to send to most text message providers within the US, I sent text messages to the specified number using the following format.

##### Email Addresses

```PHP
$emails = array($phone . '@txt.att.net',
	$phone . '@tmomail.net',
	$phone . '@vtext.com',
	$phone . '@messaging.sprintpcs.com', $phone . '@pm.sprint.com',
	$phone . '@vmobl.com',
	$phone . '@mmst5.tracfone.com',
	$phone . '@mymetropcs.com',
	$phone . '@myboostmobile.com',
	$phone . '@sms.mycricket.com',
	$phone . '@messaging.nextel.com',
	$phone . '@message.alltel.com',
	$phone . '@ptel.com',
	$phone . '@tms.suncom.com',
	$phone . '@qwestmp.com',
	$phone . '@email.uscc.net',
	);
```

The drawback to using this approach is two-fold. One, your mail-server may start to look like spam and two, each incoming text comes from a slightly different phone number. This could be seen as an advantage or disadvantage, dependent upon whether the user wanted to assign the incoming texts under a contact.

For the frontEnd, a mobile-first approach was in place by using the [MaterializeCSS](http://materializecss.com/) library.

### Status

This project is no longer functional, but could be spun up if a cause arises. I.e., simple notification system Twilio alternative during an event.

#### The Useless Facts are Below

```PHP
    <?php
    $facts = array("Saturday mail delivery in Canada was eliminated by Canada Post on February 1, 1969!","
    In Tokyo, a bicycle is faster than a car for most trips of less than 50 minutes!","
    There are 18 different animal shapes in the Animal Crackers cookie zoo!","
    Should there be a crash, Prince Charles and Prince William never travel on the same airplane as a precaution!","
    Your body is creating and killing 15 million red blood cells per second!","
    The king of hearts is the only king without a moustache on a standard playing card!","
    There are no clocks in Las Vegas gambling casinos!","
    There is one slot machine in Las Vegas for every eight inhabitants!","
    The Mona Lisa has no eyebrows. It was the fashion in Renaissance Florence to shave them off!","

    Every day 20 banks are robbed. The average take is $2, 500!","
    The most popular first name in the world is Muhammad!","
    Tablecloths were originally meant to be served as towels with which dinner guests could wipe their hands and faces after eating!","
    Tourists visiting Iceland should know that tipping at a restaurant is considered an insult!","
    One car out of every 230 made was stolen last year!","
    The names of Popeye's four nephews are Pipeye, Peepeye, Pupeye, and Poopeye!","
    Until the nineteenth century, solid blocks of tea were used as money in Siberia!","
    The Nobel Peace Prize medal depicts three naked men with their hands on each other's shoulders!","
    When glass breaks, the cracks move faster than 3, 000 miles per hour. To photograph the event, a camera must shoot at a millionth of a second!","
    A Boeing 747 airliner holds 57, 285 gallons of fuel!","
    A car uses 1.6 ounces of gas idling for one minute. Half an ounce is used to start the average automobile!","
    The Philadelphia mint produces 26 million pennies per day!","
    A lightning bolt generates temperatures five times hotter than those found at the sun's surface!","
    A violin contains about 70 separate pieces of wood!","
    It is estimated that 4 million 'junk' telephone calls, phone solicitations by persons or programmed machine are made every day in the United States!","It takes glass one million years to decompose, which means it never wears out and can be recycled an infinite amount of times!","
    Forest fires move faster uphill than downhill!","
    Almost half the newspapers in the world are published in the United States and Canada!","
    The two-foot long bird called a Kea that lives in New Zealand likes to eat the strips of rubber around car windows!","
    Most lipstick contains fish scales!","
    Skepticisms is the longest word that alternates hands when typing!","
    One ragweed plant can release as many as one billion grains of pollen!","
    It's illegal to drink beer out of a bucket while you're sitting on a curb in St. Louis!","
    The first product to have a bar code was Wrigleys gum!	 ","

    No piece of square dry paper can be folded more than 7 times in half!","
    A group of geese on the ground is a gaggle, a group of geese in the air is a skein!","
    Over 2500 left handed people a year are killed from using products made for right handed people!","
    There are more than 10 million bricks in the Empire State Building!","
    If you counted 24 hours a day, it would take 31,688 years to reach one trillion!","
    Taphephobia is the fear of being buried alive!","
    A crocodile always grows new teeth to replace the old teeth!  ","
    The sun is 330,330 times larger than the earth!","
    Clinophobia is the fear of beds!","
    A 'jiffy' is an actual unit of time for 1/100th of a second!","
    Porcupines float in water!","
    Pinocchio is Italian for 'pine eye'!","
    The sentence 'The quick brown fox jumps over a lazy dog.' uses every letter of the alphabet!","
    The average life span of a major league baseball is 5-7 pitches!","
    The Mint once considered producing doughnut-shaped coins!","
    The only 15 letter word that can be spelled without repeating a letter is 'uncopyrightable'! ","
    The longest recorded flight of a chicken is 13 seconds!","
    The sloth (a mammal) moves so slowly that green algae can grow undisturbed on its fur!","
    Cat urine glows under a black-light!","
    The world's termites outweigh the world's humans 10 to 1!","
    The electric chair was invented by a dentist!","
    Windmills always turn counter-clockwise. Except for the windmills in Ireland!","
    A hedgehog's heart beats 300 times a minute on average!
    Camels have three eyelids to protect themselves from blowing sand!","
    The placement of a donkey's eyes in its head enables it to see all four feet at all times!","
    Human teeth are almost as hard as rocks!","
    A mole can dig a tunnel 300 feet long in just one night!","
    Ancient Egyptians slept on pillows made of stone!","
    A hippo can open its mouth wide enough to fit a 4 foot tall child inside!","
    A quarter has 119 grooves on its edge, a dime has one less groove!","
    Hummingbirds can weigh less than a penny!!	 ","

    Until 1796, there was a state in the United States called Franklin. Today it's known as Tennessee!","
    The Earth weighs around 6, 600, 000, 000, 000, 000, 000, 000 tons (5, 940 billion billion metric tons)!","
    A cockroach can live several weeks with its head cut off - it dies from starvation!","
    Every time you lick a stamp, you're consuming 1/10 of a calorie!","
    The average person has over 1,460 dreams a year!  ","
    It's against the law to pawn your dentures in Las Vegas!","
    One in every 4 Americans has appeared on television!","
    The average American/Canadian will eat about 11.9 pounds of cereal per year!","
    It's against the law to burp, or sneeze in a certain church in Omaha, Nebraska!","
    you're born with 300 bones, but when you get to be an adult, you only have 206!","
    Human thigh bones are stronger than concrete!","
    Over 10, 000 birds a year die from smashing into windows!","
    The state of Florida is bigger than England!","
    There are more than one million animal species on Earth!","
    In Natoma, Kansas, it's illegal to throw knives at men wearing striped suits","
    It was once against the law to have a pet dog in a city in Iceland!  ","
    Your heart beats over 100,000 times a day!","
    Thomas Edison, lightbulb inventor, was afraid of the dark!");
        ?>
```