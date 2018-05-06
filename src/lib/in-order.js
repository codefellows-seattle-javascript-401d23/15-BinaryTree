'use strict';

let inOrderString = '';
const inOrderTraversal = (rootNode) => {
  if (!rootNode) {
    return undefined;
  }
  inOrderTraversal(rootNode.left);
  console.log(`Visiting a node with value ${rootNode.value}`);
  inOrderString += rootNode.value;
  inOrderTraversal(rootNode.right);
  return inOrderString;
};

export default inOrderTraversal;

