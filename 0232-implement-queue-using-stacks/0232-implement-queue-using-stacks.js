
var MyQueue = function() {
    this.s1 = [];
    this.s2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    //step1: s1 -> s2
    while(this.s1.length) {
        this.s2.push(this.s1.pop());
    }
    //step2 - push x to s1
    this.s1.push(x);
    //step3 - pop from s2 and push to s1
    while(this.s2.length) {
        this.s1.push(this.s2.pop());
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(!this.s1.length) {
        console.log("Queue empty");
        return -1;
    }
    return this.s1.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(!this.s1.length) {
        console.log("Queue empty");
        return -1;
    }
    return this.s1[this.s1.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.s1.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */