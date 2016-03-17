---
title: Building a Portfolio and Blog with Middleman and Github Pages - Part 2
subtitle: Setting up Middleman and modifying the config.rb and Gemfile
summary: Part 2 in a series of posts about getting set up with Middleman and Github Pages.
description: Part 2 in a series of posts about getting set up with Middleman and Github Pages.
category: Code
---

In the [first article](http://www.christopherjanzen.com/blog/building-a-portfolio-and-blog-with-middleman-and-github-pages/) of this series I provided the steps to get your machine ready for Ruby development; a necessary step before jumping into Middleman. This article will go over installing Middleman, choosing extensions to customize your site, and creating a configuration file to set this all up.

In my next article in this series we'll go over getting our project onto Github Pages, further customization, and templating.

If you've been following along with [this series](http://www.christopherjanzen.com/blog/building-a-portfolio-and-blog-with-middleman-and-github-pages/) you'll now have the necessary tools required to start with Middleman and Github. Unless you're fairly comfortable in a Ruby environment, or if you haven't read the first article, I recommend going back to follow the steps found there.

Before we begin I encourage you to check out the following resources:
[Middleman Docs]        (https://middlemanapp.com/basics/install/) are helpful to get a better understanding of how all the pieces fit together.
This page on "[Github Pages](https://pages.github.com)" provides some great instructions on getting your site onto the web.
Lastly, [this article on free-static sites](http://www.sitepoint.com/free-static-sites-middleman-github/) fleshes out some of the ideas presented here.

## Installing Middleman
Your first step is to install Middleman and its dependencies on your machine. Go ahead and open terminal and type this command:

<pre><code class="language-bash">
$ gem install middleman
</code></pre>

This instruction will download Middleman and everything else it needs for you to start building your site. Optionally, you can install the middleman blog at this time by typing `$ gem install middleman-blog` but I will be doing things a little differently.

Now that Middleman is installed we'll start by making a directory for our site to live in. You can either open up Finder and create a folder or, while in the command prompt, you can use the `mkdir` command to create your folder. Either way, if you plan to use Github Pages on a 'user' site, you'll want to name the folder after the url you'll be using. To find out more about 'user' pages checkout the [Github Pages](https://pages.github.com) link I referenced earlier. Also, I am assuming you've already created a Github account, which should be very straightforward.

## Starting a Project
If, for example, I want my Github repository to be christopherjanzen.github.io then that is what I will name my folder. You'll replace the "christopherjanzen" part with your own github username. Once you've created your folder you'll want to 'cd' into it through the command prompt and type:

<pre><code class="language-bash">
$ middleman init your_project_name
</code></pre>

Of course you'll want to replace 'your_project_name' with the name you'd like to give your project. Again, this means for me that my project would be called `christopherjanzen.github.io`. Optionally, if you'd like your site to primarily be a blog, you can install Middleman-Blog and add `--template=blog` to the end of the last command. This will create a different structure but will provide you with a better configuration up front. It's okay if you choose to skip this step, because I'll be explaining later how to add a blog in a sub-directory.

## Customization
Once you've initialized your new project a few files will be automatically created for you. The most important to begin with are the config.rb and gemfile files.

### Gemfile
We're going to be editing the gemfile so go ahead and open that in your preferred text editor. Here are a few extensions I recommend using:

- [middleman-blog](https://github.com/middleman/middleman-blog) (used for creating a blog with Middleman)
- [nokogiri](https://github.com/sparklemotion/nokogiri) (can be used for article summary truncation in blog)
- [redcarpet](https://github.com/vmg/redcarpet) (used to change markdown style especially if you'll be using code blocks)
- [middleman-syntax](https://github.com/middleman/middleman-syntax) (can be used to provide syntax highlighting if you'll be using code blocks)
- [middleman-autoprefixer](https://github.com/middleman/middleman-autoprefixer) (an extension that removes the need to provide vendor prefixes in your css)
- [middleman-deploy](https://github.com/middleman-contrib/middleman-deploy) (we'll use this to push our local site to our Github repository)
- [middleman-search\_engine\_sitemap](https://github.com/Aupajo/middleman-search_engine_sitemap) (helps create a sitemap that can be uploaded to search engines)

In order to get these extensions and install them you'll want to add `gem "name_of_extension"` to your gemfile. Save this and then, back at your command prompt, type `$ bundle install`. This will fetch the required extensions and any dependencies. Next we'll configure these extensions in our config file.

### Config.rb
Open the config.rb file in your text editor. Depending on how you've followed along so far you'll find a few settings already in place and a number of them are commented out. We'll be changing some of them and adding our own.

Here's my blog configuration from my config.rb file:

<pre><code class="language-ruby">
activate :blog do |blog|
    blog.prefix = 'blog'
    blog.sources = 'articles/{year}-{month}-{day}-{title}.html'
    blog.permalink = '{title}'
    blog.default_extension = '.markdown'
    blog.layout = '/blog/blog_layout'
    blog.tag_template = 'tag.html'
    blog.calendar_template = 'calendar.html'
    # Enable pagination
    blog.paginate = true
    blog.per_page = 10
    blog.page_link = 'page/{num}.html'
    blog.custom_collections = {
        category: {
            link: '/categories/{category}.html',
            template: '/category.html'
        }
    }
end
</pre></code>

Depending on where you want your blog and articles you will want to change their respective paths. My blog is located at domain.com/blog/ and my articles are kept in a subfolder called articles. Check out the docs for further information on this so you can customize it to your liking.

I won't go over every configuration setting in this post here but if you want to see my config file you can [check it out](https://github.com/christopherjanzen/christopherjanzen.github.io/blob/source/config.rb). It is important that certain configuration settings go in order, otherwise you'll end up with some issues. Most importantly make sure your blog settings come before `relative_links` and that `relative_links` comes before `directory_indexes`.

## Wrapping up
Once you've figured out your config and gemfile we'll be ready to start building our templates. To recap, what we've done so far is prepared our machine for Ruby development, installed Middleman, created a project, and modified our config.rb and Gemfile. This sets us up nicely to start working on templates (how our site is displayed) which will be covered in the next articles where I will cover how to push everything to Github, and customizing your site.

As always, if you find any issues please feel free to send me any corrections through [Github](https://github.com/christopherjanzen/christopherjanzen.github.io), [email](http://www.christopherjanzen.com#contact) or [Twitter](http://www.twitter.com/cijanzen).
