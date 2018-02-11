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
  this.last.next = null;
  this.length--;
  return node.data;
};

LinkedList.prototype.insert = function(index, data) {
  let current = this.first;
  for(let i = 0; i < index; i++) {
    current = current.next;
  }
  if (index === this.length) {
    this.push(data);
  } else if (index < this.length) {
    const node = new Node(this, data);
    node.prev = current.prev;
    node.next = current;    
    current.prev = node;
    node.prev.next = node;
    this.length++;
    return node;
  } else {
    return null;
  };
};

LinkedList.prototype.delete = function(index, count) {
  let current = this.first;
  if (index === this.length - 1) {
    this.pop();
  } else if(index < this.length - 1) {
    for(let i = 0; i < index; i++) {
      current = current.next;
    }
    const node = current.prev;
    node.next = current.next;
    current.next.prev = node;
    current.list = null;
    current.data = null;
    current.prev = null;
    current.next = null;
    this.length--;
    if(--count) this.delete(index, count);
    return node;
  } else {
    return null;
  }
};

LinkedList.prototype.clone = function() {
  const list = new LinkedList();
  let current = this.first;
  for(let i = 0; i < this.length; i++) {
    list.push(current.data);
    current = current.next;
  }
  return list;
};

LinkedList.prototype.compare = function(list) {
  const equal = (obj1, obj2) => {
    if(Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false;
    }
    for(let key in obj1) {
      if(typeof(obj1[key]) === 'object') {
        equal(obj1[key], obj2[key]);
      } else if(obj1[key] !== obj2[key]) {
        return false;
      }
    }
    return true;
  }
  if(this.length !== list.length) return false;
  let current1 = this.first;
  let current2 = list.first;
  for(let i = 0; i < this.length; i++) {
    if(!equal(current1.data, current2.data)) return false;
    current1 = current1.next;
    current2 = current2.next;
  }
  return true;
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
list.push({ name: 'second' });
list.push({ name: 'third' });

const l2 = list.clone();
console.log('is l2 compared to list:')
console.log(l2.compare(list));

l2.pop();
console.log('And now: ');
console.log(l2.compare(list));

console.log('insert "fourth" besides 2 and 3:');

console.dir(list.insert(2, { name: 'fourth' }));

console.log('delete 2 nodes from 1 index:');
list.delete(1, 2);
console.dir(list);

