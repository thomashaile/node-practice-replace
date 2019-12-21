# Node Practice: Replace

A smaller and simpler project than the last two, _almost_ a break! This is one of a few simpler projects for you to get some practice working on basic node apps from start to finish.

### Index

* [Learning Objectives](#learning-objectives)
* [Getting Started](#getting-started)
  * [Running the API](#running-the-api)
  * [Running the Frontend](#running-the-frontend)
* [Your Task](#your-task)
  * [pass the tests](#pass-the-tests)
  * [write the CLI](#write-the-cli)
  * [write the routes](#write-the-routes)
* [Helpful Links](#helpful-links)
* [Contributors](#contributors)

---

## Learning Objectives


### Programming Skills
* Debugging Node apps in VSC
* Using `npm`: installing dependencies, running scripts
* Understanding what "fullstack" means
* Using branches
* Running the Frontend & Backend separately


### Node.js & Express Skills
* Reading and writing from the File System
* Correctly using Sync & Async file system manipulations
* Writing Express routes with different verbs and URL parameters
* Using Async/Await to write more readable code


### Other People's Code
* Navigating larger directory structures
* Understanding code you didn't write
* Setting up and running other people's projects
* Contributing to existing code bases



### API's
* Explaining why you can't run an API with the browser
* Running API's with Node.js & VSC
* Testing API's with Postman
* Understanding the need for CORS
* URL Request Parameters
* Sending values in the Request Body


[TOP](#do-it-yourself-wiki)

---

## Getting Started

Before you can get started writing your routes you'll want to make sure all dependencies are installed, and to make sure the frontend and backends are operational.

Step 0 is to clone this repo.  Then you can move on to ...

### Running the API


#### Installing Dependencies

1. `npm install`

#### Running the API

* `npm run dev`
* Studying in Postman:
  1. go to `localhost:xxxx/docs` for API documentation
  1. explore!
* Studying in the Browser:
  1. go to `localhost:xxx/` for the simple frontend & docs
  1. open your console to study the API's responses
  1. explore!

#### Running the Tests

* `npm run test` or `node test`


[TOP](#do-it-yourself-wiki)

---

## Your Task

### Pass the Tests

In `./logic/index.js` write the function described by the tests in `./test`.

The file `./logic/sandbox.js` is there for you to experiment and debug your function. It's best practice for the `index.js` file to contain nothing but the function.

### Write the CLI

In the file `./cli.js` write a script that allows a user to use your logic function from the command line.  There is are more detailed instructions in the file itself.

### Write the Routes

Write the routes described in `./server.js`.  When your API works, a user can

* get a list of of all files in `./files`
* add a new file to the directory
* use your logic function to update the files in `./files`
* get the latest test report


[TOP](#do-it-yourself-wiki)

---

## Helpful Links



__Debugging JS Servers In VSC__

* [VSC Debugger (from the docs)](https://code.visualstudio.com/docs/editor/debugging)
* [Debugging Node apps (from the docs)](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)
* [Express in VSC (video)](https://www.youtube.com/watch?v=2oFKNL7vYV8)
* [Express in VSC (another video)](https://www.youtube.com/watch?v=yFtU6_UaOtA)

__Node.js Tutorials__

These tutorials will introduce you to a bunch of new features in Node that you haven't seen in the Browser.  While you're following these tutorials, it's important to remember that at it's core Node.js is still JavaScript.  Everything you've learned so far (except for the DOM & `fetch` :) is still true!  The Event Loop, Classes, Closure, Arrays, Objects, Variables, `this.`, it's all still the same.


The tutorials below will introduce to what's new and what's special about Node.  But don't forget to take some time and solve a few of the JavaScript Exercises above to get used to working with plain, vanilla JS in the terminal.

* [Traversy: Node for Absolute Beginners](https://www.youtube.com/watch?v=U8XF6AFGqlc)
* [Traversy: Node.js Crash Course](https://www.youtube.com/watch?v=fBNz5xF-Kx4)
* [Mosh: Node.js in 1 Hour](https://www.youtube.com/watch?v=TlB_eWDSMt4)



__fs: Synchronous & Async__
* [__promises__: FunFunFunction](https://www.youtube.com/watch?v=2d7s3spWAzo&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84)
* [__async/await__: FunFunFunction](https://www.youtube.com/watch?v=568g8hxJJp4)
* [__fs__: TechSith video](https://www.youtube.com/watch?v=a6dRdtOy4Bg)
* [__fs__: Net Ninja video](https://www.youtube.com/watch?v=U57kU311-nE)
* [__fs, async vs. sync__: Eduonix](https://www.youtube.com/watch?v=vctMo1fDwV4)
* [__fs, async vs. sync__: Kharbanda](https://www.youtube.com/watch?v=dgdcXGxh93s)


__API's and Express__

Node.js is a JavaScript runtime environment capable of writing Web Servers and API's all by itself.  But it's a bit annoying.  Express is a great and easy to use framework to help you write API's and Web Servers by handling all of the boring stuff for you so you can focus on what your app does.

> [Postman](https://duckduckgo.com/?q=postman+tutorials&t=brave&iax=videos&ia=videos) - an app for testing your API's without using a browser.

> [JSON Server](https://github.com/typicode/json-server) - An NPM module that starts a RESTful API without you having to write a single line of code.  This can be helpful practice for getting the hang of API's and Postman without getting tripped up by bugs and errors in code you write.


* [FCC: Node.js & Express](https://www.youtube.com/watch?v=G8uL0lFFoN0)


[TOP](#do-it-yourself-wiki)

---

## Contributors


[TOP](#do-it-yourself-wiki)

___
___
### <a href="https://hackyourfuture.be" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/63941625-4c7c3d00-ca6c-11e9-9a76-8d5e3632fe70.jpg" width="100" height="100"></a>
