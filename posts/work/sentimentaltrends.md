---
path: '/project/sentimental'
date: '2021-05-01'
title: 'Sentimental Trends'
type: 'work'
projectLink: 'https://sentimental-trends.xyz'
github: 'https://github.com/explodingunicorn/emotionally-trending'
---

The past year or so I've been working on a small side project that I call "Sentimental Trends". The website uses the Twitter API to pull the most recent trending tags as well as bunch of tweets made with that tag included. Once that data is collected a simple sentimental analysis library is used to get an average sentiment value for every trend.

## Sentimental Analysis

If you're not familiar with sentiment data, it's fairly simple. Every word in English is assigned a sentiment value from -5 to 5, if the value is negative that means that word has a perceived negative sentiment, and vice versa. The average sentiment for each trend is calculated by getting the average sentiment for each tweet, and then averaging those averages. While this method isn't perfect (sometimes trends can be negative themselves), it gets the job done for the most part.

## Visualization

This sentiment tracking has afforded me with a bunch of interesting data to work with, so I've created a few interesting visuals for the site. I tried to really compare the sentiment score with how people truly felt about the trends in order to see if the sentiment value is actually representative of what people think, as well as how much of an effect the sentiment has on the trends popularity.

## Deployment

Deployment for this project was fairly straight forward. I am using a hobby heroku set up to deploy the site. I also have an asynchronous job set up on the same project that pulls the twitter data every 10 minutes or so. This makes sure that the sites data is always up to date without going over my API accounts limits.
