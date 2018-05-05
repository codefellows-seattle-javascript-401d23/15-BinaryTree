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

// time - Big O of inOrderTraversal is O(n) where n is the # of NODES
// space -  Big O of O(H) where H is the height of the tree.

export default inOrderTraversal;
