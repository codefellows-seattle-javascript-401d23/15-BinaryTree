'use strict';

import BinaryTree from './lib/binary-tree';
import Node from './lib/node';
// import { preOrderTraversal, postOrderTraversal } from './lib/traversals';
import inOrderTraversal from './lib/inOrderTraversal';

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const eight = new Node(8);
const nine = new Node(9);
const tree = new BinaryTree(one);

// this is the order of my tree
one.left = two;
one.right = three;

two.left = four;

three.left = five;
three.right = six;

six.left = seven;
six.right = eight;

eight.right = nine;

// console.log('Pre-Order');
// preOrderTraversal(tree.root);
//
// console.log('Post-Order');
// postOrderTraversal(tree.root);

// console.log('in-Order');
inOrderTraversal(tree.root);
