'use strict';

// Node of the doubly-linked list
//   _data - value of the list element
//     _prev - pointer to the previus node
//     _next - pointer to the next node
//
function Node(data) {
  this._data = data;
  this._prev = null;
  this._next = null;
}

// Implentation of the LinkedList
//   args - array of values the LinkedList will be initialized with
//     _length - size of the list
//     _head - pointer to the first node
//     _tail - pointer to the last node
//
function LinkedList(...args) {
  this._length = 0;
  this._head = null;
  this._tail = null;
  if (args.length > 0) this.extend(args);  
}

// Function for adding values to the end of the LinkedList
//   data - value of the list element
//
LinkedList.prototype.append = function(data) {
  let node = new Node(data);
  node._prev = this._tail;
  if (this._length === 0) this._head = node;
  else this._tail._next = node;
  this._tail = node;
  this._length++;
  return node;
};

// Function for extending current LinkedList with values
//   args - array of values the LinkedList will be extended with
//
LinkedList.prototype.extend = function(...args) {
  for (let i = 0; i < args.length; i++) {
    this.append(args[i]);
  }
};

// Function for printing current LinkedList
//
LinkedList.prototype.print = function() {
  if (this._length > 0) {
    let node = this._head;
    console.dir(node._data);
    while (node._next != null) {
      node = node._next;
      console.dir(node._data);
    }
  } else {
    console.log('list is empty');
  }
};

// Function that returns current LinkedList length
//
LinkedList.prototype.length = function() {
  return this._length;
};

// Function for pulling last element from the LinkedList
//
LinkedList.prototype.pop = function() {
  if (this._length > 0) {
    let node = this._tail;
    this._tail = node._prev;
    node._prev = null;
    node._next = null;
    this._length--;
    return node._data;
  } else {
    console.log('list is empty');
  }
};

// Function that remove all elements from the LinkedList
//
LinkedList.prototype.clear = function() {
  if (this._length > 0) {
    let node = this._tail;
    while (node != null) {
      if (node._next != null) node._next = null;
      if (node._prev != null) node = node._prev;
      else node = null;
    }
    this._head = null;
    this._tail = null;
    this._length = 0;
  } else {
    console.log('list is empty');
  }
};

// Function that swapping elements by their indices
//   id1 - index of first element
//   id2 - index of second element
//
LinkedList.prototype.swap = function(id1, id2) {
  let node1 = this._head;
  let node2 = this._head;
  for (let i = 0; i < id1; i++) {
    node1 = node1._next;
  }
  for (let j = 0; j < id2; j++) {
    node2 = node2._next;
  }
  let tmp = node1._data;
  node1._data = node2._data;
  node2._data = tmp;
};
