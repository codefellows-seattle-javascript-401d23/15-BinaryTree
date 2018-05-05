'use strict';

let str = '';

const inOrderTraversal = (rootNode) => {
  if (!rootNode) {
    return undefined;
  }
  inOrderTraversal(rootNode.left);
  console.log(`visting a node with value ${rootNode.value}`);
  str += rootNode.value;
  inOrderTraversal(rootNode.right);
  return str;
};

export { inOrderTraversal };
