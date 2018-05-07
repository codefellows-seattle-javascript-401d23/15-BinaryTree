'use strict';

import BinaryTree from '../lib/binary-tree';
import Node from '../lib/node';
import traversals from '../lib/traversals';

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

one.left = two;
one.right = three;

three.left = four;
three.right = five;

two.left = six;

six.left = seven;
six.right = eight;

seven.left = nine;


describe('in order traversal', () => {
  test('#inOrderTraversal', () => {
    expect(traversals.inOrderTraversal(tree.root)).toEqual([9, 7, 6, 8, 2, 1, 4, 3, 5]);
    traversals.touched = [];
    expect(traversals.inOrderTraversal(six)).toEqual([9, 7, 6, 8]);
    traversals.touched = [];
    expect(traversals.inOrderTraversal(three)).toEqual([4, 3, 5]);
  });
});

