Lab 15- Binary Tree Data Structure
====

**Author**: Jennifer Piper


These files create a binary tree data structure and provide functions for traversing a tree by pre-order, post-order, and in-order traversal.

**Big O**

Each traversal function is 
* Time - 0(N), where N is the number of nodes in the tree.
* Space - 0(1), because the tree is created outside the traversal function, and the traversal function does not use any significant extra space.

**Getting Started**

Import the following requirements:

```
import BinaryTree from '/lib/binary-tree';
import Node from '/lib/node';
import runTraversal from '/lib/traversals';
```

Construct a new tree by creating nodes and a tree root, then assigning left and right nodes to each node in the tree. For example:

```
  const one = new Node(1);
  const two = new Node(2);
  const three = new Node(3);
  const four = new Node(4);
  const five = new Node(5);
  const six = new Node(6);
  const seven = new Node(7);
  const eight = new Node(8);
  const nine = new Node(9);
  const treeA = new BinaryTree(one);

  one.left = two;
  one.right = three;

  three.left = four;
  three.right = five;

  two.left = six;

  six.right = seven;

  seven.left = eight;
  seven.right = nine;
  ```

The `runTraversal` function takes in a root node and the type of traversal, and returns a string containing the node values in order.
Examples:
```
runTraversal(treeA.root, 'pre-order');  // '1,2,6,7,8,9,3,4,5'
runTraversal(treeA.root, 'post-order'); // '8,9,7,6,2,4,5,3,1'
runTraversal(treeA.root, 'in-order');   // '6,8,7,9,2,1,4,3,5'
```

To run tests of this code, enter in the console:

```npm run test```