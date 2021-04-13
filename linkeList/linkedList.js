class Node{
  constructor(value){
    this.value = value,
    this.next  = null
  }
}

class LinkedList {
  constructor(value){
     this.head = {
         value:value,
         next:null
     }
     this.tail = this.head;
     this.length = 1;
  }
  
  append(value){
  const newNode = new Node(value)
  this.tail.next = newNode;
  this.tail = newNode;
  this.length++;
  return this;
  }

  prepend(value){
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode;
    this.length++;
    return this;
  }

  PrintList(){
    const arr = [];
    let headNode = this.head;

    while(headNode !== null){
      arr.push(headNode.value);
      headNode = headNode.next;
    }
    return arr
  }

  insert(index,value){
    // check the params 
    if(index>=this.length){
      return this.append(value);;
    }
    if(index===0){
      this.prepend(value);
      return this.PrintList();
    }
  const newNode = new Node(value);
    const leader = this.traverseToIndex(index-1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.PrintList()
  }

    traverseToIndex(index){
      // check params 
      let counter = 0;
      let currentNode = this.head;
      while(counter !== index){
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }

  }



const myLinkedList = new  LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(20);
myLinkedList.prepend(1);
myLinkedList.insert(200,99)
// myLinkedList.PrintList();


myLinkedList.insert(2,99);

console.log(myLinkedList.PrintList())

