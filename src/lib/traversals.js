'use strict';

let preOrderString = '';
let postOrderString = '';
let inOrderString = '';


// time - 0(N) where n is the number of nodes
// space - 0(H) where h is the height if the tree

const preOrderTraversal = (rootNode) => {
  if (!rootNode) {
    return preOrderString;
  }
  // pre-order is root - left - right
  // -----------------
  console.log(`Visiting a node with value ${rootNode.value}`);
  preOrderString += rootNode.value;
  // -----------------
  preOrderTraversal(rootNode.left); // rootNode.left is a is a sub-tree
  preOrderTraversal(rootNode.right);
  return preOrderString;
};

// time - 0(N) where n is the number of nodes
// space - 0(H) where h is the height of the tree
const postOrderTraversal = (rootNode) => {
  // post-order is left - right - root
  if (!rootNode) {
    return undefined;
  }
  postOrderTraversal(rootNode.left);
  postOrderTraversal(rootNode.right);
  // we won't visit root until we've visited all left and right nodes...remember this is recursive
  // -------------------
  // console.log(`Visiting a node with value ${rootNode.value}`);
  postOrderString += rootNode.value;
  // -------------------
  return postOrderString;
};


const inOrderTraversal = (rootNode) => {
  // in-order is left - root - right
  if (!rootNode) {
    return undefined;
  }
  inOrderTraversal(rootNode.left);
  // console.log(`Visiting a node with value ${rootNode.value}`);
  inOrderString += rootNode.value;
  inOrderTraversal(rootNode.right);
  return inOrderString;
};

export { preOrderTraversal, postOrderTraversal, inOrderTraversal };
