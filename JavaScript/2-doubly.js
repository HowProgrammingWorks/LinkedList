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
  if (this.length > 0) {
    const node = this.first;
    this.first = node.next;
    node.list = null;
    node.prev = null;
    node.next = null;
    this.length--;
    return node.data;
  }
};

LinkedList.prototype.findFirst = function(name){
  return this.first.search(name);
}

LinkedList.prototype.insert = function (data, n) {
  if (n <= 0){
    return this.shift(data);
  }else if (n >= this.length) {
    return this.push(data);
  }
  else {
    const node = new Node(this, data);
    const insertAfterNode = this.first.searchPlace(n);
    node.next = insertAfterNode.next;
    node.prev = insertAfterNode;
    insertAfterNode.next = node;
    node.next.prev = node;
    this.length++;
    return node;
  }
};

LinkedList.prototype.erase = function(n){
  if (n <= 0){
    return this.unshift(data);
  }else if (n >= this.length) {
    return this.pop(data);
  }
  else {
    const eraseAfterNode = this.first.searchPlace(n);
    const node = eraseAfterNode.next;
    eraseAfterNode.next = node.next;
    node.next.prev = eraseAfterNode;
    node.list = null;
    node.prev = null;
    node.next = null;
    this.length--;
    return node.data;
  }
}

LinkedList.prototype.append = function(data, n){
  for (var i = 0; i < data.length; i++) {
    this.insert(data[i], n + i);
  }
}

LinkedList.prototype.findAll = function(name){
  return list.first.searchAll(name);
}

LinkedList.prototype.find = function(name, func){
  let array = [];
  array = list.first.searchAll(name);
  array.forEach(func);
}

function Node(list, data) {
  this.list = list;
  this.data = data;
  this.prev = null;
  this.next = null;
}

Node.prototype.search = function(name){
  if(this.data.name === name){
    return this;
  }else if(this.next !== null){
    return this.next.search(name);
  }
}

Node.prototype.searchAll = function(name){
  let array = [];
  if(this.next !== null){
    array = this.next.searchAll(name);
  }
  if(this.data.name === name){
    array.push(this);
  }
  return array;
}

Node.prototype.searchPlace = function(n){
  if(this.next === null){ return null;}
  if(n === 0) {return this;}
  else {return this.next.searchPlace(n - 1);}
}

const list = new LinkedList();
list.push({ name: 'second' });
list.push({ name: 'first' });
list.push({ name: 'second' });
list.push({ name: 'third' });
list.push({ name: 'second' });

// list.shift({name: 'zero'});
//console.dir(list.unshift());
// console.dir(list.findFirst('second').data);
// console.dir(list.first.searchPlace(1).data);
//list.insert({name: 'inserted'}, 1);
// console.dir(list.erase(1));
//list.append([{ name: 'first1' }, { name: 'first2' }, { name: 'first3' }], 1)
// console.dir(list.first.searchAll('second'));
// console.dir(list.findAll);
list.find('second', (element) => {console.dir(element)});

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
