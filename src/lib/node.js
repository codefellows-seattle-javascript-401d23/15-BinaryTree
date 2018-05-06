'use strict';

export default class Node {
  constructor(value, left = null, right = null) {
    this.left = left;
    this.right = right;
    this.value = value;
  }
}
