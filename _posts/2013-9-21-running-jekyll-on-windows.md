---
layout: post
title: Running Jekyll on Windows
published: false
---

Static blog generators have become very popular recently and with good reason. They are simple without any of the bulk of Wordpress or Blogger and they allow you to host it using providers that don't have any ??server side language. One of the more popular generators is Jekyll. Partly because it is used by GitHub, which just so happens to be place most people host them. There is just one problem with Jekyll though. It can be a little tricky to get it working on Windows. This post will hopefully help you solve this.

_I've highlighted any gotchas in bold_

## Part One: Installing Ruby
Jekyll is a ruby application so thats your first problem. It requires you to install both Ruby and the DevKit on your machine. If you haven't already come across it I highly recommend you use [chocolatey](http://chocolatey.org/) to do this. Its a machine package manager for windows, kind of like apt for Linux. Its so good infact I rarely setup a machine with out it.

To install chocolatey either go to their website or open up Command Prompt and type:

	C:\> @powershell -NoProfile -ExecutionPolicy unrestricted -Command "iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%systemdrive%\chocolatey\bin - See more at: http://chocolatey.org/#sthash.DiILbJrZ.dpuf

Once this is done you can then go ahead and install [Ruby](http://chocolatey.org/packages/ruby) and the [DevKit](http://chocolatey.org/packages/ruby.devkit.ruby193). 

_You have to be careful at this point as Jekyll runs on version 1.9 NOT 2.0_.

So go ahead and use `cinst`:

	C:\> cinst ruby -Version 1.9.3.44800

and 

	C:\> cinst ruby.devkit.ruby193

## Part Two: Installing Python
Why Python? You need it if you want to use (pygments)[http://pygments.org/] which is the library Jekyll uses for syntax highlighting. Python 3.* can cause some problems with Jekyll so unless you planning on using it for anything else you're best sticking to 2.7. So again using `cinst`:
	
	C:\> cinst python -Version 2.7.5

Next you need to add python to your `PATH` enviroment variable:

1. Open up Control Panel and click on "System"
2. Click on "Advanced system settings"
2. Click on "Enviroment Variables..." (Why the Ellipsis?)

Then you need to add the path that you installed Python to, to the Path variable. Most likely, if you used Chocolatey, this will mean adding

;C:\python27;

_Make sure your variables are delimited by a semi-colon._

Now the next bit might catch you out. 

_Make sure to close all instances of Command Prompt (or Powershell) and reopen them so your Path variable can be reloaded._

## Part Three: Installing Jekyll
Now we are already to go-ahead and install Jekyll:

	C:\> gem install jekyll

This will install Jekyll and all its dependencies. At this point it may work for you, however for me I still had problems with the `pygments.rb` gem. At the time I wrote this it didn't work for me. At the time of writing it was at version 0.5.3.

_If at this point Jekyll still doesn't work it you may need to revert to pygments.rb version 0.5.0. To do this_

	C:\> gem uinstall pygments -v 0.5.3

	C:\> gem install pygments -v 0.5.0

## Part Four: Create your Blog
For this section I'm going to refer you to the [official site](http://jekyllrb.com/). Come back when you're done.

## Part Five: Hosting on GitHub
