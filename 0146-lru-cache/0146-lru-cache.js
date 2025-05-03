/**
 * @param {number} capacity
 */

class Node{
    constructor(key,value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = new Node(null,null);
    this.tail = new Node(null,null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

LRUCache.prototype.remove = function (node) {
    const prevNode = node.prev;
    const afterNode = node.next;
    prevNode.next = afterNode;
    afterNode.prev = prevNode;
}

LRUCache.prototype.insertAtHead = function (node) {
    const currentAfterHead = this.head.next;
    this.head.next = node;
    node.prev = this.head;
    node.next = currentAfterHead;
    currentAfterHead.prev = node;
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(!this.map.get(key)) return -1;
    const node = this.map.get(key);
    this.remove(node);
    this.insertAtHead(node);
    return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.map.has(key)) {
        const node = this.map.get(key);
        node.value = value;
        this.remove(node);
        this.insertAtHead(node);
    }else {
        if(this.map.size >= this.capacity) {
            const node = this.tail.prev;
            this.map.delete(node.key);
            this.remove(node);
        }
        const newNode = new Node(key,value);
        this.map.set(key, newNode);
        this.insertAtHead(newNode);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */