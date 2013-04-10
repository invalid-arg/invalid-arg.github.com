---
layout: post
title: 403 Error and .NET Bundling
---

Came across this one the other day whilst using the .NET bundling functionality. All was fine in debug mode but as soon as I pushed it to production everything went pear shaped. The combined file kept returning a 403 error. 

After a bit of prodding around it turned out the problem was due to me naming my bundle the same as the directory I kept my files in. So this:

{% highlight csharp linenos %}
var bundle = new Bundle("~/Scripts");
bundle.AddFile("~/Scripts/jquery-1.6.2.js");
bundle.AddFile("~/Scripts/jquery-ui-1.8.11.js");
bundle.AddFile("~/Scripts/modernizr-2.0.6-development-only.js");
BundleTable.Bundles.Add(bundle); 
{% endhighlight %}

won't work. However this:

{% highlight csharp linenos %}
var bundle = new Bundle("~/MyScripts");
bundle.AddFile("~/Scripts/jquery-1.6.2.js");
bundle.AddFile("~/Scripts/jquery-ui-1.8.11.js");
bundle.AddFile("~/Scripts/modernizr-2.0.6-development-only.js");
BundleTable.Bundles.Add(bundle);
{% endhighlight %}

will. Not the most useful error message but problem solved none the less.
