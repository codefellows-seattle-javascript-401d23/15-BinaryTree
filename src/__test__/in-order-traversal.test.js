'use strict';

import Node from '../lib/node';
import BinaryTree from '../lib/binary-tree';
import inOrderTraversal from '../lib/in-order-traversal';

describe('testing in-order-traversal.js', () => {
  test('1 - should return array with values in correct order', () => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const tree = new BinaryTree(one);
    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;
    const results = [];
    expect(inOrderTraversal(tree.root, results)).toEqual('2,1,4,3,5');
  });
  test('2 - should return array with values in correct order', () => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const tree = new BinaryTree(one);
    one.left = two;
    one.right = five;
    two.left = three;
    two.right = four;
    const results = [];
    expect(inOrderTraversal(tree.root, results)).toEqual('3,2,4,1,5');
  });
  test('3 - should return array with values in correct order', () => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const six = new Node(6);
    const seven = new Node(7);
    const eight = new Node(8);
    const nine = new Node(9);
    const ten = new Node(10);
    const tree = new BinaryTree(one);
    one.left = two;
    one.right = seven;
    two.left = three;
    two.right = six;
    three.right = five;
    three.left = four;
    seven.right = eight;
    eight.left = nine;
    eight.right = ten;
    const results = [];
    expect(inOrderTraversal(tree.root, results)).toEqual('4,3,5,2,6,1,7,9,8,10');
  });
});
