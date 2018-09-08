---
path: "/project/twitterhaiku"
date: "2018-05-01"
update: "2018-09-08"
title: "Twitter Haiku"
type: "work"
projectLink: "https://eager-cray-b06120.netlify.com"
github: "https://github.com/explodingunicorn/-TwitterHaiku-server"
---

Currently I am working on a smallish side project that I am calling Twitter Haiku. Twitter Haiku pulls allows a user to search for specific Twitter users, the service pulls all of the specific user's tweets and then determines which of those are haikus. Afterwords Twitter Haiku will cache the Haiku-Tweets to allow for a faster pull of the user the next time the page is visited. Currently the backend is written in NestJS (Node + TypeScript), and the UI is being built with React.js. I just recently deployed the application, but the work is still in progress so please don't be disappointed if the haikus are erased at some point.

##Deployment

I have recently gone through the steps of setting up the deployment of my application so I can work on the application incrementally. Originally I had set up the application in the same git project with both the client and server folder living there. I attempted to deploy my application through Heroku, but even though I had routing working correctly locally, Heroku's servers were rerouting my application in a different way. This was causing trouble with the single page application portion as I am using React Router in the project.

To alleviate these problems I decided to separate the client and server into their own git projects, and host them on different machines. I stuck with heroku for the server/api portion of the application, but for the client I decided to use Netlify again. Both Heroku and Netlify have Git hooks, so now when I push to either repo my services are almost instantly notified to pull the latest repo branch and rebuild the project.
