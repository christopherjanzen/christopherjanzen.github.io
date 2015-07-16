---
title: Building a Portfolio and Blog with Middleman and Github Pages
subtitle: A primer on setting up the tools needed to use Middleman
summary: A primer on setting up the tools needed to use Middleman
description: A primer on setting up the tools needed to use Middleman
category: Code
header_image: github-middleman.jpg
published: false
---

Update: Added link to article on how to use the command line
http://eddywashere.com/blog/an-intro-to-the-os-x-command-line/

Over a series of posts I hope to describe my journey through setting up this website using Middleman on Github.READMORE I found a lot of resources but many of them were outdated (mine will be soon enough as well but please contact me so I can update it if you notice anything no longer works) and vague about how to get things working. I like to think I have a good grasp on finding the resources I need to get going but there were a few rough patches that eventually led to eureka moments that I'd like to cover through these posts.

This first post is going to cover what we need before we should even begin to work with Middleman itself.

## Why choose Middleman?
After realizing that I just needed a simple (hah, thats relative) tool to allow me to build a portfolio website with a blog I began digging around for something that would be lighter than Wordpress. Wordpress is great but it can weigh you down if you don't tame it. I didn't want to have to fight a system in order to do what I wanted, plus I wanted to learn something new (and boy, did I ever).

Jekyll, another static site generator, just didn't seem to quite align with what I was looking for. Honestly I don't even remember the reasons why right now, but that's when I stumbled upon Middleman.

Middleman and Jekyll both offer pretty much the same thing: A simple static website generator with a great community and lots of extensions to help you get stuff done quicker.
The real kicker is that because we're using static html, css, and javascript we can get away with very little hosting resources. In fact, we can host our sites for free using Github Pages. 

In the next few articles I'll go over getting everything set up and hosted on Github, but for now we'll start at the beginning.

