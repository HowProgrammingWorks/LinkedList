'use strict';

// Node of the doubly-linked list
//   _data - value of the list element
//     _prev - pointer to the previus node
//     _next - pointer to the next node
//
function Node(data) {
  this.data = data;
  this.prev = null;
  this.next = null;
}

// Implentation of the LinkedList
//   args - array of values the LinkedList will be initialized with
//     _length - size of the list
//     _head - pointer to the first node
//     _tail - pointer to the last node
//
function LinkedList(...args) {
  this.length = 0;
  this.head = null;
  this.tail = null;
  if (args.length > 0) this.extend(args);  
}

// Function for adding values to the end of the LinkedList
//   data - value of the list element
//
LinkedList.prototype.append = function(data) {
  let node = new Node(data);
  node.prev = this.tail;
  if (this.length === 0) this.head = node;
  else this.tail.next = node;
  this.tail = node;
  this.length++;
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
  if (this.length > 0) {
    let node = this.head;
    console.dir(node.data);
    while (node.next != null) {
      node = node.next;
      console.dir(node.data);
    }
  } else {
    console.log('list is empty');
  }
};

// Function that returns current LinkedList length
//
LinkedList.prototype.length = function() {
  return this.length;
};

// Function for pulling last element from the LinkedList
//
LinkedList.prototype.pop = function() {
  if (this.length > 0) {
    let node = this.tail;
    this.tail = node.prev;
    node.prev = null;
    node.next = null;
    this.length--;
    return node.data;
  } else {
    console.log('list is empty');
  }
};

// Function that remove all elements from the LinkedList
//
LinkedList.prototype.clear = function() {
  if (this.length > 0) {
    let node = this.tail;
    while (node != null) {
      if (node.next != null) node.next = null;
      if (node.prev != null) node = node.prev;
      else node = null;
    }
    this.head = null;
    this.tail = null;
    this.length = 0;
  } else {
    console.log('list is empty');
  }
};

// Function that swapping elements by their indices
//   id1 - index of first element
//   id2 - index of second element
//
LinkedList.prototype.swap = function(id1, id2) {
  let node1 = this.head;
  let node2 = this.head;
  for (let i = 0; i < id1; i++) {
    node1 = node1.next;
  }
  for (let j = 0; j < id2; j++) {
    node2 = node2.next;
  }
  let tmp = node1.data;
  node1.data = node2.data;
  node2.data = tmp;
};
