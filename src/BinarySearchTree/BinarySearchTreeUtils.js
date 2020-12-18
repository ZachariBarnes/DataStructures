// Accepts a BST node and target as parameter;
export function findClosestValueInBst(tree, target, closestValue = Number.MAX_VALUE) {
  const absDiff = Math.abs(closestValue - target);
  const newAbsDiff = Math.abs(tree.value - target);
  closestValue = newAbsDiff < absDiff ? tree.value : closestValue;
  const newNode = target < tree.value ? tree.left : tree.right;
  if (newNode == null) return closestValue;
  return findClosestValueInBst(newNode, target, closestValue);
}

export default findClosestValueInBst;
