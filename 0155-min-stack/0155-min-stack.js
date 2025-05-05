
var MinStack = function() {
    this.st = [];
    this.mini = Number.MAX_SAFE_INTEGER;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(!this.st.length) {
        this.st.push(val);
        this.mini = val;
    }else {
        if(val > this.mini) {
            this.st.push(val);
        }else{
            this.st.push(2*val - this.mini);
            this.mini = val;
        }
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.st.length){
        const x = this.st[this.st.length - 1];
        this.st.pop();
        if(x < this.mini) {
            this.mini = 2*this.mini - x;
        }
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(!this.st.length) return -1;
    else {
        const x = this.st[this.st.length - 1];
        if(x > this.mini) return x;
        else return this.mini;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return !this.st.length ? -1: this.mini;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */