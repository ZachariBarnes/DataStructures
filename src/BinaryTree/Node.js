class Node {
  constructor(data, depth) {
    this.value = data;
    this.left = null;
    this.right = null;
    this.depth = depth;
  }
}

export function getFirstEmptyNode(node) {
  if (node.left === null && node.right === null) {
    return node;
  }
  let l = node.left;
  let r = node.right;

  if (l.value > -1)
    l = getFirstEmptyNode(l);
  if (l != null)
    return l;

  if (r.value > -1)
    r = getFirstEmptyNode(r);
  if (r != null)
    return r;

  return null;
}

export function traverseTree(node, result = []) {
  if (node === null || node.value === -1) return result;
  result.push(...traverseTree(node.left));
  result.push(node.value);
  result.push(...traverseTree(node.right));
  return result;
}

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

export default Node;
