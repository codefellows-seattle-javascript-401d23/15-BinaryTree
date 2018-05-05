**Author**: Daniel Shelton
**Version**: 1.0.1

# Overview
This application creates pre, post, and in-order binary searches that print out a string of node values. 

# Architecture
The main point of entry of this application is the index.js file which transpiles the app by utilizing the babel library. This application also utilizes multiple NPM libraries and .travis.yml for its CI. The 'lib' directory contains all the helper modules such as the Node and BinaryTree class constructors. The '__test__' directory contains the testing suite.


# Paths

## Node Class
```javaScript
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
```

## BinaryTree Class
```javaScript
class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
}
```

## preOrderTraversal Method
### root - left - right
```javaScript
let preOrderStr = '';
const preOrderTraversal = (rootNode) => {
  if (!rootNode) {
    return undefined;
  }
  preOrderStr += `,${rootNode.value}`;
  preOrderTraversal(rootNode.left);
  preOrderTraversal(rootNode.right);
  return preOrderStr.replace(/^,/, '');
};
```

## postOrderTraversal Method
### left - right - root
```javaScript
let postOrderStr = '';
const postOrderTraversal = (rootNode) => {
    if (!rootNode) {
      return undefined;
    }
    postOrderTraversal(rootNode.left);
    postOrderTraversal(rootNode.right);
    postOrderStr += `,${rootNode.value}`;
    return postOrderStr.replace(/^,/, '');
};
```

## inOrderTraversal Method
### left - root - right
```javaScript
let inOrderStr = '';
const inOrderTraversal = (rootNode) => {
    if (!rootNode) {
      return undefined;
    }
    inOrderTraversal(rootNode.left);
    inOrderStr += `,${rootNode.value}`;
    inOrderTraversal(rootNode.right);
    return inOrderStr.replace(/^,/, '');
};
```

# Testing
To test the 3 binary tree traversal methods, enter the following in the CLI:

`npm run test`
# Change Log

05-04-2018 7:03pm - Node and BinaryTree classes created, 3 binary-search methods implemented, testing suite complete (100% coverage).