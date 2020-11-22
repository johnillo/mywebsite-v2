---
title: Updated my website
description: Updated by website to make it simple and easy to backup.
tags: [personal, blogging]
createdAt: 2020/11/22
updatedAt: 2020/11/22
---

When [I first made this website](/blog/how-i-created-my-website) in March 2020, it was made of two parts:

* Landing page - static HTML file with stylesheet generated from SCSS
* Blog - powered by Ghost CMS

I found this setup a bit hard to maintain because Ghost runs on a separate process that consumes resources. It also requires a database for storing data, so I needed to set up a MySQL server on the same instance. To preserve the website in case of a failure, I enabled backups for my droplet for $1/month.

<figure>
  <a href="/media/updated-my-website-01.png" target="_blank">
    <img src="/media/updated-my-website-01.png" />
  </a>
  <figcaption>You can backup your droplet for $1/month, which is done automatically once a week</figcaption>
</figure>

A dollar is a bit pricey for me, given I don't make any revenue from it. To eliminate the backup, either I do a script to automatically backup the database and transfer it to another storage (like S3 or similar), or use a different approach for the blog.

To keep it simple, I decided to convert my blog into a static site instead and merge it with the landing page. This way, I can commit my blog posts to a Github repository, which can serve as a backup at the same time. Restoring or replicating the site will be as simple as building the source files and deploy it anywhere.

### Static site development

A static web page is just a plain ol' HTML file. I can create the website in plain HTML and CSS, but it wouldn't be pleasant to work with if you have lots of pages or if you want to change the general design and layout, implement SEO, etc.

I have developed static websites before using [Jekyll](https://jekyllrb.com/). However, I wanted to try out a new and better technology for the sake of learning.

#### Nuxt.js

[Nuxt.js](https://nuxtjs.org/) is a framework that supports static site generation from Vue source codes. I was studying Vue recently, and I find easier to use than React, although I can't say yet which one is better for larger projects.

By using components, Vue allows code reuse to reduce the lines of code that I need to write and maintain. This helped me apply a consistent style and layout across the site and quickly swap elements depending on the page requirements.

As a best practice, the content and data should be separated from the implementation. Similar to Jekyll, I saved the blog posts and page contents in Markdown files in a separate directory. For other data, I put them in JSON files. To process and fetch this data, I used the plugin called [Nuxt Content](https://content.nuxtjs.org/) that acts as a Git-based headless CMS.

The framework is already configured to work with [Tailwind CSS](https://tailwindcss.com/) out of the box. It's a utility-first CSS framework that I find very useful for rapidly designing modern, consistent, and responsive web interfaces.

During development, I run a local server on port 3000 by running `npm run dev` on a terminal. It has a convenient feature called [Hot Module Replacement (HMR)](https://stackoverflow.com/questions/24581873/what-exactly-is-hot-module-replacement-in-webpack) that automatically reflects the changes on the browser without refreshing upon saving the code.

To publish my site, I build it using `npm run generate` then serve the files in the output `dist` directory.

### Continuous Deployment with Github Actions

Since I put the website's source in my [Github repository](https://github.com/johnillo/mywebsite-v2), I can harness the power of [Github Actions](https://github.com/features/actions) to create an automated build and deploy workflow. Here's my workflow:

1. Write the post in the local environment.
2. Commit and push the updates to the Github repository.
3. The Github Action is triggered and builds the static site files.
4. The Github Action then uses SCP to transfer the output files from the `dist` directory to the public directory in my droplet served by Nginx.
    - The credentials used to access the droplet is stored in Github as [encrypted secrets](https://docs.github.com/en/free-pro-team@latest/actions/reference/encrypted-secrets).

It was my first time using Github Actions, and I think that it's an essential tool every developer must know. I'll take advantage of this feature in my future projects.

### Wrap up

Ghost is a good CMS, and I honestly prefer it over WordPress for publication purposes. It allowed me to conveniently compose blog posts on any device using its web-based editor. But I find updating the theme, maintenance, and development workflow a bit troublesome, so I needed to make some optimization to save me some time and money.
