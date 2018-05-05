'use strict';

let str = '';

const inOrderTraversal = (rootNode) => {
  if (!rootNode) {
    return undefined;
  }
  inOrderTraversal(rootNode.left);
  str += rootNode.value;
  inOrderTraversal(rootNode.right);
  // console.log(str);
  return str;
};

export default inOrderTraversal;
