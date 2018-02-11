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

LinkedList.prototype.find = function(callback) {
  let current = this.first;
  let res = []
  for(let i = 0; i < this.length; i++) {
    if(callback(current.data)) res.push(current.data);
    current = current.next;
  }
  return res;
}

LinkedList.prototype.filter = function(callback) {
  let current = this.first;
  let res = new LinkedList();
  for(let i = 0; i < this.length; i++) {
    if(callback(current.data)) res.push(current.data);
    current = current.next;
  }
  return res;
}

LinkedList.prototype.indexOf = function(data) {
  let current = this.first;
  let res = [];
  for(let i = 0; i < this.length; i++) {
    for(let key in current.data){
      if(current.data[key] === data) res.push(i);
    }
    current = current.next;
  }
  return res;
}

LinkedList.prototype.includes = function(data) {
  let current = this.first;
  for(let i = 0; i < this.length; i++) {
    for(let key in current.data){
      if(current.data[key] === data) return true;
    }
    current = current.next;
  }
  return false;
}

LinkedList.prototype.map = function(callback) {
  let current = this.first;
  let res = new LinkedList();
  for(let i = 0; i < this.length; i++) {
    res.push(callback(current.data));
    current = current.next;
  }
  return res;
}

function Node(list, data) {
  this.list = list;
  this.data = data;
  this.prev = null;
  this.next = null;
}

// Usage

const list = new LinkedList();
list.push({ name: 'first' });
list.push({ name: 'second', field: 1 });
list.push({ name: 'third', field: 1 });

console.log('find second:');
console.dir(list.find(item => item.name === 'second'));

console.log('filter, length of keys = 1:');
console.dir(list.filter(item => Object.keys(item).length === 1));

console.log('indexOf "1":');
console.dir(list.indexOf(1));

console.log('includes third: ');
console.log(list.includes('third'));
console.log('includes fourth: ');
console.log(list.includes('fourth'));

console.log('map, length of name:');
console.dir(list.map(item => item.name.length));
