---
layout: projectPost
title: Razzle
role: NodeJS Developer
techStack: NodeJS, AWS Lambda, Alexa Skills, BlackRock API, Robinhood Private API
brief: Your personal stock portfolio assistant
start: October 2017 
end: 20 hours later
image: razzle.png
githubURL: 
siteURL:
categories: ['recent']
date: 2017-10-15 00:00:00
---

# Summary

***Awarded most creative use of BlackRock API***

Razzle is a personal financial assistant. Running on Amazon's Echo product, Razzle could be asked to provide insights into whether or not certain stocks were a good buy, what your current investing portfolio will look like in the next year, and the ability to execute trades on behalf of your Robinhood account. 

How it broke down:
- I used the BlackRock API to get past stock performance and drew a trend line to indicate whether or not a given purchase was a good idea.
- Given the asked for Stock and quantity of shares, Razzle would use Robinhood to execute a market order of the said quantity of shares.

## During this project I used

**Amazon Alexa**. I wrote an Alexa skill to take various commands (known as intents) from the end user and interface with the AWS Lambda function that was running.

The **BlackRock portfolio analysis API** located at 
`https://www.blackrock.com/tools/api-tester/hackathon/portfolio-analysis`. 
This API endpoint provides all valuable historical data. For this project, I made use of the trend over the past year and past threeMonths in order to predict growth of the stock.  
```Alexa ask Razzle should I buy Snapchat?``` 
led to a recommendation not to buy (as of October 2017).

The **Robinhood private API**. Robinhood currently has no public facing API and so all calls must be made through an undocumented API; luckily, there was an existing npm module at 
```https://github.com/aurbano/robinhood-node```. 
This API allowed buy orders to be executed on Robinhood from the AWS Lambda client. 
```Alexa ask Razzle to buy 5 shares of Microsoft```

All together, this functionality created Razzle, your personal financial assistant.
