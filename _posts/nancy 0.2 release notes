---
layout: post
title: Nancy 2.0 Release Notes
published: false
---

Nancy 0.2 is finally here and it brings with it one important change, async support. Along with this ar 


### Bug Fixes ###
1. Lots of updates to code documentation
2. Fix JSON response default charset parameter value. It is now "utf-8" instead of "utf8"
3. Diagnostics now always uses default serializer to stop the output being blank due to case sensitivity
4. Fix to allow ":" in basic authentication passwords
5. Casting of DynamicDictionaryValue was coded to fail when casting to a
reference type. This is fixed.
6. Fixed threading related issue with RazorViewEngine. Where multiple threads could manupulat

### Features ###
1. Now allows you to override the DotLiquid Naming Conventions
2. Allow overriding of JSON deserialization length for unit testing
3. Now supports async. For documentation on this see
4. Added resolved rout to nancy context so that it can be accessed in the before module hook. 
5. Added support for 405 Method not allowed response
6. Added the ability to ignore model binding errors. This is done by setting the IgnoreError property on BindingConfig
7. Added support for _viewstart in the Razor engine
8. Improved the error message  for missing views
