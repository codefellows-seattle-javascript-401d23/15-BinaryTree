# LAB15 BINARY TREE

**Author**: Joshua Fredrickson

**Version**: 1.0.0 

## Overview
Lab 15 is a rudimentary JavaScript Binary Tree application.  This application allows the user to 
input a binary tree's nodes with values and set-up the binary trees structure of left and right 
child nodes.  Then upon 

## Getting Started
To use the Lab 15 application, [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) 
(Node Package manager) will need to be locally installed.  Once the previously mentioned software
 has been install, the user will install the Lab 15 files. Priorto starting the Lab 13 application, from the command line
 while you are in the Lab13 file folder, enter the command `npm i`.  This will download all needed 
 dependencies for the application to perform.  To modify and customize a binary tree, the user 
 will have to follow the instructions within the main.js file to modify it.  From within the Lab 15 
 file folder in the Command Line, the user will run the following command to run the application.
 `node index.js`
 To run the premade test suite for this application, a use would have to run the following command
  line from with in the Lab 15 file folder.
  `npm run test`

## Architecture
This application uses a modular architecture and was deployed with the following technologies.
Node.js, npm, dotenv, express, faker, mongoose, winston, babel, superagent, 
http-errors, jest, eslint, JavaScript.

The core functionality of this application is within the following code block.

`const inOrderTraversal = (rootNode) => {
  if (!rootNode) {
    return undefined;
  }
  inOrderTraversal(rootNode.left);
  str += rootNode.value;
  inOrderTraversal(rootNode.right);
  // console.log(str)  
  return str;`
  __

#### Big O
time - Big O of inOrderTraversal is O(n) where n is the # of NODES.

space -  Big O of O(H) where H is the height of the Binary Tree.

## Change Log 
05-04-2018  1:46pm  first commit, scaffolding tests not passing
05-04-2018  4:22pm  updated files with my code from the lecture
05-04-2018  6:45pm  Refactored some lecture code that had errors
05-04-2018  8:45pm  Passing 2 out of 3 tests
05-04-2018  11:45pm Passing 3 out of 3 tests
05-05-2018  12:00am updated README.md


## Credits and Collaborations
Special thanks to all of the Code Fellows staff and fellow 401-d23 students.