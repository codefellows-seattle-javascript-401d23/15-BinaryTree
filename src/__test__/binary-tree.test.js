'use strict';

import BinaryTree from './../lib/binary-tree';
import Node from './../lib/node';
import { preOrderTraversal, postOrderTraversal, inOrderTraversal } from './../lib/traversals';

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const eight = new Node(8);
const nine = new Node(9);
const mockTree = new BinaryTree(one);

one.left = two;
one.right = three;

three.left = four;
three.right = five;

two.left = six;

six.right = seven;

seven.left = eight;
seven.right = nine;

// console.log('Pre-Order Traversal');
preOrderTraversal(mockTree.root);

// console.log('Post-Order Traversal');
postOrderTraversal(mockTree.root);

// console.log('In-Order Traversal');
inOrderTraversal(mockTree.root);

describe('Binary Tree Methods', () => {
  test('Pre-Order Traversal', () => {
    expect(preOrderTraversal(mockTree)).toEqual('126789345undefined');
  });
  test('Pre-Order Traversal data type', () => {
    expect(typeof preOrderTraversal(mockTree)).toEqual('string');
  });
  test('Pre-Order Traversal not null', () => {
    expect(preOrderTraversal(mockTree)).not.toBe(null);
  });
  test('Post-Order Traversal', () => {
    expect(postOrderTraversal(mockTree)).toEqual('897624531undefined');
  });
  test('Post-Order Traversal data type', () => {
    expect(typeof postOrderTraversal(mockTree)).toEqual('string');
  });
  test('Post-Order Traversal not null', () => {
    expect(postOrderTraversal(mockTree)).not.toBe(null);
  });
  test('In-Order Traversal', () => {
    expect(inOrderTraversal(mockTree)).toEqual('687921435undefined');
  });
  test('In-Order Traversal data type', () => {
    expect(typeof inOrderTraversal(mockTree)).toEqual('string');
  });
  test('In-Order Traversal not null', () => {
    expect(inOrderTraversal(mockTree)).not.toBe(null);
  });
});
