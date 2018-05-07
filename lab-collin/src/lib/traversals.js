'use strict';

const traversals = module.exports = {};

traversals.touched = [];

traversals.inOrderTraversal = (rootNode) => {
  if (!rootNode) {
    return null;
  }
  traversals.inOrderTraversal(rootNode.left);
  traversals.touched.push(rootNode.value);
  traversals.inOrderTraversal(rootNode.right);
  return traversals.touched;
};

