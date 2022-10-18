var rightSideView = function(root) {
    if(root === null) return [];
    const queue = [root];
    const result = [];
    
    while(queue.length > 0) {
        let length = queue.length;
        
        for(let i = 0; i < length; i++) {
            let curr = queue.shift();
            
            if(i === length - 1) {
                result.push(curr.val);    
            }
            
            if(curr.left) queue.push(curr.left);
            if(curr.right) queue.push(curr.right);
        }
    }
    
    return result;
};