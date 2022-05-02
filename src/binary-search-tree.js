const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {

  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(data) {
    this.tree = addData(this.tree, data);

    function addData(node, data) {
      if (node === null) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (node.data > data) {
        node.left = addData(node.left, data);
      } else {
        node.right = addData(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    
    function hasData(node, data) {
      if (node === null) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (node.data > data) {
        return hasData(node.left, data);
      } else {
        return hasData(node.right, data);
      }
    }
    return hasData(this.tree, data);
  }

  find(data) {
    
    function findData(node, data) {
      if (node === null) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (node.data > data) {
        return findData(node.left, data);
      } else {
        return findData(node.right, data);
      }
    }
    return findData(this.tree, data);
  }

  remove(data) {
    this.tree = removeData(this.tree, data);

    function removeData(node, data) {
      if (node === null) {
        return null;
      }

      if (node.data > data) {
        node.left = removeData(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeData(node.right, data);
        return node;
      } else {
        if (node.left === null && node.right === null) {
          return null;
        }

        if (node.left === null) {
          node = node.right;
          return node;
        }

        if (node.right === null) {
          node = node.left;
          return node;

        } 
        else {

          let current = node.right;

          while (current.left) {
            current = current.left;
          }

          node.data = current.data;
          node.right = removeData(node.right, current.data);
      }
        return node;
      }
    }
  }

  min() {
    let min = this.tree;

    while (min.left) {
      min = min.left;
    }

    return min.data;
  }

  max() {
    let max = this.tree;

    while (max.right) {
      max = max.right;
    }

    return max.data;
  }
}

module.exports = {
  BinarySearchTree
};