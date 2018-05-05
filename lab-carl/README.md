# Lab 15 - Binary Trees
**Author**: Carl Olson
**Version**: 1.0.0

This lab involved writing functions to traverse binary trees and create a string of the node values.

Functions are included for In-Order, Pre-Order, and Post-Order traversals. 

These functions use recursion to look at each node and add the string value at each node in a particular order. 
As an example, the in-order traversal starts at the root and traverses down to the left until a node does not have a left. It then logs that root and traverses down to the right if there's a right. If there is a right, it checks that node for a left, starting the function again, otherwise it traverses back up to the previous node, logging that root and checking if it has a right node to run the function on. 

### Example of building a tree to test:

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
const tree = new BinaryTree(one);

one.left = two;
one.right = three;

three.left = four;
three.right = five;

two.left = six;

six.right = seven;

seven.left = eight;
```

### In-Order Traversal Function
I wrapped the actual traversal function in a stringifier function because the goal of this project was to create a string of the values at each node.
```
const inOrderTreeStringifier = (node) => {
  let stringResults = '';
  const inOrderTraversal = (rootNode) => {
  // Left - Root - Right
    if (!rootNode) return undefined;
  
    inOrderTraversal(rootNode.left);

    if (stringResults.length < 1) stringResults = rootNode.value.toString();
    else stringResults = `${stringResults},${rootNode.value}`;

    inOrderTraversal(rootNode.right);
    return stringResults;
  };

  inOrderTraversal(node);
  return stringResults;
};
```

This can then be tested by running the function:
```
inOrderTreeStringifier(tree.root);
```

For this particular example it should output: ```'6,8,7,9,2,1,4,3,5'```

To run the tests using jest, make sure to install the dependencies, and enter ```npm run test``` in the command line.
