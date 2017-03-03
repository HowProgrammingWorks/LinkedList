'use strict';

class Node {
  constructor(data, prev, next) {
    // If data type is Object then create a copy of data (don`t use reference)
    // else assign reference
    if (typeof(data) === 'object') {
      this.data = Object.assign({}, data);
    } else {
      this.data = data;
    }
    this.prev = prev || null;
    this.next = next || null;
  }
}

class LinkedList {
  //Create empty list
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  // Adding new element to end of list
  append(data) {
    if (this.length === 0) {
      this.head = this.tail = new Node(data);
    } else {
      this.tail.next = new Node(data, this.tail);
      this.tail = this.tail.next;
    }

    this.length++;
  }

  // Deleting element from tail of list
  pop() {
    const tmp = this.tail;

    if (this.length > 1) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      this.tail = this.head = null;
    }

    if (tmp) {
      this.length--;
      return tmp.data;
    } else {
      return null;
    }
  }

  // Adding new element to head of list
  shift(data) {
    if (this.length === 0) {
      this.head = this.tail = new Node(data);
    } else {
      this.head.prev = new Node(data, null, this.head);
      this.head = this.head.prev;
    }

    this.length++;
  }

  // Deleting element from head of list
  unshift() {
    const tmp = this.head;

    if (this.length > 1) {
      this.head = this.head.next;
      this.head.prev = null;
    } else {
      this.tail = this.head = null;
    }

    if (tmp) {
      this.length--;
      return tmp.data;
    } else {
      return null;
    }
  }

  // Make class List iterable
  [Symbol.iterator]() {
    let currNode = list.head;
    return {
      next: function() {
        const tmp = currNode;
        if (tmp) currNode = currNode.next;
        return tmp ?
          { value: tmp.data, done: false } :
          { value: null, done: true };
      }
    };
  }

  // Applying function fn to all items of list
  map(fn) {
    if (fn && this.length) {
      // We don`t use iterator here because data in Node isn`t always Object.
      // So we can`t use reference assign.
      let currNode = this.head;
      while (currNode) {
        currNode.data = fn(currNode.data);
        currNode = currNode.next;
      }
    }
    return this;
  }
}

const list = new LinkedList();
list.append({ name: 'first' });
list.shift({ name: 'second' });
list.append({ name: 'third' });

// List elements = [second, first, third]
// Expected output data = [third, second, first, null, null]
console.dir(list.pop());
console.log();
console.dir(list.unshift());
console.log();
console.dir(list.pop());
console.log();
console.dir(list.pop());
console.log();
console.dir(list.unshift());

console.log('\n-------------------------------------\n');
for (let i = 0; i < 10; i++) {
  list.append(i);
}


// Showing all data using iterator
for (let x of list) {
  console.log(x);
}

console.log('\n-------------------------------------\n');

list
  .map(x => x*x)
  .map(x => x*2);

for (let x of list) {
  console.log(x);
}