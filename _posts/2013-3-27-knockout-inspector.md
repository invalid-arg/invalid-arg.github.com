---
layout: post
title: Knockout Inspector
---

(I've changed the name to knockout inspector).

So I've finally got my knockout inspector in a state where it can be used. It's already helped me solve some bugs and performance problems. Maybe it will help you.

It shows the underlying view model and properties, and any updates to those values. It's great if you have observables that aren't present in the view. Observables are in black and non-observables are in grey

![knockout inspector](/img/knockout-inspector.png)

The red and green counters, next to the observables, show the number of value changes and subscribers respectively. Its useful to bear in mind that if an observable is bound to a DOM element this will add a subscriber to the count.

All the nodes in the tree are collapsable.

Its really simple to use. No need for a nuget package or external references (such as jquery). You don't even have to download any code just add this to your page:

{% highlight html linenos %}
<script src="http://invalid-arg.github.com/ko-inspector.js" data-inspect="observable: '$root', pinToTop: 'left'"></script>
{% endhighlight %}

* __observable__ is the observable you want to inspect (more often than not this will be $root).
* __pinToTop__ will fix the view to the top of the page, either left or right. if you want the content to be inline just omit this.

And thats it!

If you want to use it in the traditional fashion or this method isn't working for you, try the code below:

{% highlight html linenos=table %}
<script src="http://invalid-arg.github.com/ko-inspector.js"></script>
<div data-bind="inspect: $root, pinToTop: 'left'"></div>
{% endhighlight %}

I've also added it to rob conery's knockout cart as a demo [here](http://invalid-arg.github.com/knockout-cart/example.html) and you can download the file <a href="http://invalid-arg.github.com/ko-inspector.js" target="_blank">here</a>.