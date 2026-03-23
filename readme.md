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

  - Screenshots: **Possibly**, to be submitted at a later date. 

## My process

Began by creating my local folder structure, and creating the taskmgt.html, taskmgt.js, and styles.css files, with my starter code for an initial structure of the app/webpage. While doing a little research on Task Manager's and to-do lists, I came across a stack overflow article that suggested the use of 'const' over 'let' for variables that do not need to change and some of the comments also suggested that using 'const' also makes the code cleaner and easier to read, so I decided to convert my DOM manipulaation variables from let to 'const' and follow that path, ultimately decided to use Const and 1-to-1 DOM Manipulations.

Browsed online resources, and tutorials for agreeable HTML format & javascript code samples. Populated working category elements mimicking features of taskInput, and changing up the CSS Style. I coded the remaining DOM Cache elements as reference points, which also made formatting the html file easier.

Got stuck on a javascript and template literals, debugged and asked for assistance moving forward from ChatGBT.

### Built with

- Semantic HTML5 markup
- Custom CSS
- javascript
  - DOM Manipulation
  - Arrays
  - Conditionals

### What I learned

  1. Task Manager variables don't need to change. Const makes it easier for other people to read the code.

  2. #.innerHTML / template literals - takes everything between the backticks and stamp it as HTML inside an element.

  3. JavaScript comments inside template literal backticks embed into the code as HTML text, so HTML comments need to be used.

  4. initial starter code conflicts with renderTasks() array.
    - removed create and display tasks, addTaskButton starter code.
    - Removed eventListener starter code.
  
  5. Don't get distracted by style when writing javascript. 

## AI Collaboration

  - ChatGBT
    - debugging
    - Assistance on template literals, CSS Style concepts, and javascript.

## Author

Zac White

## Acknowledgmentss

  - [developer.mozilla.org](https://developer.mozilla.org/en-US/)
  - [stackoverflow.com](https://stackoverflow.com/questions/41086633/in-javascript-why-should-i-usually-prefer-const-to-let)
  - [dev.to](https://dev.to/codehuntersharath/how-to-build-a-todo-list-app-using-html-css-and-javascript-4mg6)
  - [youtube.com](https://www.youtube.com/@TraversyMedia/search?query=DOM%20crash) Traversy Media
  - [FREEFORMATTER](https://www.freeformatter.com/html-validator.html)
  - [jshint.com](https://jshint.com/) 

## Reflections

    - Most of my relection informatin regarding this lab/assessment is already listed in the "What I learned" section of this readme.md file. 
    
    - Javascript is a complicated language to code to apply and being a novice to coding I had to read a considerable amount of material and get assistance from AI to explain the fundamentals, and assist me with generating code values and debugging.

    - by completing this assessment, I have come to the conclusion that this app is just the beginning of something I would like to make better, although there are a lot of task manager, to-do list apps already out there, creating this one from scratch was a good learning experience, and improved what I know about html, css, and most specifically javascript.

    - Upon completion, I believe I spent too much time on details I should have completed after getting the javascript structure to work.

    - This is a project I will continue to work on in the future.