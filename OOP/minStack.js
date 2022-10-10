class MinStack {
    constructor(){
        this.storage = [];
        this.min = Infinity;
    }
}

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.storage.push(val);
    if(this.min > val) {
        this.min = val;
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const data = this.storage.pop();
    return data;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    const data = this.storage[this.storage.length - 1];
  return data;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};

// const minStack = new MinStack();
// minStack.push(5)
// minStack.push(10)
// console.log(minStack)


  var obj = new MinStack()
  obj.push(5)
console.log( obj.pop()) 
    var param_3 = obj.top()
var param_4 = obj.getMin()

console.log(param_3)
console.log(param_4);