'use strict';

// time - Big O of a Traversal is O(n) where n is the # of NODES
// space -  Big O of O(H) where H is the height of the tree.


// The console log is where you are going to add functionality
const preOrderTraversal = (rootNode) => {
  if(!rootNode) {
    return undefiend;
  }
  console.log(`visting a node with value ${rootNode.value}`);
  preOrderTraversal(rootNode.left);
  preOrderTraversal(rootNode.right);
  return undefiend;
}


const postOrderTraversal = (rootNode) => {
  if(!rootNode) {
  return undefiend;
  }
  postOrderTraversal(rootNode.left);
  postOrderTraversal(rootNode.right);
  console.log(`visting a node with value ${rootNode.value}`);
  return undefiend;
}


const inOrderTraversal = (rootNode) => {
  if(!rootNode) {
    return undefiend;
  }
  inOrderTraversal(rootNode.left);
  console.log(`visting a node with value ${rootNode.value}`);
  inOrderTraversal(rootNode.right);
  return undefiend;
}

export default { preOrderTraversal, postOrderTraversal, inOrderTraversal };
