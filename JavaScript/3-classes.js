'use strict';

class Node {
  constructor(list, name, data) {
    this.list = list;
    this.data = data;
    this.name = name;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {

  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(name, data) {
    const node = new Node(this, name, data);
    node.prev = this.last;
    if (this.length === 0) {
      this.first = node;
    } else {
      this.last.next = node;
    }
    this.last = node;
    this.length++;
    return node;
  }

  pop() {
    if (this.length > 0) {
      const node = this.last;
      this.last = node.prev;
      node.list = null;
      node.prev = null;
      node.next = null;
      this.length--;
      return node.data;
    }

  }

  searchPos(searchPosition) {

    let current = this.first;
    let position = 0;

    if (this.length === 0 ||
        searchPosition < 0 ||
        searchPosition >= this.length) {
      throw new Error('Position out of bounds.');
    }

    while (position < searchPosition) {
      current = current.next;
      ++position;
    }

    return current;
  }

  remove(removePosition) {
    let current = this.first;
    let position = 0;

    if (this.length < 0 || removePosition >= this.length) {
      throw new Error('Position out of bounds.');
    }

    if (removePosition === 0) {
      this.first = current.next;
      this.first.prev = null;
      this.length--;
      return;
    }

    while (position < removePosition) {
      current = current.next;
      ++position;
    }

    current.prev.next = current.next;
    current.next.prev = current.prev;
    this.length--;
  }

  findFirst(name) {
    let current = this.first;

    while (current !== null && current.name !== name) {
      current = current.next;
    }
    return current;
  }

  findAll(name) {
    let current = this.first;
    const arr = [];

    while (current !== null) {
      if (current.name === name) {
        arr.push(current);
      }
      current = current.next;
    }
    return arr;
  }

  find(name, callback) {
    const arr = this.findAll(name);
    let i;
    for (i = 0; i < arr.length; ++i) {
      callback(arr[i]);
    }
  }
}






const list1 = new LinkedList();
list1.push('first', 1);
list1.push('second', 2);
list1.push('third', 3);
list1.push('second', 5);

console.dir(list1.findFirst('first'));
console.dir(list1.findAll('second'));
list1.find('second', n => console.log(n));
//console.dir(list1.searchPos(-2));
console.dir(list1.searchPos(1));

console.dir(list1);
list1.remove(0);
console.dir(list1);
