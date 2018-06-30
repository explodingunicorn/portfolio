---
path: "/writing/welcome"
date: "2018-06-30"
title: "Welcome to the site"
type: "writing"
github: ""
---

## Hello World.

Hello whoever you are. Thanks for reading this post. I kind of just wanted something in the posts section so I can see how the whole site will look. I guess I can talk a little bit about the website itself.

I've had about a million different iterations of my website since I started web development over 3 years ago. It's gone from simple center aligned text to a fully illustrated experience to a bunch of iterations of what you see now. I think this will probably be the one I keep from now on because I just don't have as much time as I once did when I was in school.

After going through a bajillion iterations I decided for this one I would use a static site generator since they seem a bit easier to manage. I took a look at a bunch of them... Jekyll, Hugo, Etx. But then I found Gatsby. I've been using React for over a year now and it is by far my favorite framework (maybe I'll write a post about that), and when I found a Static Site Generator that took advantage of React's component system I was immediately hooked. Not only is Gatsby super simple to set up, but the hosting for it is even easier. Currently I use a service called [netlifiy](https://www.netlify.com) and I didn't think hosting could ever be this easy. I know this kind of sounds like an ad, but seriously netlify is great. It allows you to attach a github repository to your deployment and netlify will hook into your commits. Everytime you push to your master branch the site redeploys. I haven't had to setup and CI/CD pipelines, and I also don't even have to worry about SSL since netlify has integration with LetsEncrypt. Also I forgot to mention that all of those features that I have talked about so far are free. I'm not paying anything to host this site right now.

Well now that I've bored you with my free promotion of netlify I'm going to test out my inline code styler thingy. Thanks for reading and checking out the site!

```javascript
const helloWorld = 'Hello World!'

const superCoolFunction = stuff => {
  console.log(stuff)
}

superCoolFunction(helloWorld)

class evenCoolerClass {
  constructor() {
    this.coolName = 'Corey'
  }

  greet() {
    console.log(`Hey my name is ${this.coolName}`)
  }
}
```
