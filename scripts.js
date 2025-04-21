class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  prepend(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  size() {
    return this.length;
  }

  headNode() {
    return this.head;
  }

  tailNode() {
    return this.tail;
  }

  at(index) {
    if (index < 0 || index >= this.length) return null;
    let currentVal = this.head;
    for (let i = 0; i < index; i++) {
      currentVal = currentVal.next;
    }
    return currentVal;
  }

  pop() {
    if (!this.head) return;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      let currentValVal = this.head;
      while (currentValVal.next !== this.tail) {
        currentValVal = currentValVal.next;
      }
      currentValVal.next = null;
      this.tail = currentValVal;
    }
    this.length--;
  }

  contains(value) {
    let currentValVal = this.head;
    while (currentValVal) {
      if (currentValVal.value === value) return true;
      currentValVal = currentValVal.next;
    }
    return false;
  }

  find(value) {
    let currentVal = this.head;
    let index = 0;
    while (currentVal) {
      if (currentVal.value === value) return index;
      currentVal = currentVal.next;
      index++;
    }
    return null;
  }

  toString() {
    let currentVal = this.head;
    let result = "";
    while (currentVal) {
      result += `( ${currentVal.value} ) -> `;
      currentVal = currentVal.next;
    }
    result += "null";
    return result;
  }
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.prepend(5);
console.log(list.size());
console.log(list.pop());
console.log(list.tailNode());
console.log(list.headNode());
console.log(list.toString());
