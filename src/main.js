'use strict';

import BinaryTree from './lib/binary-tree';
import Node from './lib/node';
import { inOrderTraversal } from "./lib/traversals";

const one = Node(1);
const two = Node(2);
const three = Node(3);
const four = Node(4);
const five = Node(5);
const six = Node(6);
const seven = Node(7);
const eight = Node(8);
const nine = Node(9);
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



console.log('in Order');
console.log(inOrderTraversal(tree.root));

