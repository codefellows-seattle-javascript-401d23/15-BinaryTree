#Lab 15 Binary-Trees

author: Josiah Green

version: 1.0.0

## Overview
This program implements a binary-tree datastructure that utilizes three methods for traversing the structure.

## How to use
Functions that are included are in-order, pre-order, and post-order. These functions use recursion to call on themselves and return a node value into the string of values during each step of the tree.
 
#### inOrderTraversal(rootNode)
This function traverses the tree in order of left, root, right.

example:

The inOrderTraversal function takes in a root node and traverses down to the left until a node does not exist on the left, the function then records the root value. Then, If there is a right node, it traverses down and it checks that node for a left. If there is no left it traverses back up to the previous node, returning the root and checking if it has a right to node to run the function on. 

#### preOrderTraversal(rootNode)
This function traverses the tree in order of root, left, right.

#### postOrderTraversal(rootNode)
This function traverses the tree in order of left, right, root.

## Testing

Testing can be accomplished by running the following code in the root of your repo ```npm run test```.

Start by importing all necessary modules for the test to utilize. This program utilizes ES6 import/exports, review docs for requiring in modules in any pre existing versions.

```import Node from '../lib/node';
import { preOrderTraversal, postOrderTraversal, inOrderTraversal } from '../lib/traversals';
import BinaryTree from '../lib/binary-tree';
```

Next you need to create a mock tree that the functions can traverse down, this is achieved by creating multiple new nodes and assigning them left/right values.

```let binaryTree = null;

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const eight = new Node(8);
const nine = new Node(9);

one.left = two;
one.right = three;
three.left = four;
three.right = five;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;

describe('Testing binary tree traversal', () => {
  test('#preOrder should return in order of root, left, right', () => {
    binaryTree = new BinaryTree(one);
    expect(preOrderTraversal(binaryTree.root)).toEqual('126789345');
  });
});
```

A successful test should give a ```PASS``` flag. 

