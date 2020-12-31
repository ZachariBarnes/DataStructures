
export const MIN_HEAP_COMPARATOR = (a, b) => a < b;
export const MAX_HEAP_COMPARATOR = (a, b) => a > b;

export class Heap {
    constructor(a, comparator) {
        this.arr = [];
        this.compare = comparator;
        if (a && a.length) {
            buildHeap(a)
        }
    }

    buildHeap(a) {
        for (let x of a) {
            this.arr.splice(0, 0, x);
            this.siftDown(arr, 0);
        }
    }

    peek() {
        return this.arr[0];
    }

    swap(i, j, arr) {
        let tmp = arr[i];
        arr[i] = arr[j]
        arr[j] = tmp;
    }

    getParent(i) {
        return Math.floor((i - 1) / 2);
    }

    getChild(i) {
        return Math.floor((i * 2) + 1);
    }

    getTarget(arr, l) {
        let n = arr.length - 1;
        let r = l <= n ? l + 1 : -1;
        if (r > -1 && this.compare(arr[r], arr[l]))
            return r;
        return l;
    }

    siftUp(arr) {
        let n = arr.length - 1
        let parent = this.getParent(n);
        let tgt = n;
        while (parent >= 0) {
            if (this.compare(arr[tgt], arr[parent])) {
                this.swap(tgt, parent, arr);
                tgt = parent;
                parent = this.getParent(parent);
            }
            else {
                break;
            }
        }
    }


    siftDown(arr, t) {
        let n = arr.length - 1;
        let l = this.getChild(t);
        let parent = t;
        while (l <= n) {
            let tgt = this.getTarget(arr, l);
            if (this.compare(arr[tgt], arr[parent])) {
                this.swap(tgt, parent, arr);
                parent = tgt;
                l = this.getChild(parent);
            }
            else {
                break;
            }
        }
    }

    insert(num) {
        const { arr } = this;
        let i = arr.length;
        arr.push(num);
        this.siftUp(arr, i);
    }

    remove() {
        const { arr } = this;
        const n = arr.length - 1;
        this.swap(0, n, arr);
        let x = arr.pop();
        this.siftDown(arr, 0);
        return x;
    }

}
