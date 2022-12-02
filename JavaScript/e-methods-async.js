'use strict';

function LinkedList() {
  this.first = null;
  this.last = null;
  this.length = 0;
}

LinkedList.prototype.push = function(data) {
  const node = new Node(this, data);
  node.prev = this.last;
  if (this.length === 0) this.first = node;
  else this.last.next = node;
  this.last = node;
  this.length++;
  return node;
};

LinkedList.prototype.pop = function() {
  if (this.length === 0) return null;
  const node = this.last;
  this.last = node.prev;
  node.list = null;
  node.prev = null;
  node.next = null;
  this.length--;
  return node.data;
};

LinkedList.prototype.find = function(callback1, callback2) {
  let current = this.first;
  const res = [];
  for (let i = 0; i < this.length; i++) {
    if (callback1(current.data)) res.push(current.data);
    current = current.next;
  }
  return res.forEach(item => callback2(item));
};

LinkedList.prototype.filter = function(callback1, callback2) {
  let current = this.first;
  const res = new LinkedList();
  for (let i = 0; i < this.length; i++) {
    if (callback1(current.data)) res.push(current.data);
    current = current.next;
  }
  return callback2(res);
};


function Node(list, data) {
  this.list = list;
  this.data = data;
  this.prev = null;
  this.next = null;
}

// Usage

const list = new LinkedList();
list.push({ name: 'first' });
list.push({ name: 'second' });
list.push({ name: 'third', field: 0 });

console.log('find, length of keys = 1:');
list.find(item => Object.keys(item).length === 1, res => console.dir(res));

console.log('filter, length of keys = 1:');
list.filter(item => Object.keys(item).length === 1, res => console.dir(res));
