'use strict';

// time - 0(N) where n is the number of nodes
// space - 0(H) where h is the height if the tree

const preOrderTraversal = (rootNode) => {
    // pre-order is root - left - right
    if (!rootNode) {
        return undefined;
    }
    // -----------------
        console.log(`Visiting a node with value ${rootNode.value}`);
    // -----------------
    preOrderTraversal(rootNode.left); // rootNode.left is a is a sub-tree
    preOrderTraversal(rootNode.right);
    return undefined;
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
    console.log(`Visiting a node with value ${rootNode.value}`);
    return undefined;
    // -------------------
};

const inOrderTraversal = (rootNode) => {
    // in-order is left - root - right
    if (!rootNode) {
        return undefined;
    }
    let inOrderString = '';
    inOrderTraversal(rootNode.left);
    // console.log(`Visiting a node with value ${rootNode.value}`);
    inOrderTraversal(rootNode.right);
    inOrderString += Node.value;
    return console.log(inOrderString);
}

export { preOrderTraversal, postOrderTraversal, inOrderTraversal };
