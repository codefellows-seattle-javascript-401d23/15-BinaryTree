'use strict';

// time - Big O of a Traversal is O(n) where n is the # of NODES
// space -  Big O of O(H) where H is the height of the tree.


// The console log is where you are going to add functionality
const preOrderTraversal = (rootNode) => {
  if (!rootNode) {
    return undefined;
  }
  // console.log(`visting a node with value ${rootNode.value}`);
  preOrderTraversal(rootNode.left);
  preOrderTraversal(rootNode.right);
  return undefined;
};


const postOrderTraversal = (rootNode) => {
  if (!rootNode) {
    return undefined;
  }
  postOrderTraversal(rootNode.left);
  postOrderTraversal(rootNode.right);
  // console.log(`visting a node with value ${rootNode.value}`);
  return undefined;
};


// const inOrderTraversal = (rootNode) => {
//   if (!rootNode) {
//     return undefined;
//   }
//   inOrderTraversal(rootNode.left);
//   console.log(`visting a node with value ${rootNode.value}`);
//
//   inOrderTraversal(rootNode.right);
//   return str;
// };

export { preOrderTraversal, postOrderTraversal };
