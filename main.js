'use strict';

import BinaryTree from './lib/binary-tree';
import Node from './lib/node';
import { preOrderTraversal, postOrderTraversal } from "./lib/traversals";

const one = Node(1);
const two = Node(2);
const three = Node(3);
const four = Node(4);
const five = Node(5);
const six = Node(6);
const seven = Node(7);
const eight = Node(8);
const nine = Node(9);


one.left = two;
one.right = three;

three.left = four;
three.right = five;

two.left = six;

six.right = seven;

seven.left = eight;
seven.right = nine;

console.log('preOrder');
console.log(preOrderTraversal(tree.root));
console.log('postOrder');
console.log(preOrderTraversal(tree.root));
