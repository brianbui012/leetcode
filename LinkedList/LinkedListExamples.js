class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor(){
      this.head = null;
    }
  
    arrayify(head = this.head) {
      let current = head;
      const values = [];
      while(current !== null) {
        values.push(current.val);
        current = current.next;
      }
      return values;
    }
  
    arrayifyR(node = this.head) {
      if(node === null) return [];
  
      return [node.val].concat(this.arrayifyR(node.next))
    }
  
    totalSum(head = this.head){
      let total = 0;
      let current = head;
  
      while(current !== null) {
        total += current.val;
        current = current.next;
      }
      return total;
    }
  
    totalSumR(head = this.head) {
      if(head === null) return 0;
  
      return head.val + this.totalSumR(head.next);
    }

    returnIndex(val) {
        let current = this.head;
        let index = 0;
        while(current !== null) {
          if(current.val === val) return index;
          index++;
          current = current.next;
        }
    
        return -1;
      }
  }
  
  
  const nodeA = new Node(5);
  const nodeB = new Node(6);
  const nodeC = new Node(7);
  const nodeD = new Node(8);
  
  nodeA.next = nodeB;
  nodeB.next = nodeC;
  nodeC.next = nodeD;
  
  const LL = new LinkedList();
  LL.head = nodeA;
  console.log(LL)
  console.log(LL.arrayifyR());
  console.log(LL.arrayify());
  console.log(LL.totalSum());
  console.log(LL.totalSumR());
  console.log(LL.returnIndex(7));

  
  