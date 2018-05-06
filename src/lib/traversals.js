'use strict';

// Time O(N), where N is number of nodes in the tree
// Space O(1)
const preOrderTraversal = (rootNode, treeValues) => {
  if (!rootNode) {
    return undefined;
  }
  treeValues.push(rootNode.value);
  preOrderTraversal(rootNode.left, treeValues);
  preOrderTraversal(rootNode.right, treeValues);
  return undefined;
};

// Time O(N), where N is number of nodes in the tree
// Space O(1)
const postOrderTraversal = (rootNode, treeValues) => {
  if (!rootNode) {
    return undefined;
  }
  postOrderTraversal(rootNode.left, treeValues);
  postOrderTraversal(rootNode.right, treeValues);
  treeValues.push(rootNode.value);
  return undefined;
};

// Time O(N), where N is number of nodes in the tree
// Space O(1)
const inOrderTraversal = (rootNode, treeValues) => {
  if (!rootNode) {
    return undefined;
  }
  inOrderTraversal(rootNode.left, treeValues);
  treeValues.push(rootNode.value);
  inOrderTraversal(rootNode.right, treeValues);

  return undefined;
};

// Time O(N),
// Space O(N), where N is number of nodes in the tree
const runTraversal = (rootNode, traversalType) => {
  let values = [];
  if (traversalType === 'pre-order') {
    preOrderTraversal(rootNode, values);
  } else if (traversalType === 'post-order') {
    postOrderTraversal(rootNode, values);
  } else {
    inOrderTraversal(rootNode, values);
  }
  values = values.toString();
  return values;
};

export default runTraversal;
