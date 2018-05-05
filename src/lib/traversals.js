'use strict';

let str = '';

const preOrderTraversal = (rootNode) => {
  if (!rootNode) {
    return undefined;
  }
  str += rootNode.value;
  preOrderTraversal(rootNode.left);
  preOrderTraversal(rootNode.right);
  return str;
};


const postOrderTraversal = (rootNode) => {
  if (!rootNode) {
    return undefined;
  }
  postOrderTraversal(rootNode.left);
  postOrderTraversal(rootNode.right);
  str += rootNode.value;
  return str;
};

export { preOrderTraversal, postOrderTraversal };
