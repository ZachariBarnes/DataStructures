export function getFirstChild(i) {
  return (i * 2) + 1;
}

export function getParent(i) {
  return Math.floor((i - 1) / 2);
}

export function swap(i, tgt, arr) {
  const tmp = arr[i];
  arr[i] = arr[tgt];
  arr[tgt] = tmp;
}

export function getN(arr) {
  return arr.length - 1;
}
