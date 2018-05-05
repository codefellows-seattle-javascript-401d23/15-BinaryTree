'use strict';

let stringNode = '';

const inOrderTraversal = (rootNode) => {
  if (!rootNode) {
    return undefined;
  }
  inOrderTraversal(rootNode.left);
  stringNode += rootNode.value;
  inOrderTraversal(rootNode.right);
  
  console.log(stringNode);
  return stringNode;
};

export default inOrderTraversal; 
