/** 
 * @param {number} val
 * @return {void}
 */

// Important way to have min value kept at O(1) value, create tuples and the min be in a stack

class MinStack {
    constructor(){
        this.storage = []; // data is stored [[val, min], [val,min]];
        this.min = [];
    }
}


MinStack.prototype.push = function(val) {
    // if the newest val is smaller than the current min, push it into the min array
    if(this.min.length === 0) {
        this.min.push(val);
    } else if (val < this.min[this.min.length - 1]) {
        this.min.push(val);    
    }
    
    // if the val is larger than current min, just push val into storage
    this.storage.push([val, this.min[this.min.length - 1]]);
   
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const data = this.storage.pop();
    
    // if the data popped is the same as the current min, pop both of them because that IS the min
    if(data[0] === this.min[this.min.length - 1]) this.min.pop();
    return data[0];
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    const data = this.storage[this.storage.length - 1];
    return data[0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    // with data storage as tuples [val, min] we will always have the latest min
    const data = this.storage[this.storage.length - 1];
    return data[1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */