// DFS

const hasPathSum = (root, target) => {
    if(root === null) return false;
   
    if(target - root.val === 0 && (root.left === null && root.right === null)){
        return true;
    }
    
    return hasPathSum(root.left, target - root.val) || hasPathSum(root.right, target - root.val);
    
}

// Backtracking iteratively

const hasPathSum = (root, target) => {
    if(root === null) return false;
    const stack = [[root, target]];
    
    while(stack.length > 0) {
        let [node, targetR] = stack.pop();
        
        targetR -= node.val;
        if(targetR === 0 && (node.left === null && node.right === null)) {
            return true;
        }
        
        if(node.right) stack.push([node.right, targetR]);
        if(node.left) stack.push([node.left, targetR]);
    }

    return false;
}
