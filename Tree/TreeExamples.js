class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  class BST {
    constructor(){
      this.root = null;
    }
  }
  
  let nodeA = new Node(4);
  let nodeB = new Node(2);
  let nodeC = new Node(3);
  let nodeD = new Node(10);
  let nodeE = new Node(8);
  let nodeF = new Node(1);
  let nodeG = new Node(10);
  
  nodeA.left = nodeB;
  nodeA.right = nodeD;
  nodeB.left = nodeF;
  nodeB.right = nodeC;
  nodeD.right = nodeE;
  nodeE.left = nodeG;
  
  //    4
  //  2  10
  // 1 3    8
  
  
  const DFS = (root) => {
    if(root === null) return 0;
  
    return root.val + DFS(root.left) + DFS(root.right);
  }
  
  const DFSIncludes = (root, targetValue) => {
    if(root === null) return false;
    if(root.val === targetValue) return true;
  
    return DFSIncludes(root.left, targetValue) || DFSIncludes(root.right, targetValue);
  
    //return false;
    //return DFSIncludes(root.left) || DFSIncludes(root.right);
  }
  
  const DFSIncludesI = (root, target) => {
    let stack = [root];
  
    while(stack.length > 0) {
      let current = stack.pop();
  
      if(current.val === target) return true;
      
      if(current.right) stack.push(current.right);
      if(current.left) stack.push(current.left);
    }
  
    return false;
  }
  
  
  const rMin = (root) => {
    if(root === null) return Infinity;
   
     const min = Math.min(rMin(root.left),  rMin(root.right), root.val);
    return min;
  }
  
  
  const maxPath = (root) => {
    if(root === null) return -Infinity;
    if(root.left === null && root.right === null) return root.val;
    return root.val + Math.max(maxPath(root.left), maxPath(root.right));
  }
  
  
  const DFSPrint = (root) => {
    if(root === null) return;
  
    console.log(root.val);
    DFSPrint(root.right);
    DFSPrint(root.left);
  
  }
  
  const longestPath = (root) => {
      if(root === null) return 0;
      
      return 1 + Math.max(longestPath(root.left), longestPath(root.right))
  }
  
  const checkSequence = (root, sequence, sequenceIndex = 0) => {
    if(root === null) return false;
  
    if(root.left === null && root.right === null && sequence[sequenceIndex] === root.val) {
      return true;
    }
    return checkSequence(root.left, sequence, sequenceIndex + 1) || checkSequence(root.right, sequence, sequenceIndex + 1);
  }
  
  console.log(checkSequence(nodeA, [4,2,3]));
  
  
  // console.log(DFSIncludes(nodeA, 7))
  // console.log(rMin(nodeA));
  
  console.log(longestPath(nodeA));
  // console.log(DFSPrint(nodeA));