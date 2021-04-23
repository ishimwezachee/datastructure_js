// LinkedList 

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  // LE
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
      this.length =1;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top == this.bottom) {
      this.bottom = null;
    }

    this.top = this.top.next;
    this.length--;
    return this;
  }
}

const myStack = new Stack();

// myStack.push("google");
// myStack.push("youtube");
// myStack.push("twitter");
// console.log(myStack);


// Arrays 

class StackArray {
  constructor(){
    this.data = [];
  }
  peek(){
    return this.data[this.data.length-1];
  }
  push(value){
   this.data.push(value)
    return this
  }
  pop(){
    this.data.pop();
    return this;
  }

}

const arrayStack = new StackArray();

arrayStack.push('google');
arrayStack.push('youtube');
arrayStack.push('udemy');
arrayStack.pop();

console.log(arrayStack)