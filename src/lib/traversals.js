'use strict';

let preOrderOutput = '';
let inOrderOutput = '';
let postOrderOutput = '';

const preOrderTraversal = (rootNode) => {
  if (!rootNode) {
    return undefined;
  }
  preOrderOutput += rootNode.value;
  preOrderTraversal(rootNode.left);
  preOrderTraversal(rootNode.right);
  return preOrderOutput;
};

const inOrderTraversal = (rootNode) => {
  if (!rootNode) {
    return undefined;
  }
  inOrderTraversal(rootNode.left);
  inOrderOutput += rootNode.value;
  inOrderTraversal(rootNode.right);
  return inOrderOutput;
};

const postOrderTraversal = (rootNode) => {
  if (!rootNode) {
    return undefined;
  }
  postOrderTraversal(rootNode.left);
  postOrderTraversal(rootNode.right);
  postOrderOutput += rootNode.value;
  return postOrderOutput;
};

export { preOrderTraversal, inOrderTraversal, postOrderTraversal };
