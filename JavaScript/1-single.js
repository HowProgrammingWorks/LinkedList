'use strict';

function Node(next, data) {
  this.next = next;
  this.data = data;
}

function List() {
  this.first = null;
}

List.prototype.pushFront = function(data) {
  this.first = new Node(this.first, data);
};

List.prototype.forEach = function(func) {
  let i = this.first;
  while (i) {
    func(i.data);
    i = i.next;
  }
};

List.prototype.pop = function() {
  if (!this.first) throw 'Null pointer exception';
  let temp = this.first;
  this.first = this.first.next;
  return temp.data;
};

List.prototype.top = function() {
  if (!this.first) throw 'Null pointer exception';
  return this.first.data;
};

let testList = new List();

testList.pushFront(1);
testList.pushFront(2);
testList.pushFront(3);

testList.forEach(console.dir);

console.dir(testList.top());
console.dir(testList.top());
console.dir(testList.pop());
console.dir(testList.pop());
console.dir(testList.pop());
