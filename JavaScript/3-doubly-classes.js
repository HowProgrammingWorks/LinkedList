'use strict';

class Node {
  constructor(data, prev, next) {
    // If data type is Object then create a copy of data (don`t use reference)
    // else assign reference
    if (typeof(data) === Object) {
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
    this.lenght = 0;
    this.head = null;
    this.tail = null;
  }

  // Adding new element to end of list
  append(data) {
    if (this.lenght === 0)
      this.head = this.tail = new Node(data);
    else {
      this.tail.next = new Node(data, this.tail);
      this.tail = this.tail.next;
    }

    this.lenght++;
  }

  // Deleting element from tail of list
  pop() {
    if (this.lenght === 0) {
      return null;
    } else {
      const tmp = this.tail;

      if (this.lenght > 1) {
        this.tail = this.tail.prev;
        this.tail.next = null;
      } else {
        this.tail = this.head = null;
      }

      this.lenght--;
      return tmp;
    }
  }

  // Adding new element to head of list
  shift(data) {
    if (this.lenght === 0)
      this.head = this.tail = new Node(data);
    else {
      this.head.prev = new Node(data, null, this.head);
      this.head = this.head.prev;
    }

    this.lenght++;
  }

  // Deleting element from head of list
  unshift() {
    if (this.lenght === 0) {
      return null;
    } else {
      const tmp = this.head;

      if (this.lenght > 1) {
        this.head = this.head.next;
        this.head.prev = null;
      } else {
        this.tail = this.head = null;
      }
      this.lenght--;
      return tmp;
    }
  }
}

// ???????? How to make definition of generator function inside class ?????
function* iterator(list) {
  let currNode = list.head;
  while (currNode) {
    yield currNode.data;
    currNode = currNode.next;
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
for (let i = 0; i < 10; i++)
  list.append(i);

// Showing all data using iterator
let iter = iterator(list);
for (let x of iter)
  console.log(x);
