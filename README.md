Lab 15- Binary Tree Data Structure
====
  
#### Testing
* write at least three test assertions for each method of the Binary Tree Data Structure
* organize your tests into appropriate describe/test blocks for test output readability

#### Feature Tasks  
* Implement an **in-order** traversal function that returns a string of the visited nodes.
  * For example : `6,8,7,9,2,1,4,3,5`

####  Documentation

Following function has a Big O of O(n) an in order traversal visits each node once:
//
let inOrderString = '';
const inOrderTraversal = (rootNode) => {
  if (!rootNode) {
    return undefined;
  }
  inOrderTraversal(rootNode.left);
  console.log(`Visiting a node with value ${rootNode.value}`);
  inOrderString += rootNode.value;
  inOrderTraversal(rootNode.right);
  return inOrderString;
};

//

Add the following to your package.json file:
//
{
  "name": "11-",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "eslint . && jest --coverage --forceExit --runInBand",
    "dbon": "mkdir -p ./db && mongod --dbpath ./db",
    "dboff": "killall mongod"
  },
  "jest": {
    "setupFiles": [
      "<rootDir>/src/__test__/lib/test.env.js"
    ]
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-eslint": "^8.2.3",
    "babel-preset-env": "^1.6.1",
    "babel-register": "^6.26.0",
    "eslint": "^4.19.1",
    "eslint-config-airbnb-base": "^12.1.0",
    "eslint-plugin-import": "^2.11.0",
    "eslint-plugin-jest": "^21.15.0",
    "jest": "^22.4.3",
    "superagent": "^3.8.3"
  },
  "dependencies": {
    "body-parser": "^1.18.2",
    "dotenv": "^5.0.1",
    "express": "^4.16.3",
    "faker": "^4.1.0",
    "http-errors": "^1.6.3",
    "mongoose": "^5.0.16",
    "winston": "^3.0.0-rc4"
  }
}
//

In CLI enter the following:
 npm init
 npm i -y
 npm run test

