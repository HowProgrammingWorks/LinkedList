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

LinkedList.prototype.search = function(field, value) {
  let current = this.first;
  const res = [];
  for (let i = 0; i < this.length; i++) {
    if (current.data[field] === value) res.push(current.data);
    current = current.next;
  }
  return res;
};

LinkedList.prototype.select = function(data) {
  let current = this.first;
  const res = new LinkedList();
  const equal = (obj1, obj2) => {
    for (const key1 in obj1) {
      for (const key2 in obj2) {
        if (key1 === key2 && obj1[key1] === obj2[key2]) return true;
      }
    }
    return false;
  };
  for (let i = 0; i < this.length; i++) {
    if (equal(current.data, data)) res.push(current.data);
    current = current.next;
  }
  return res;
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
list.push({ name: 'second', field: 1 });
list.push({ name: 'third', field: 1 });

console.log('search "field: 1":');
console.dir(list.search('field', 1));
console.log('select by "field: 1":');
console.dir(list.select({ field: 1 }));

