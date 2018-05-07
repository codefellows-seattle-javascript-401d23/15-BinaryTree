# Lab 15 - Binary Tree Data Structure

##Overview
- This is a lab assignment from Code Fellows 401
Javascript.  The objective was to learn about Binary Trees by building a binary tree class, node class and a traversal class with three methods; pre-order, post-order and in-order.  

##Getting Started
- In order to get started with this code please fork and clone the repo.  You will need a number of dependencies in order to run this project.  See the package.json for a list of dependencies.  This project runs in node.js and you can access it's functionality by running the index file in node.
  
##Architecture
- This project is built using Javascript ES6 with transpilation using Babel for ES6.  The main entry point of the code is the index.js.  The project also includes several developer dependencies listed in the package.json. 

###Binary Traversal Methods

####preOrderTraversal() 
- This method recursively returns the value of each node in the tree starting with the root followed by the left and then right.  If there is no tree data, the function will return an undefined.

````
const preOrderTraversal = (rootNode) => {
  if (!rootNode) {
    return preOrderString;
  }
  // pre-order is root - left - right
  // -----------------
  console.log(`Visiting a node with value ${rootNode.value}`);
  preOrderString += rootNode.value;
  // -----------------
  preOrderTraversal(rootNode.left); // rootNode.left is a is a sub-tree
  preOrderTraversal(rootNode.right);
  return preOrderString;
};
````

####postOrderTraversal()
- This method recursively returns the value of each node in the tree starting with the left nodes, followed by the right nodes and the root nodes last.  If there is no tree then the function returns undefined.

````
const postOrderTraversal = (rootNode) => {
  // post-order is left - right - root
  if (!rootNode) {
    return undefined;
  }
  postOrderTraversal(rootNode.left);
  postOrderTraversal(rootNode.right);
  // we won't visit root until we've visited all left and right nodes...remember this is recursive
  // -------------------
  // console.log(`Visiting a node with value ${rootNode.value}`);
  postOrderString += rootNode.value;
  // -------------------
  return postOrderString;
};
````


####inOrderTraversal()
- This method recursively returns the value of each node in the tree starting with the left nodes, followed by the root nodes and finally the right nodes.  If there is no tree then the function will return undefined. 
````
const inOrderTraversal = (rootNode) => {
  // in-order is left - root - right
  if (!rootNode) {
    return undefined;
  }
  inOrderTraversal(rootNode.left);
  // console.log(`Visiting a node with value ${rootNode.value}`);
  inOrderString += rootNode.value;
  inOrderTraversal(rootNode.right);
  return inOrderString;
};
````

###Testing
- The test module includes three unit tests for for traversal method including; ensuring the return value, the data type and that the function returns an output.

###Change Log
- 05-05-2018 12:00pm - Began work on project
- 05-05-2018 1:30pm - all methods working 
- 05-05-2018 9:00pm - added final tests and documentation

##Credits and Collaborations
- Thank you to Vinicio Sanchez for the demo code and David Stoll for advice on outputting the correct data type.
