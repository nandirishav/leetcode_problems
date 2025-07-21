/**
 * @param {number[]} nums
 * @return {number[]}
 */
class MinHeap {
    constructor(compare) {
        this.heap = [];
    }
    getLeftChildIndex(index) {
        return 2 * index + 1;
    }
    getRightChildIndex(index) {
        return 2 * index + 2;
    }
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }
    hasLeftChild(index) {
        return this.getLeftChildIndex(index) < this.size();
    }
    hasRightChild(index) {
        return this.getRightChildIndex(index) < this.size();
    }
    hasParent(index) {
        return this.getParentIndex(index) >= 0;
    }
    leftChild(index) {
        return this.heap[this.getLeftChildIndex(index)];
    }
    rightChild(index) {
        return this.heap[this.getRightChildIndex(index)];
    }
    parent(index) {
        return this.heap[this.getParentIndex(index)];
    }
    swap(i,j) {
        [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]];
    }
    compare(a, b) {
        if (a.freq !== b.freq) return a.freq < b.freq;
        return a.key > b.key; // If frequency is equal, prefer larger key
    }
    add(pair) {
        this.heap.push(pair);
        this._heapifyUp();
    }

    remove() {
        if (this.size() === 0) return null;
        const top = this.heap[0];
        const end = this.heap.pop();
        if (this.size() > 0) {
            this.heap[0] = end;
            this._heapifyDown();
        }
        return top;
    }

    size() {
        return this.heap.length;
    }

    _heapifyUp() {
        let index = this.size() - 1;
         while (
            this.hasParent(index) &&
            this.compare(this.heap[index], this.parent(index))
        ) {
            this.swap(index, this.getParentIndex(index));
            index = this.getParentIndex(index);
        }
    }

    _heapifyDown() {
        let index = 0;
        const size = this.size();
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            if (
                this.hasRightChild(index) &&
                this.compare(this.rightChild(index), this.leftChild(index))
            ) {
                smallerChildIndex = this.getRightChildIndex(index);
            }

            if (this.compare(this.heap[index], this.heap[smallerChildIndex])) break;

            this.swap(index, smallerChildIndex);
            index = smallerChildIndex;
        }
    }
}
 
var frequencySort = function(nums) {
    const freqMap = new Map();
    for(const num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
    const minHeap = new MinHeap();
    for(const [key,value] of freqMap) {
        minHeap.add({freq: value, key});
    }
    console.log(minHeap, 'minHeap');
    const res = [];
    while(minHeap.size()) {
        const {freq, key} = minHeap.remove();
        let count = freq;
        while(count) {
            res.push(key);
            count--;
        }
    }
    return res;
};