'use strict';

let stringedPreOrder = '';

const preOrderTraversal = (rootNode) => {
  // Zachary - Root - Left - Right
  if (!rootNode) {
    return undefined;
  }
  stringedPreOrder += rootNode.value;
  //---------------------------------------------------------
  preOrderTraversal(rootNode.left); // rootNode.left is a sub-tree
  preOrderTraversal(rootNode.right);
  return stringedPreOrder;
};
let stringedPostOrderTraversal = '';

const postOrderTraversal = (rootNode) => {
  if (!rootNode) {
    return undefined;
  }
  postOrderTraversal(rootNode.left);
  postOrderTraversal(rootNode.right);
  //---------------------------------------------------------
  // This line is not going to happen until we visit ALL left and ALL right
  // Zachary - Here, I AM IN ROOT
  stringedPostOrderTraversal += rootNode.value;
  return stringedPostOrderTraversal;
  //---------------------------------------------------------
};

// turn this into my in-Order.
let stringedInOrder = '';
const inOrderTraversal = (rootNode) => {
  if (!rootNode) {
    return undefined;
  }
  inOrderTraversal(rootNode.left); // rootNode.left is a sub-tree
  stringedInOrder += rootNode.value;
  //---------------------------------------------------------
  inOrderTraversal(rootNode.right);
  return stringedInOrder;
};

export { preOrderTraversal, postOrderTraversal, inOrderTraversal };
