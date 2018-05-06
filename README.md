# Documentation

## Classes available
These classes can be accessed by importing these files.

### Node
Takes in a value and creates a new Node with the specified value. The left and right values can also be passed, but will default to `null`.

    class Node {
      constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
      }
    }

### BinaryTree
Takes in a node and will set that node as the root. If no root is passed, the root will default to `null`.

    class BinaryTree {
      constructor(root = null) {
        this.root = root;
      }
    }

## Functions available

### inOrderTraversal()
This function takes in a binary tree root and an empty array and returns a string of all the values visited in the tree, in the order they were visited.

The function operates in an in-order traversal pattern.

Example:

    const one = new Node(1, new Node(2), new Node(3));
    const tree = new BinaryTree(one);
    inOrderTraversal(tree.root, []) // ==> '2,1,3'

## Installation
To install:

    npm install

## Running Tests
To run tests:

    npm test
