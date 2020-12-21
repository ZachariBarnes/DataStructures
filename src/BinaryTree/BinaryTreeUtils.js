// Search the Binary tree for the first Empty Node assuming null is an empty node and -1 terminates a tree
export function getFirstEmptyNode(node) {
  if (node.left === null && node.right === null && node.value > -1) {
    return node;
  }
  let l = node.left;
  let r = node.right;
  let tgt = null;
  if (l.value > -1)
    l = getFirstEmptyNode(l);
  if (r.value > -1)
    r = getFirstEmptyNode(r);

  const lValid = l != null && l.value > -1;
  const rValid = r != null && r.value > -1;
  if (lValid && rValid) {
    tgt = l.depth <= r.depth ? l : r;
    return tgt;
  }
  if (lValid)
    return l;
  if (rValid)
    return r;
  return null; // return null
}

function getOrder(orderType) {
  if (typeof (orderType) === 'number' && orderType < 3 && orderType > -1)
    return orderType;
  if (typeof (orderType) === 'string') {
    const ot = orderType.toLower();
    switch (ot) {
      case 'preorder':
      case 'preordertraverse':
        return 0;
      default:
      case 'inorder':
      case 'inordertraverse':
        return 1;
      case 'postordertraverse':
      case 'postorder':
        return 2;
    }
  }
  throw new Error('Invalid traversal type provided');
}

export function traverse(node, orderType = 1) {
  const result = [];
  if (node === null) return result;
  const order = getOrder(orderType);
  if (order === 0) result.push(node.value); // preOrderTraverse
  result.push(...traverse(node.left, order));
  if (order === 1) result.push(node.value); // inOrderTraverse
  result.push(...traverse(node.right, order));
  if (order === 2) result.push(node.value); // postOrderTraverse
  return result;
}

export function swapNodesAt(k, node) {
  if (node === null || node.value === -1) return;
  if (node.depth % k === 0) {
    // console.log(`Swapping nodes at Depth: ${node.depth} for K: ${k}`);
    const temp = node.left;
    node.left = node.right;
    node.right = temp;
  }
  // console.log(`NOT Swapping nodes at Depth: ${node.depth} for K: ${k}`);
  swapNodesAt(k, node.left);
  swapNodesAt(k, node.right);
}

// Takes a two  dimensional array of integers. -1 signifies and empty node.
// Example: [ [2,3] [-1,-1], [-1,-1] ] Creates the tree 2 1 3 with 1 being the root node and 2 and 3 being leaf nodes
export function createBinaryTree(nodes) {
  const depth = 1;
  const root = new Node(1, depth);
  let node;
  for (let i = 0; i < nodes.length; i++) {
    node = getFirstEmptyNode(root);
    node.left = new Node(nodes[i][0], node.depth + 1);
    node.right = new Node(nodes[i][1], node.depth + 1);
  }
  return root;
}
