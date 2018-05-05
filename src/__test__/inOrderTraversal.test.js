'use strict';

import BinaryTree from '../lib/binary-tree';
import Node from '../lib/node';
import inOrderTraversal from '../lib/inOrderTraversal';

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

describe('Testing inOrderTraversal', () => {
  test('testing for successful tree', () => {
    expect(inOrderTraversal(tree.root)).toEqual('421537689');
  });
  test('testing for the type of output to be a string', () => {
    expect(typeof (inOrderTraversal(tree.root))).toEqual('string');
  });
  test('testing for a undefined Binary Tree', () => {
    tree.root = null;
    expect(inOrderTraversal(tree.root)).toEqual(undefined);
  });
});
