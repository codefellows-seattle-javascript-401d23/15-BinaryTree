'use strict';

import Node from '../lib/node';
import BinaryTree from '../lib/binary-tree';
import { inOrderTreeStringifier, preOrderTreeStringifier, postOrderTreeStringifier } from '../lib/traversal';

describe('Testing InOrder, PreOrder, and PostOrder Binary Tree Traversals', () => {
  test('traversal function should return expected order of node values in a string', () => {
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

    six.right = seven;

    seven.left = eight;
    seven.right = nine;
    
    expect(inOrderTreeStringifier(tree.root)).toEqual('6,8,7,9,2,1,4,3,5');
    expect(preOrderTreeStringifier(tree.root)).toEqual('1,2,6,7,8,9,3,4,5');
    expect(postOrderTreeStringifier(tree.root)).toEqual('8,9,7,6,2,4,5,3,1');
  });

  test('shorter tree should return expected order', () => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const tree = new BinaryTree(one);

    one.left = two;
    one.right = three;

    two.left = four;
    two.right = five;

    expect(inOrderTreeStringifier(tree.root)).toEqual('4,2,5,1,3');
    expect(preOrderTreeStringifier(tree.root)).toEqual('1,2,4,5,3');
    expect(postOrderTreeStringifier(tree.root)).toEqual('4,5,2,3,1');
  });

  test('left sided tree', () => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const tree = new BinaryTree(one);

    one.left = two;
    two.left = three;
    three.left = four;
    four.left = five;

    expect(inOrderTreeStringifier(tree.root)).toEqual('5,4,3,2,1');
    expect(preOrderTreeStringifier(tree.root)).toEqual('1,2,3,4,5');
    expect(postOrderTreeStringifier(tree.root)).toEqual('5,4,3,2,1');
  });

  test('right sided tree', () => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const tree = new BinaryTree(one);

    one.right = two;
    two.right = three;
    three.right = four;
    four.right = five;

    expect(inOrderTreeStringifier(tree.root)).toEqual('1,2,3,4,5');
    expect(preOrderTreeStringifier(tree.root)).toEqual('1,2,3,4,5');
    expect(postOrderTreeStringifier(tree.root)).toEqual('5,4,3,2,1');
  });
});

