---
title: Building a Portfolio and Blog with Middleman and Github Pages - Part 3
subtitle: Setting up Github and deploying our site
summary: Part 3 in a series of posts about getting set up with Middleman and Github Pages.
description: Part 3 in a series of posts about getting set up with Middleman and Github Pages.
category: Code
published: false
---

## Quick recap:
In the [first article](http://www.christopherjanzen.com/blog/building-a-portfolio-and-blog-with-middleman-and-github-pages/) of this series I covered the steps necessary to start development with Ruby. The second article discussed initial setup of Middleman including extensions and the configuration file. We should now have a working local website. If you are in your middleman directory you can run `middleman s` to start the middleman server and `⌃c` to stop it. If you visit [http://localhost:4567/](http://localhost:4567/) the site should load at your home page. If this is not the case for you then you should go through parts one and two again and double check the [Middleman docs](https://middlemanapp.com/basics/install/) to make sure you didn't miss anything. This article will discuss setting up Git and pushing your project to Github so that you can start tracking changes and make your site live.

## Setting up Git
At this point we're ready to start tracking our changes using Git. If you're planning to host your site on Github it's important that we set things up correctly so that we can push our working directory and have *Middleman Deploy* actually build our site and put it in the right place for our site to show up. At the time, I wasn't familiar with Git and how it works. I still find it baffling but I do know it's saved my butt a few times when I accidentally ran the wrong command and overwrote a bunch of work. Here are some resources I recommend if you're new to Git:

[Git for Humans](https://abookapart.com/products/git-for-humans) gives a good overview of Git and presents some best practices.

[Learn Version Control with Git](https://www.git-tower.com/learn/git/ebook/command-line/basics/what-is-version-control) goes more in-depth while still taking you through the basics.

[Pro Git](http://git-scm.com/book/). Straight from the horses mouth, this book also takes you from 0 to pro. Also be sure to checkout the documentation throughout the rest of the site.

Our first step is to initialize Git in our project folder and make our first *commit*.

<pre><code class="language-bash">
$ git init
$ git checkout -b source
$ git add .
$ git commit -m'initial commit'
</code></pre>

There's lots going on here but we are simply starting a new Git project within our Middleman directory, creating a new branch to work on called 'source', adding everything to Git, and then committing it.

If you're using any other build tools you may also want to consider creating a '.gitignore' file and adding any directories or files that shouldn't be tracked by Git.

One important side step is to create a *.nojekyll* file. This will tell Github not to treat our site like a Jekyll static site. You can do this however you'd like but since we're probably in Terminal you can type: `$ touch .nojekyll`

## Setting up Github
We now need to go to our Github account and setup a new repository. It's really important that we use this format: `username.github.io`. It should, if directions were followed, be the same name as our folder for our Middleman project. So my repository name is `christopherjanzen.github.io`.

## Putting it all together
So, we've started Git on our end and created a repository on Github, now it's time to make them talk.

First we setup our Github repository as the remote:

<pre><code class="language-bash">
$ git remote add git@github.com:username/username.github.io.git
</code></pre>

Replace *username* with your Github username in the above command and then run this command to push our work up to Github:

<pre><code class="language-bash">
$ git push -u origin source
</code></pre>

## Deploying to Github User Page
If you haven't already installed Middleman Deploy now is the time to do so. In your Gemfile add this line:

<pre><code class="language-ruby">
gem 'middleman-deploy', '~> 1.0'
</code></pre>

Back in your terminal run the `$ bundle install` command. Middleman Deploy should now be installed and we can configure it in our config.rb by adding these lines:

<pre><code class="language-ruby">
# Middleman Deploy
activate :deploy do |deploy|
  deploy.method = :git
  deploy.branch = 'master'
  deploy.build_before = true
end
</code></pre>

Okay! If everything went well we should be ready to deploy our site. In your terminal run `$ middleman deploy`. You may be prompted for Github credentials but your site should be ready in a moment. Go ahead and visit *username*.github.io and be sure to replace *username* with your own.

## Wrap up
As always, if you find any issues please feel free to send me any corrections through [Github](https://github.com/christopherjanzen/christopherjanzen.github.io), [email](http://www.christopherjanzen.com#contact) or [Twitter](http://www.twitter.com/cijanzen).
