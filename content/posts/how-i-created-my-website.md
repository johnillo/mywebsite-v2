---
title: How I created my website
description: How I built my personal website from scratch, used Ghost for blogging, and deployed them on $5 Droplet.
tags: [personal, blogging]
createdAt: 2020-03-22
updatedAt: 2020-03-22
---

I saw the need of a personal space where I could practice writing, share my thoughts, and create articles that would potentially help me in my career. So, I created a landing page, setup Ghost for my blog, and served it on a $5 Digital Ocean droplet.

### But why not just use an online publishing service or SNS?

I think that using an online publishing service would be a better option for non-technical users and for people who want to get started writing. But if you're a software engineer, why not try the pleasure of running a server of your own?

Besides, it's a learning experience. Running my server will also allow me to put anything I want in the future, such as a demo web app for my portfolio.

### Creating the landing page

I designed and built my landing page using a plain text editor, HTML, and SASS, and tested it on my local environment. I saved the source code in my Keybase and GitHub repositories.

### Provisioning the server

A [droplet](https://www.digitalocean.com/products/droplets/) is Digital Ocean's term for virtual machine (VM) or instance. I provisioned a standard $5 droplet with Ubuntu 18.04 (OS), Node.js 13 (Ghost and build tools), and Nginx (web server).

If you don't have a domain name, you can access the server via its public IPv4, which you can find on the Digital Ocean dashboard.

### Setting up the landing page

Websites are stored inside the `/var/www/` directory of the server by default. I cloned the landing page source from my GitHub repository into this directory using a [deploy key](https://developer.github.com/v3/guides/managing-deploy-keys/), then built the final website using Webpack.

### Setting up the blog

A [CMS](https://en.wikipedia.org/wiki/Content_management_system) is a practical choice for maintaining a blog.

I set up [Ghost](https://ghost.org/), an open-source publishing platform, using their `Ghost-CLI` [package](https://ghost.org/docs/install/ubuntu/#install-ghost-cli). It seems to be a popular and modern alternative to WordPress, which also has a better user interface.

It was simple; I just followed the [setup guide](https://ghost.org/docs/install/ubuntu/#server-setup) found on the product's online documentation.

### Getting a domain name

Getting a domain name is a good way to [establish and control your identity](https://lifehacker.com/why-its-worth-it-to-purchase-your-own-domain-name-5958893) online.

I previously created a .com domain but didn't maintain it and let it expire. Recently, I found out another guy with a name the same as mine took it. So, I settled with .dev. [It's also good because .dev is a TLD that only allows HTTPS connections](https://en.wikipedia.org/wiki/.dev).

I had issues linking my card with GoDaddy, which prompted me to look for another domain name vendor and stumbled upon [Hover](https://www.hover.com/). I immediately became their customer after learning they include [WHOIS privacy by default](https://help.hover.com/hc/en-us/articles/217282337-Domain-WHOIS-Privacy) (GoDaddy does not).

For enhanced security like DDoS attack mitigation, and CDN, I registered for a free [Cloudflare](https://www.cloudflare.com/) account and updated the nameservers of my domain to that of Cloudflare's.

### Completing the setup

I used the registered domain name to complete the Ghost production installation and set up the hostname configuration of the webserver. After that, I restarted Ghost and Nginx to apply the changes.

I updated the [A record](https://support.dnsimple.com/articles/a-record/) of the DNS to the IP address of my droplet.

### Enabling HTTPS

Websites will work on HTTP, but it is [necessary to secure communications and to be able to use modern web browser features](https://developers.google.com/web/fundamentals/security/encrypt-in-transit/why-https). The .dev TLD works only on HTTPS, so I must set this up for my webserver.

My best bet is by using [Let's Encrypt](https://letsencrypt.org/) - an open certificate authority (CA) providing digital certificates to enable HTTPS for free.

Obtaining a certificate from Let's Encrypt is easy, and I just followed this [Digital Ocean Community tutorial](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-18-04) to get one and set it up for Nginx. For my Ghost blog, I redid the CLI setup to configure the SSL. I restarted Ghost and Nginx to apply the update.

### Wrap up

I usually provision virtual machines for web development at work, so setting up a cloud VM is a piece of cake. But this is the first time I tried and used Let's Encrypt for a digital certificate and set up an SSL/HTTPS on Nginx. Owing to open-source communities, tutorials, tools, and services, creating a website from scratch with just a cloud VM isn't that hard, in my opinion. That is, as long as you know how to use a search engine with the right keywords.
