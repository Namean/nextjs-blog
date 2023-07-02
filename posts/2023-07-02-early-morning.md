---
title: 'early-morning'
date: '2023-07-02'
now: '1688287752009'
---


Working with Next.js has been a blast! I feel like this is the first blog that is maintainable. I've had blogs that I've built in the past but nothing that I wanted to keep working on for long.

With Next its different, even though I'm still heasatant to add things, I feel good about being able to handle things breaking, because they happen gracefully and its self contained. Like an error in a post, won't make the whole server blow up, like when building in React. Also there isn't a need to build an error-handling "layer" with Error Boundaries. Which don't work in the typical sense.


I recently reconnected with Linode, by connecting my CashApp card to GooglePay, I just use the cheapest shared server option.


[Admin.google.com](https://admin.google.com)
I also was able to get back into my desmond@hotrodsoftworks.com email from Google, but I have 15 days to pay the fees or they'll turn my services off. I can't receieve mail it seems unless its from Google themselves. As I tried to get into my NameCheap account to get access to my domain names.

I completed the tutorial on Next.js and actaully deployed the app on Vervel. Which is pretty cool. Its very fast, and there are some basic monitoring services avaialble on the free tier. 

[Vercel](https://vercel.com/namean/nextjs-blog/CsPiFfnessX8USQphqu2iemnH9Jt)

Vercel can also deploy React, Svelte, and Vue.js apps as well. Next.js can be deployed to any provider that supports React.

[Linode/Akamai - Port Forwarding](https://www.linode.com/community/questions/18938/port-forwarding)

I was wanting to connect to a database, Postgres being the most popular choice in the open-source community. So I figured I'd just run a server on my linode, and forward the port, and have my Next.js app connect to it.

There shouldn't be that much difference between, sqlite3 and Postgres as far as syntax goes anyway.

[How To Install and Use PostgreSQL on Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-20-04)


I came across something new and a another developer channel on Youtube [Code With Ryan]()


The video is called [Don't Use Websockets (Until you Try This...)](https://www.youtube.com/watch?v=6QnTNKOJk5A)

Using websockets increases the code and infrastructure complexity of your app, especially as you scale horizontally. Depending on your needs, you may be able to use Server Sent Events (SSE) instead. Server Sent Events is more efficient than polling, but simple to implement on both the backend and frontend.

There are some really interesting and insightful comments. It may be useful to scrape some of these.



ThePrimeagen made a video on his channel ThePrimeTime called [Why You Should AVOID Linked Lists](https://www.youtube.com/watch?v=cvZArAipOjo)

Giving way to that some data strucutres aren't to be used every

I remember reading somewhere a comment by Linus Torvalds, bad programmers worry about the code. Good programmers worry about the data structures.

Cacheing a build is also a thing, in Gradle, and Docker. But Prime mentions that this is something that is used in Netflix's build, and that it fully builds


[Advent of Code](https://adventofcode.com/2022/day/25)