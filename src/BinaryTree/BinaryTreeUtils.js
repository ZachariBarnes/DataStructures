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

// Completely Traverses Left Tree, Prints root node, then Traverses Righ tree
export function traverse(node, result = []) {
  if (node === null || node.value === -1) return result;
  result.push(...traverse(node.left));
  result.push(node.value);
  result.push(...traverse(node.right));
  return result;
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
