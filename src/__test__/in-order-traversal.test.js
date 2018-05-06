'use strict';

import Node from '../lib/node';
import BinaryTree from '../lib/binary-tree';
import inOrderTraversal from '../lib/in-order-traversal';

describe('testing in-order-traversal.js', () => {
  test('1 - should return array with values in correct order', () => {
    const three = new Node(3, new Node(4), new Node(5));
    const one = new Node(1, new Node(2), three);
    const tree = new BinaryTree(one);
    expect(inOrderTraversal(tree.root, [])).toEqual('2,1,4,3,5');
  });
  test('2 - should return array with values in correct order', () => {
    const two = new Node(2, new Node(3), new Node(4));
    const one = new Node(1, two, new Node(5));
    const tree = new BinaryTree(one);
    expect(inOrderTraversal(tree.root, [])).toEqual('3,2,4,1,5');
  });
  test('3 - should return array with values in correct order', () => {
    const three = new Node(3, new Node(4), new Node(5));
    const two = new Node(2, three, new Node(6));
    const eight = new Node(8, new Node(9), new Node(10));
    const seven = new Node(7, null, eight);
    const one = new Node(1, two, seven);
    const tree = new BinaryTree(one);
    expect(inOrderTraversal(tree.root, [])).toEqual('4,3,5,2,6,1,7,9,8,10');
  });
});