## Getting The Apps
Let's start with what you'll need before we can get anywhere at all. 
I developed my site on a Mac running OS X 10.10 but this would apply to a few older generations as well I'm sure.
First thing we need is a text editor and terminal or similar (I used [Sublime Text 3](http://www.sublimetext.com) and [iTerm](https://www.iterm2.com) respectively).
You'll be using terminal for installing a number of tools and making sure they are up to date. The text editor is for writing your code of course (One day I'll write a post on my Sublime Text 3 setup). 
At this point if you have a minimal understanding of how Terminal works you might be concerned, but I had never dealt with Terminal prior to this so as the adage goes, “If I can do it, you can do it too”. I am assuming familiarity with HTML and CSS (that won’t come up in this article). Knowledge of Ruby and Markdown would probably help (I wouldn’t know, I had zero knowledge at the time of starting) but not necessary if you're keeping things simple. 
These are actually the only apps we need to get started!

## Installing The Tools
Without prior knowledge in the area of installing things through the command line, I found it difficult to find resources that broke down the process so hopefully this helps you get started properly. 

*Note: If you have access to a Treehouse membership there's a great workshop video on getting command line tools, Homebrew, and Ruby (running through RBenv) installed on your system [here](https://teamtreehouse.com/library/installing-a-ruby-on-rails-development-environment-in-os-x)*


### Command Line Tools
First things first we are going to install Command Line Tools
[Here’s a great article](http://railsapps.github.io/xcode-command-line-tools.html) on how to do just that.
The reason we are downloading these tools is to gain access to commonly used tools like git.
The big take away from the article (ie. how to do it) is to open Terminal and type this command:

<pre><code class="language-bash">
$ xcode-select --install
</code></pre>

Note: Don’t type the $ sign. This is just an indication that you should be writing the following text into your command prompt. You should also be pressing `return` after typing each line of code.
Notice that you don’t need to install Xcode before installing the Command Line Tools. If you aren’t going to be doing development for Apple based Operating Systems then skip this cause its a large and lengthy app install.

Okay, so we should now have Command Line Tools installed. you can confirm by typing this:

```{.language-bash}
$ xcode-select -p
```

This will reveal the path to the installed location of the tools.

### Setting up Homebrew
Next up we’ll be installing something called Homebrew which is described as “Homebrew installs the stuff you need that Apple didn’t”. Essentially this is a package manager that will make it much easier to install "stuff" like rbenv (we’ll use this to install Ruby), keep that "stuff" up to date, and in an organized location so everything is easy to find.
Find out more at: [brew.sh](http://www.brew.sh) if you are interested in learning more. Otherwise copy the following into your prompt:

```{.language-bash}
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

This will install Homebrew on your system. It’s a good practice to make sure everything is up to date and working by running:

```{.language-bash}
$ brew update
$ brew doctor
```

Cool, You should now have Homebrew installed on your system. Emoticons of beer (Homebrew, get it?)...

### Installing Rbenv
Okay, so now that we’ve installed Homebrew we are going to use it to install rbenv which will then allow us to install Ruby. 
[Rbenv](https://github.com/sstephenson/rbenv) is a version manager that allows you to use different versions of Ruby for different projects. If we’re doing simple stuff like installing Middleman this won’t matter too much but it’s an easy way to get up and running. 
Rbenv is only one of many version managers available. You could also checkout RVM if you want something that some consider more robust and with a larger support community. Each version manager has its own pros and cons which won’t be discussed here, but if you are interested, [these](http://albertogrespan.com/blog/installing-ruby-the-right-way-on-os-x-using-rbenv/) are a few [articles](https://robots.thoughtbot.com/using-rbenv-to-manage-rubies-and-gems) which discuss them.
Enough background history, let’s actually do something.
To start we are going to install rbenv, ruby-build, rbenv-default-gems, rbenv-gem-rehash, and optionally rbenv-vars using this command:

```{.language-bash}
$ brew install rbenv ruby-build rbenv-default-gems rbenv-gem-rehash rbenv-vars
```

[Ruby-build](https://github.com/sstephenson/ruby-build) is a “plugin that provides an rbenv install command to compile and install different versions of Ruby on UNIX-like systems.”

[Rbenv-default-gems](https://github.com/sstephenson/rbenv-default-gems) is a plugin that “hooks into the rbenv install command to automatically install gems every time you install a new version of Ruby.”

[Rbenv-gem-rehash](https://github.com/sstephenson/rbenv-gem-rehash) is a plugin that “automatically runs rbenv rehash every time you install or uninstall a gem.” Essentially it’s a quick time saver.

[Rbenv-vars](https://github.com/sstephenson/rbenv-vars) is a “plugin for rbenv that lets you set global and project-specific environment variables before spawning Ruby processes.”
This will go ahead and install everything in one fell swoop.
Now we have to add a file so that rbenv can run when we launch Terminal. Towards the top of our install log will be a line that says:

```{.language-bash}
if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi
```

We’re going to copy that and then, at our prompt, type:

```{.language-bash}
$ echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' > ~/.profile
```

The '.profile' file is opened along with Terminal every time and initializes rbenv.
If you don’t want documentation to be installed every time you install gems (documentation takes longer to install) then you’ll also want to type:

```{.language-bash}
$ echo 'gem: --no-document' > ~/.gemrc
```

You can then type: `$ exit` and the process will be completed! this will close the Terminal window and you should now open a new one.

### Installing Ruby
We’ll finally be installing ruby. At this time the most current version is 2.2.2 but you can always check at [ruby-lang.org](http://www.ruby-lang.org) or by typing `$ rbenv install --list`.

Type:

```{.language-bash}
$ rbenv install 2.2.2
```

We’re now going to tell rbenv to use this version of Ruby by typing: 

```{.language-bash}
$ rbenv global 2.2.2
$ rbenv rehash
```

You should now be able to type: 

```{.language-bash}
$ ruby -v 
```

and see that the latest version is being used.
As mentioned in the treehouse video, a few other tools you might want to install are wget, curl, and imagemagick.
Type: 

```{.language-bash}
$ brew install wget curl imagemagick
```

We’ll also want to update to the latest version of Rubygems by typing: 

```{.language-bash}
$ gem update --system
```

### Installing Bundler
We are now going to install a Ruby gem called [Bundler](http://bundler.io) which allows us to install and manage gems that we’ll be using in our apps like Middleman.
Type: 

```{.language-bash}
$ gem install bundler
```

Lastly, we’ll install a plugin that makes for less work when we install gems. [Rbenv-bundler](https://github.com/carsomyr/rbenv-bundler) “saves you from the hassle of having to type bundle exec when working with per-project gem sets and will enable `rbenv which` to report Bundler-installed gem executables if available.”

Type: 

```{.language-bash}
$ brew install rbenv-bundler
```

Okay! We are finally done installing the tools necessary to get started with Middleman. It seems like a lot of work just to get up and running but this will make everything else go a lot smoother down the road. There are definitely other gems, plugins, etc. that can make our lives even easier but these are just a few I’ve discovered from different articles.
Please let me know if you discover any errors here and if you have an suggestions for more useful tools on Twitter [@cijanzen](https://twitter.com/cijanzen).

In the next article we’ll actually be installing Middleman and running it on a local server. Go take a break and give yourself a high-five because you just got through the worst of it (I felt like cracking open as many beers as I saw emoticons during this process)!