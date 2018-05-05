'use strict';

import BinaryTree from '/../lib/binary-tree';
import Node from '/../lib/node';
import { preOrderTraversal, postOrderTraversal, inOrderTraversal } from '/../lib/traversals';

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


describe('Testing Tree Mock', () => {
    test('nodes', () => {
      expect(one).toEqual(1);
    })
})