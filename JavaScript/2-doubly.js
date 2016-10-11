'use strict';

function LinkedList() {
  this.first = null;
  this.last = null;
  this.length = 0;
}

LinkedList.prototype.push = function(data) {
  let node = new Node(this, data);
  node.prev = this.last;
  if (this.length === 0) this.first = node;
  else this.last.next = node;
  this.last = node;
  this.length++;
  return node;
};

LinkedList.prototype.pop = function() {
  if (this.length > 0) {
    let node = this.last;
    this.last = node.prev;
    node.list = null;
    node.prev = null;
    node.next = null;
    this.length--;
    return node.data;
  }
};

function Node(list, data) {
  this.list = list;
  this.data = data;
  this.prev = null;
  this.next = null;
}

let list = new LinkedList();
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
