'use strict';

import BinaryTree from '../lib/binary-tree';
import Node from '../lib/node';
import { preOrderTraversal, inOrderTraversal, postOrderTraversal } from '../lib/traversals';

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
const falseTree = 0;

one.left = two;
one.right = three;

three.left = four;
three.right = five;

two.left = six;

six.right = seven;

seven.left = eight;
seven.right = nine;

describe('Binary Tree Tests', () => {
  describe('#preOrderTraversal', () => {
    test('Should return string in pre-order sequence', () => {
      expect(preOrderTraversal(tree.root)).toEqual('126789345');
    });
    test('Should return correct typeof, "string"', () => {
      expect(typeof preOrderTraversal(tree.root)).toEqual('string');
    });
    test('Should return undefinted as there is no root node', () => {
      expect(preOrderTraversal(falseTree.root)).toEqual(undefined);
    });
  });
  describe('#inOrderTraversal', () => {
    test('Should return string in in-order sequence', () => {
      expect(inOrderTraversal(tree.root)).toEqual('687921435');
    });
    test('Should return correct typeof, "string"', () => {
      expect(typeof inOrderTraversal(tree.root)).toEqual('string');
    });
    test('Should return undefinted as there is no root node', () => {
      expect(inOrderTraversal(falseTree.root)).toEqual(undefined);
    });
  });
  describe('#postOrderTraversal', () => {
    test('Should return string in post-order sequence', () => {
      expect(postOrderTraversal(tree.root)).toEqual('897624531');
    });
    test('Should return correct typeof, "string"', () => {
      expect(typeof postOrderTraversal(tree.root)).toEqual('string');
    });
    test('Should return undefinted as there is no root node', () => {
      expect(postOrderTraversal(falseTree.root)).toEqual(undefined);
    });
  });
});
