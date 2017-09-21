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
    const currentNode = this.last;
    const newNode = new Node(this, data);
    newNode.prev = currentNode;
    if (this.length === 0) this.first = newNode;
    else currentNode.next = newNode;
    this.last = newNode;
    this.length++;
    return newNode;
  }

  pop() {
    if (this.length > 0) {
      const node = this.last;
      this.last = node.prev;
      if (this.last) this.last.next = null;
      node.list = null;
      node.prev = null;
      this.length--;
      return node.data;
    }
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
