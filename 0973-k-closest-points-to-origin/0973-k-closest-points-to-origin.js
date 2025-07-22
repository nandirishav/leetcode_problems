/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const maxHeap = new MaxHeap();
    for(let point of points) {
        const distance = Math.pow(point[0], 2) + Math.pow(point[1], 2);
        maxHeap.add({distance, point});
        if(maxHeap.size() > k) 
            maxHeap.remove();
    }
    console.log(JSON.stringify(maxHeap), 'maxHeap');
    const res = [];
    while(maxHeap.size()) {
        res.push(maxHeap.remove().point);
    }
    return res;
};

class MaxHeap {
    constructor() {
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
        return this.getLeftChildIndex(index) < this.heap.length;
    }
    hasRightChild(index) {
        return this.getRightChildIndex(index) < this.heap.length;
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
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
    add(item) {
        this.heap.push(item);
        this.heapifyUp();
    }
    remove() {
        if(this.heap.length == 0) return null;
        const item = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown();
        return item;
    }
    peek() {
        if(this.heap.length == 0) return null;
        return this.heap[0];
    }
    heapifyUp(){
        let index = this.heap.length - 1;
        while(this.hasParent(index) && this.parent(index).distance < this.heap[index].distance) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }
    heapifyDown(){
        let index = 0;
        while(this.hasLeftChild(index)) {
            let largerChildIndex = this.getLeftChildIndex(index);
            if(this.hasRightChild(index) && this.rightChild(index).distance > this.leftChild(index).distance) {
                largerChildIndex = this.getRightChildIndex(index);
            }
            if(this.heap[index].distance > this.heap[largerChildIndex].distance) {
                break;
            }else {
                this.swap(index, largerChildIndex);
            }
            index = largerChildIndex;
        }
    }
    size() {
        return this.heap.length;
    }
}