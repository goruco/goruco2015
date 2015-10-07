---
title: Nathan Artz
meta: An Approach to Developing and Testing Third Party Javascript Widgets
desc: How to gain certainty, testing third party Javascript on your site
image: /assets/images/speakers/2014/nathan_artz.jpg
author: GORUCO
year: 2014
twitter: nartz
vimeo_video_id: 101020271
---

###Talk Synopsis
Google Analytics, Like Buttons, Twitter Widgets, Olark chat boxes; all examples of third party JavaScript elements that are embedded by users in their websites.

Testing third party code once embedded in a page, is often difficult and cumbersome.  Verifying those elements are working properly (or even more basically, are not breaking the page) is difficult to get right.  Clients will often not give you access to their page, or allow you to debug 'live', leaving scope for bugs to creep in.

Complicating matters further, other JavaScripts are often competing to execute on the page (sometimes erroring out), and then you have to make this all work cross-browser!

####So what is the right approach to take?

I will show you how using a Ruby script to generate and minify my JavaScript, and a Node.js proxy server to intercept responses, I am able to safely inject my JavaScript into the page.

In addition to this, I will show you ways to use Rspec/Capybara to come run regression tests that utilize the proxy, and test my JavaScript while it is **live** embedded on client pages.


###Biography
Nate is a software developer lead at Magnetic, an advertising firm in New York that focuses on Search Retargeting.

Formerly, he has worked at OMGPOP, Lehman Brothers, and his own startup Robot Recruit.

He has a dog named butters that accompanies him wherever he goes.

blog: [dewful.com](http://dewful.com/) (not updated too often)

