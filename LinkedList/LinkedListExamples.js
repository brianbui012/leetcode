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
  
    returnIndexOf(head = this.head, index) {
      if(head === null) return null;
      if(index === 0) return head.val;
      
      return returnIndexOf(this.head.next, index - 1);
    }
  
    // if (current.next === null) this.head = current;
    
    reverseLinkedList(node = this.head) {
      let prev = null;
      let current = node;
  
      while(current !== null) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }
      this.head = prev;
      return this.head;
    }
  
    reverseLinkedListR(head = this.head, prev = null) {
      if(head === null) return prev;
  
      const next = head.next;
      head.next = prev;
      return this.reverseLinkedListR(next, head);
    }
  
    zigZag(list1, list2) {
      let count = 0;
      let tail = list1;
      let current1 = list1.head;
      let current2 = list2.head;
  
      
      while(current1 && current2) {
        if(count%2 === 0) {
          let next = current1.next;
          current1.next = current2;
          tail = current2;
          current1 = next;
        } else {
          let next = current2.next;
          current2.next = current1;
          tail = current1;
          current2 = next;
        }
        count++;
      }
  
      if(current1 === null) {
        // connect current 2 to tail of current 1
        tail.next = current1;
        
      } else {
        // connect current 1 to tail of current 2
        tail.next = current2;
      }
      return list1;
    }
  }
  
  
  const nodeA = new Node(5);
  const nodeB = new Node(6);
  const nodeC = new Node(7);
  const nodeD = new Node(8);
  
  nodeA.next = nodeB;
  nodeB.next = nodeC;
  nodeC.next = nodeD;
  
  const node1 = new Node(10);
  const node2 = new Node(20);
  const node3 = new Node(30);
  const node4 = new Node(40);
  
  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  
  const GG = new LinkedList();
  GG.head = node1;
  
  const LL = new LinkedList();
  LL.head = nodeA;
  console.log(LL)
  console.log(LL.arrayifyR());
  console.log(LL.arrayify());
  console.log(LL.totalSum());
  console.log(LL.totalSumR());
  
  console.log(LL.returnIndex(7));
  console.log(LL.reverseLinkedList());
  
  console.log(GG.zigZag(GG, LL));