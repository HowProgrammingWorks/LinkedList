'use strict';

class Node {
  constructor(list, data) {
    this.list = list;
    this.data = data;
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
  push(data) {
    const node = new Node(this, data);
    node.prev = this.last;
    if (this.length === 0) this.first = node;
    else this.last.next = node;
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
  findFirst(name) {
    if (this.length > 0) {
      let node = this.first;
      if (node.data.name === name)
        return node;
      while (node !== this.last) {
        node = node.next;
        if (node.data.name === name)
          return node;
      }
    }
  }
  findAll(name) {
    const nodeArray = [];
    if (this.length > 0) {
      let node = this.first;
      if (node.data.name === name)
        nodeArray.push(node);
      while (node !== this.last) {
        node = node.next;
        if (node.data.name === name)
          nodeArray.push(node);
      }
    }
    return nodeArray;
  }
}

const list = new LinkedList();
list.push({ name: 'first' });
list.push({ name: 'second' });
list.push({ name: 'third' });

console.dir(list.pop());
console.dir(list.pop());
console.dir(list.pop());
console.dir(list.pop());

list.push({ name: 'uno' });
list.push({ name: 'due' });
console.dir(list.pop());
list.push({ name: 'tre' });
console.dir(list.pop());
console.dir(list.pop());
