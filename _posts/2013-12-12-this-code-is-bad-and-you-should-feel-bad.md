---
layout: post
title: This Code is Bad and you should feel Bad
image: disapproval.png
---

Want to mark some code as bad in your code base? Somebody written some poor code and you want to point it out? Need to mark some code to be reviewed? Well this is the attribute for you!

<div class="highlight"><pre><code class="csharp"><span class="lineno"> 1</span> <span class="na">[AttributeUsage(System.AttributeTargets.All, AllowMultiple = true, Inherited = true)]</span>
<span class="lineno"> 2</span> <span class="k">public</span> <span class="k">class</span> <span class="nc">ಠ</span><span class="nc">_</span><span class="nc">ಠ</span><span class="nc">Attribute</span> <span class="p">:</span> <span class="n">Attribute</span>
<span class="lineno"> 3</span> <span class="p">{</span>
<span class="lineno"> 4</span>     <span class="k">public</span> <span class="n">ILog</span> <span class="n">Log</span> <span class="p">{</span> <span class="k">get</span><span class="p">;</span> <span class="k">set</span><span class="p">;</span> <span class="p">}</span>
<span class="lineno"> 5</span>  
<span class="lineno"> 6</span>     <span class="k">public</span> <span class="nc">ಠ</span><span class="nc">_</span><span class="nc">ಠ</span><span class="nc">Attribute</span><span class="p">()</span>
<span class="lineno"> 7</span>     <span class="p">{</span>
<span class="lineno"> 8</span>         <span class="n">Log</span><span class="p">.</span><span class="n">Info</span><span class="p">(</span><span class="s">"This code is bad and you should feel bad"</span><span class="p">);</span>
<span class="lineno"> 9</span>     <span class="p">}</span>
<span class="lineno">10</span> <span class="p">}</span>
<span class="lineno">11</span> <span class="na"> </span>
<span class="lineno">12</span> <span class="na">[ಠ_ಠ]</span>
<span class="lineno">13</span> <span class="k">public</span> <span class="k">class</span> <span class="nc">SomeClass</span>
<span class="lineno">14</span> <span class="p">{</span>
<span class="lineno">15</span>  
<span class="lineno">16</span> <span class="p">}</span>
</code></pre></div>

This code was supplied to me by a [JabbR](https://jabbr.net/) friend called Ben Hyrmn (and I'd link him on twitter if he hadn't absconded!)