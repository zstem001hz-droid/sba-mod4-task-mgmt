# SBA Mod 4: Task Management App

Building a task manager application with HTML, CSS, and javascript

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview
For this assessment, I am building a Task Management App that allows users to add tasks with deadlines, assign categories, and update the status of each task. I am tasked with applying JavaScript concepts, including arrays, objects, DOM manipulation, and conditionals.

### Screenshots

![](./screenshot.jpg)
![](./screenshot2.jpg)
![](./screenshot3.jpg)

## My process
Began by creating my local folder structure, and creating the taskmgt.html, taskmgt.js, and styles.css files, with my starter code for an initial structure of the app/webpage. 

Once this initial structure was completed I made modifications to the body and container(s) formatting, consistently checking the visual layout after each code change. After desktop version was complete I used dev tools and found the breakpoint at 768 pixels for my 'body' media query, and then I wrote 2 additional media queries to resolve viewpoint inconsistencies. 
  - **.storage-badge** allows card and bubble elements to stack. 
  - **.storage-badge::after:** to round out the bottom-right corner of the storage bubble, and restrict the speaaker-triangle from appearing in mobile viewport. 

### Built with

- Semantic HTML5 markup
- Custom CSS
- javascript
- bootstrap's css libraries

### What I learned

1. Bootstrap impacts css styles by precidence and the bootstrap index on getbootstrap.com's website often populates unexpeceted results compared to the framework library references.
    - example: setting .bg-primary-subtle did not provide the expected background color.
    - resolution: bootstrap code had to be refined and removed in some cases, and vice versa if bootstrap contained code I found acceptable for the challence.
2. Standard CSS can be layered on top of bootstrap utilities. 
3. CSS pseudo-element
  - .storage-badge::after
5. bootstrap utilities can replace flexbox properties, and the way I started this challenge with known CSS code first, made it more difficult than it needed to be. 

## AI Collaboration
  - ChatGBT (debugging)


## Author

Zac White

## Acknowledgments
  - [getbootstrap](https://getbootstrap.com)
  - [FREEFORMATTER](https://www.freeformatter.com/html-validator.html)

 
 
## Reflections
1. I faced frustration searching and choosing the correct code to apply and would use my preferred browser or chrome search (both of which have implemented AI components - unavoidable use of AI) and chatGBT to find answers to solve those riddles.  
2. Bootstrap's precedence (incl. introductory implementation of bootstrap code simulatenaeously with early learning of cutsom CSS styles) can be confusing.
3. Finding conflicting code techniques manually is difficult, online resources for verifying code are very useful.
4. Bootstrap has limitations and presidence on the HTML file, some components, and don't work well when custom CSS style is already assigned.  