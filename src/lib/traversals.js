'use strict';

let stringedPreOrder = '';
// Time - O(N) where n is the number of nodes
// Space - O(H) where h is the height of the tree
const preOrderTraversal = (rootNode) => {
  // Zachary - Root - Left - Right
  if (!rootNode) {
    return undefined;
  }
  //---------------------------------------------------------
  // Zachary - Here, I AM IN ROOT
  stringedPreOrder += `,${rootNode.value}`;
  //---------------------------------------------------------
  preOrderTraversal(rootNode.left); // rootNode.left is a sub-tree
  preOrderTraversal(rootNode.right);
  return stringedPreOrder.replace(/^,/, '');
};

// Time - O(H) where n is the number of nodes
// Space - O(H) where h is the height of the tree
const postOrderTraversal = (rootNode) => {
  // Zachary -  Left - Right -Root
  if (!rootNode) {
    return undefined;
  }
  postOrderTraversal(rootNode.left);
  postOrderTraversal(rootNode.right);
  //---------------------------------------------------------
  // This line is not going to happen until we visit ALL left and ALL right
  // Zachary - Here, I AM IN ROOT
  console.log(`Visiting a node with value ${rootNode.value}`);
  return undefined;
  //---------------------------------------------------------
};

// turn this into my in-Order.
let stringedInOrder = '';
// Time - O(N) where n is the number of nodes
// Space - O(H) where h is the height of the tree
const inOrderTraversal = (rootNode) => {
  // Zachary - Root - Left - Right
  if (!rootNode) {
    return undefined;
  }
  //---------------------------------------------------------
  // Zachary - Here, I AM IN ROOT
  inOrderTraversal(rootNode.left); // rootNode.left is a sub-tree
  stringedInOrder += `,${rootNode.value}`;
  //---------------------------------------------------------
  inOrderTraversal(rootNode.right);
  return stringedInOrder.replace(/^,/, '');
};

export { preOrderTraversal, postOrderTraversal, inOrderTraversal };
