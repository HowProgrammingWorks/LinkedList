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
  if (this.length > 0) {
    const node = this.last;
    this.last = node.prev;
    node.list = null;
    node.prev = null;
    node.next = null;
    this.length--;
    return node.data;
  }
};

LinkedList.prototype.shift = function(data) {
  const node = new Node(this, data);
  node.next = this.first;
  if (this.length === 0) this.last = node;
  else this.first.prev = node;
  this.first = node;
  this.length++;
  return node;
};

LinkedList.prototype.unshift = function() {
  if (!this.length) return;
  const node = this.first;
  this.first = node.next;
  node.list = null;
  node.prev = null;
  node.next = null;
  this.length--;
  return node.data;
};

LinkedList.prototype.findFirst = function(name) {
  let node = this.first;
  while (node.next && node.name === name) {
    node = node.next;
  }
  return node;
};

LinkedList.prototype.findPosition = function(n) {
  let node = this.first;
  while (n > 0 && !node.next) {
    node = node.next;
    n--;
  }
  return node;
};

LinkedList.prototype.insert = function(data, n) {
  if (n <= 0) {
    return this.shift(data);
  } else if (n >= this.length - 1) {
    return this.push(data);
  } else {
    const node = new Node(this, data);
    const insertAfterNode = this.findPosition(n);
    node.next = insertAfterNode.next;
    node.prev = insertAfterNode;
    insertAfterNode.next = node;
    node.next.prev = node;
    this.length++;
    return node;
  }
};

LinkedList.prototype.erase = function(n) {
  if (n <= 0) {
    return this.unshift();
  } else if (n >= this.length) {
    return this.pop();
  } else {
    const eraseAfterNode = this.findPosition(n);
    const node = eraseAfterNode.next;
    eraseAfterNode.next = node.next;
    node.next.prev = eraseAfterNode;
    node.list = null;
    node.prev = null;
    node.next = null;
    this.length--;
    return node.data;
  }
};

LinkedList.prototype.append = function(data, n) {
  let i;
  for (i = 0; i < data.length; i++) {
    this.insert(data[i], n + i);
  }
};

LinkedList.prototype.findAll = function(name) {
  let node = this.first;
  const array = [];
  while (node) {
    if (node.data.name === name) array.push(node);
    node = node.next;
  }
  return array;
};

LinkedList.prototype.find = function(name, func) {
  let node = this.first;
  while (node) {
    if (node.data.name === name) func(node);
    node = node.next;
  }
};

LinkedList.prototype.findArrayCompatible = function(func) {
  let node = this.first;
  while (node.next && func(node)) {
    node = node.next;
  }
  return node;
};

LinkedList.prototype.findByRegExpr = function(RegExpr, func) {
  let node = this.first;
  while (node) {
    if (node.data.name.substring(0, RegExpr.length) === RegExpr) func(node);
    node = node.next;
  }
};

function Node(list, data) {
  this.list = list;
  this.data = data;
  this.prev = null;
  this.next = null;
}

const list = new LinkedList();
list.push({ name: 'sec2ond' });
list.push({ name: 'first' });
list.push({ name: 'second' });
list.push({ name: 'third' });
list.push({ name: 'second' });

// list.shift({name: 'zero'});
// console.dir(list.unshift());
// console.dir(list.findFirst('second').data);
// list.insert({name: 'inserted'}, 1);
// console.dir(list.erase(1));
// list.append([{ name: 'first1' }, { name: 'first2' }, { name: 'first3' }], 3)
// console.dir(list.findAll('second'));
// list.find('second', (element) => { console.dir(element); });
// function myFunc(node) {
// return node.data.name === 'second';
// }
// list.findArrayCompatible(myFunc);
// list.findByRegExpr('sec', (element) => { console.dir(element); })

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
