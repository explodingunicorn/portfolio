---
path: '/project/cosmos'
date: '2021-12-01'
title: 'Cosmos Design System'
type: 'work'
projectLink: 'https://design.pega.com'
---

Currently I am a software engineer for Pegasystems where I have been working on their upcoming design system Cosmos. Cosmos is a React based component library that not only provides users with potentially any component they could need for their app, but also allows them to theme those components to match whatever design they may need.

## Design philosophies

As noted above, all of Cosmos's components were designed/developed from the ground up with the custom theming in mind. In order to make this possible we have heavily embraced [styled components](https://styled-components.com/). Styled components has allowed us to easily create a modifiable theme that all of the components abide by. When this theme is changed, so are your components. For instance you can change the base color of the theme, and all components making use of that base color will be changed. Not only can you change the theme globally, you can also change the theme in specific parts of your app using our themeing components. These themeing capabilities makes Cosmos extremely flexible, and hopefully adapatable for most users purposes.

## Packages

Cosmos not only comes with all of the core components that you would expect from a design system, it also comes with more specialized, or "composed" components. These components are separated into different packages that can be installed via NPM. These specialized components are used by our internal teams at Pega to create our applications, but they could also be used by any of our customers who are looking to create their own front ends using Pega's APIs rather than the full Pega application.

## Personal win

One of the components I have been most proud of working on has been the [Rich Text Editor](https://design.pega.com/components/rich-text-editor/). This editor is a big feature for a lot of Pega applications, and the inner workings of this component include a lot of features from parsing markdown to outputting valid HTML from rich text content. This editor is still a work in progress, so bugs are to be expected, but I am very excited for customers to use this new version of the Rich Text Editor.
