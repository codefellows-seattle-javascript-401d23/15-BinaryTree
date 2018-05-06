'use strict';

import BinaryTree from '../lib/binary-tree';
import Node from '../lib/node';
import inOrderTraversal from '../lib/in-order';

describe('in-order.js', () => {
  test('#inOrderTraversal', () => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const six = new Node(6);
    const seven = new Node(7);
    const eight = new Node(8);
    const nine = new Node(9);
    const testTree = new BinaryTree(one);
    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    const x = inOrderTraversal(testTree.root);
    expect(x).toBe('687921435');
  });
  test('#inOrderTraversal with ding', () => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node('ding');
    const four = new Node(4);
    const five = new Node(5);
    const six = new Node(6);
    const seven = new Node(7);
    const eight = new Node(8);
    const nine = new Node(9);
    const testTree2 = new BinaryTree(one);
    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    console.log(testTree2);
    let y = '';
    y = inOrderTraversal(testTree2.root);
    expect(y).toBe('6879214356879214ding5');
  });

  test('#inOrderTraversal empty to return node with undefined', () => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node();
    const four = new Node(4);
    const five = new Node(5);
    const six = new Node(6);
    const seven = new Node(7);
    const eight = new Node(8);
    const nine = new Node(9);
    const testTree2 = new BinaryTree(one);
    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    console.log(testTree2);
    let y = '';
    y = inOrderTraversal(testTree2.root);
    expect(y).toBe('6879214356879214ding56879214undefined5');
  });
});

