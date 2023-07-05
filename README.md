<style>
    
    h1 {
        text-align: center;
    }

    p {
        font-size: 180%;
    }

    h3 {
        
    }
</style>

<h1>Hello World</h1>
# README.md

<h3>Collecting Documentation</h3>
<p>
I think it would be useful to have links to all the top level libraries in my code, so whatever is in my package.json. I know some of the things that I've installed have not shown up in there. links to where I've collected such information, that has worked for me.
</p>



css modules in Next.js

There has been a little bit of friction for me working in Next.js due to working with the css module system, just on being unfamilar I think its a great idea. I'm going to write some scripts that are able to  create modules for me.

If we take a look at /components/layout and /components/layout.module.css

There's a lot going on in the layout component.

Its importing some components from next.

There is some React pattern that I don't understand in here as well

```js

{home ? (
          <>
            <Image
              priority
              src="/images/namean.jpeg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}


```

Its a ternary, that is making a decision on if this home value it true or not.


This is a starter template for [Learn Next.js](https://nextjs.org/learn).





### Useful Links
[date-fns interactive format builder](https://date-fns-interactive.netlify.app/)

This actually an app that is utilizing the date-fns library, and its also part documentation which is really helpful.


[How To Handle Command-line Arguments in Node.js Scripts](https://www.digitalocean.com/community/tutorials/nodejs-command-line-arguments-node-scripts)


[process.chdir() Method in Node.js](https://www.tutorialspoint.com/process-chdir-method-in-node-js)

[Node.js v20.3.1 documentation](https://nodejs.org/api/fs.html#fswritefilesyncfile-data-options)