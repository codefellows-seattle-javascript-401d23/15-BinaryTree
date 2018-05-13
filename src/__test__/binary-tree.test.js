'use strict';

import Node from '../lib/node';
import { preOrderTraversal, postOrderTraversal, inOrderTraversal } from '../lib/traversals';
import BinaryTree from '../lib/binary-tree';

let binaryTree = null;

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
  test('#postOrder should return in order of left, right, root', () => {
    const binaryTree2 = new BinaryTree(one);
    expect(postOrderTraversal(binaryTree2.root)).toEqual('897624531');
  });
  test('#inOrder should return in order of left, root, right', () => {
    const binaryTree3 = new BinaryTree(one);
    expect(inOrderTraversal(binaryTree3.root)).toEqual('687921435');
  });
});
