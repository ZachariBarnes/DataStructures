class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value >= this.value) {
      if (this.right != null) {
        this.right.insert(value);
      } else {
        this.right = new BinarySearchTree(value);
      }
    } else if (this.left != null) {
      this.left.insert(value);
    } else {
      this.left = new BinarySearchTree(value);
    }
    return this;
  }

  contains(value) {
    if (value === this.value) {
      return true;
    }
    if (value > this.value) {
      if (this.right != null) {
        return this.right.contains(value);
      }
    } else if (this.left != null) {
      return this.left.contains(value);
    }
    return false;
  }

  getLowestLeftValue() {
    if (this.left === null) return this.value;
    return this.left.getLowestLeftValue();
  }

  getChildCount() {
    return this.left != null && this.right != null ? 2 : this.left != null || this.right != null ? 1 : 0;
  }

  remove(value, parent = null) {
    // Not the Target Value Search left
    if (value < this.value && this.left != null) {
      return this.left.remove(value, this);
    }

    // Not the Target Value Search right
    if (value > this.value && this.right != null) {
      return this.right.remove(value, this);
    }

    // Matches Target
    switch (this.getChildCount()) {
      // Matches target has two Children.
      case 2: {
        if (this.left !== null && this.right !== null) {
          this.value = this.right.getLowestLeftValue();
          this.right.remove(this.value, this);
        }
        break;
      }
      // Matches target, has Single child.
      case 1: {
        const targetNode = this.left != null ? this.left : this.right;
        if (parent === null) {
          this.value = targetNode.value;
          this.right = targetNode.right;
          this.left = targetNode.left;
        } else { // Replace this node with its only child
          if (parent.left === this)
            parent.left = targetNode;
          else
            parent.right = targetNode;
        }
        break;
      }
      // Matches Target, Has no Children
      case 0: {
        if (parent !== null) {
          if (this.value < parent.value) parent.left = null;
          else parent.right = null;
        }
        break;
      }
      default:
        break;
    }
    return this;
  }
}

exports.BinarySearchTree = BinarySearchTree;
