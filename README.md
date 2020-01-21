# Hogo Avocats Readme

This website is a showcase website for a legal firm. It is a static site generated using [Jekyll](https://jekyllrb.com/). 
It is hosted on [Netlify](https://www.netlify.com/) and uses [Forestry](https://forestry.io/) as a CMS.
The contact form uses [Getform](https://getform.io/).

## How to run this website locally

The website is build using [Jekyll](https://jekyllrb.com/), a static site generator. Jekyll requires a full ruby development environment. 
How to install a Ruby development environment and the Jekyll gem : [https://jekyllrb.com/docs/installation/](https://jekyllrb.com/docs/installation/).

To launch the website locally, run first
```bundle``` 
to install the gems.

The website is generated and served using the command 
```jekyll serve```
and is available on http://localhost:4000

## Code style 

The CSS uses the [BEM pattern](https://css-tricks.com/bem-101/).

## Hosting 

This website is hosted on [Netlify](https://www.netlify.com/), a continuous deployment and hosting platform. 
*Code merged on master is automatically deployed.*

It uses Netlify [free plan](https://www.netlify.com/pricing/).

## Content Management System

A CMS, accessible to the website's editors is in place, using [Forestry](https://forestry.io/).

Foresty is an interface that allows to commit code directly on Github.

Two types of contents can be edited, deleted and created on Forestry: blog posts and infographics.

## Contact Form

The contact form uses [Getform](https://getform.io/), that takes care of the form backend end. It uses Getform [free plan](https://getform.io/pricing),
which is limited to 100 submissions per month.
