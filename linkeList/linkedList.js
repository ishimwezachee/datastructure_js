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

}

const myLinkedList = new  LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(20);
myLinkedList.prepend(1);
// myLinkedList.PrintList();

console.log(myLinkedList.PrintList())

// myLinkedList.insert(2,99);

// console.log(myLinkedList)

