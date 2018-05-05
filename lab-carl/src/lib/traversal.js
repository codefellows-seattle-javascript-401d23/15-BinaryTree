'use strict';

const inOrderTreeStringifier = (node) => {
  let stringResults = '';
  const inOrderTraversal = (rootNode) => {
  // Left - Root - Right
    if (!rootNode) return undefined;
  
    inOrderTraversal(rootNode.left);

    if (stringResults.length < 1) stringResults = rootNode.value.toString();
    else stringResults = `${stringResults},${rootNode.value}`;

    inOrderTraversal(rootNode.right);
    return stringResults;
  };

  inOrderTraversal(node);
  return stringResults;
};


  // Time - O(n) where n is the number of nodes
  // Space - O(H) where H is the height of the tree
const preOrderTreeStringifier = (node) => {
  let stringResults = '';

  const preOrderTraversal = (rootNode) => {
  // Root - Left - Right
    if (!rootNode) return undefined;

    // this console log is the logic we would run on a node.
    if (stringResults.length < 1) stringResults = rootNode.value.toString();
    else stringResults = `${stringResults},${rootNode.value}`;

    preOrderTraversal(rootNode.left);
    preOrderTraversal(rootNode.right);

    return undefined;
  };

  preOrderTraversal(node);
  return stringResults;
};


  // Time - O(n) where n is the number of nodes
  // Space - O(H) where H is the height of the tree
const postOrderTreeStringifier = (node) => {
  let stringResults = '';

  const postOrderTraversal = (rootNode) => {
  // Left - Right - Root
    if (!rootNode) return undefined;

    postOrderTraversal(rootNode.left);
    postOrderTraversal(rootNode.right);

    // this console log is the logic we are running on each node
    if (stringResults.length < 1) stringResults = rootNode.value.toString();
    else stringResults = `${stringResults},${rootNode.value}`;

    return undefined;
  };

  postOrderTraversal(node);
  return stringResults;
};

export { inOrderTreeStringifier, preOrderTreeStringifier, postOrderTreeStringifier };
