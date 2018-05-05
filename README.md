# - 15 - Binary Tree

## Overview: 
Implementation of an in-order traversal function for a binary tree data structure. Includes a `node` module to establish left and right values, a `binary-tree` module establishing the root property, and a `traversals` module detailing the different traversal path functions.

### Node Module
```
  export default class Node {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
```

### Binary-Tree Module
```
  export default class BinaryTree {
    constructor(root = null) {
      this.root = root;
    }
  }
```

### Traversals Module
```
  let inOrderOutput = '';
    const inOrderTraversal = (rootNode) => {
      if (!rootNode) {
        return undefined;
      }
      inOrderTraversal(rootNode.left);
      inOrderOutput += rootNode.value;
      inOrderTraversal(rootNode.right);
      return inOrderOutput;
    };
```

###Documentation:

For testing, import the methods from the modules that we have previously created and instantiate a new Binary Tree by doing the following: 

```
const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const tree = new BinaryTree(one);

one.left = two;
one.right = three;

three.left = four;
three.right = five;
```

etc.

Pass `tree.root` in as a parameter of the `inOrderTraversal` function to traverse the binary tree as expected.

