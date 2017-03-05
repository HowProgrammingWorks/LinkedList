'use strict';

function LinkedList() {
  this.first = null;
  this.last = null;
  this.length = 0;

  this.push = function(data) {
    let currentNode = this.last;
    const newNode = new Node(this, data);
    newNode.prev = currentNode;
    if (this.length === 0) this.first = newNode;
    else currentNode.next = newNode;
    this.last = newNode;
    this.length++;
    return newNode;
  };

  this.pop = function() {
    if (this.length > 0) {
      const node = this.last;
      this.last = node.prev;
      if (this.last) this.last.next = null;
      node.list = null;
      node.prev = null;
      this.length--;
      return node.data();
    }
  };
}


function Node(list, data) {

  let privateData = data;
  this.list = list;

  this.data = (...arg) => {
    if (!arg.length) {
      return privateData;
    }
    privateData = arg[0];
  };

  this.prev = null;
  this.next = null;
}

const list = new LinkedList();
list.push({ name: 'first' });
list.last.data({ name: 'first2' });
list.push({ name: 'second' });
list.push({ name: 'third' });

console.log(list.pop());
console.dir(list.pop());
console.dir(list.pop());
console.dir(list.pop());


list.push({ name: 'uno' });
list.push({ name: 'due' });
console.dir(list.pop());
list.push({ name: 'tre' });
console.dir(list.pop());
console.dir(list.pop());
