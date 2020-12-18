import { getFirstChild, getParent, swap, getN } from './HeapUtils';

class MaxHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    const { siftDown } = this;
    const n = getN(array);
    const parent = getParent(n);
    for (let i = parent; i >= 0; i--) {
      siftDown(i, array);
    }
    return array;
  }

  getTarget(l, arr) {
    let tgt = l;
    const n = getN(arr);
    const r = l < n ? l + 1 : -1;
    if (r > -1 && arr[r] > arr[l]) {
      tgt = r;
    }
    return tgt;
  }

  siftDown(i, arr) {
    const n = getN(arr);
    let l = getFirstChild(i);
    while (l <= n) {
      const tgt = this.getTarget(l, arr);
      if (arr[i] < arr[tgt]) {
        swap(i, tgt, arr);
        i = tgt;
        l = getFirstChild(i);
      } else {
        break;
      }
    }
  }

  siftUp(i, arr) {
    let parent = getParent(i);
    while (parent > 0) {
      if (arr[parent] < arr[i]) {
        swap(i, parent, arr);
        i = parent;
        parent = getParent(i);
      } else { break; }
    }
  }

  peek() {
    return this.heap[0];
  }

  remove() {
    const { heap, siftDown } = this;
    const n = getN(heap);
    swap(0, n, heap);
    const removed = heap.pop();
    siftDown(0, heap);
    return removed;
  }

  insert(value) {
    const { heap, siftUp } = this;
    heap.push(value);
    const n = getN(heap);
    siftUp(n, heap);
  }

  getLength() {
    return this.heap.length;
  }
}

exports.MaxHeap = MaxHeap;
