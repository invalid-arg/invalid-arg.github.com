---
published: false
---

A couple of posts ago I mentioned that I added [constraint routing]() to Nancy. Well now [Kristian Hellang](https://twitter.com/khellang) has taken it a step further and it now allows custom constraints. This is great as it means you add in your own allowing you better control over your routes. 

> In the proccess Kristian vastly improved my code, but we wont talk about that :D

When creating are constraint there are two options available to you. The first is `RouteSegmentConstraintBase<T>` which is a simple text identifier that will allow you to check your parameter conforms to certain criteria. The second option is `ParameterizedRouteSegmentConstraint<T>` that also allows you to pass in arguments as well. For example upper and lower limits of a value.

# Quick Example

I'm stealing this example from the Nancy samples repository. It validates a route parameter to make sure it is a valid (in the looses sense) email address. 

As with everything in Nancy its really easy to add the constraint. All you have to do is have a class inherit from `RouteSegmentConstraintBase<T>` and it will automatically get picked up and registered by TinyIOC. 

`RouteSegmentConstraintBase<T>` has two 
