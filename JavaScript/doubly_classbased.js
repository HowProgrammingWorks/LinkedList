'use strict';


class Node {

  constructor(data, prev, next) {
    this.data = data;
    this.prev = prev || null;
    this.next = next || null;
  }

  toString() {
    let repr = this.data;
    if (this.next) {
      repr += ' -> ' + this.next.toString();
    }
    return repr;
  }
}


class LinkedList {

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  toString() {
    if (!this.head) return;
    return this.head.toString();
  }

  print() {
    console.log(this.toString());
  }

  isEmpty() {
    return !!this.length;
  }


  push(data) {
    if (this.length === 0) {
      this.head = new Node(data);
      this.tail = this.head;
    } else {
      this.tail.next = new Node(data, this.tail);
      this.tail = this.tail.next;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (!this.tail) {
      return;
    }

    let data = this.tail.data;
    this.tail = this.tail.prev;
    this.tail.next = null;
    this.length -= 1;
    return data;
  }

  findFirst(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  findAll(data) {
    let current = this.head;
    let nodes = [];
    while (current) {
      if (current.data === data) {
        nodes.push(current);
      }
      current = current.next;
    }
    return nodes;
  }

  find(data, callback) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        callback(current);
      }
      current = current.next;
    }
  }

  findReg(regex) {
    let current = this.head;
    let nodes = [];
    while (current) {
      if (current.data.toString().match(regex)) {
        nodes.push(current);
      }
      current = current.next;
    }
    return nodes;
  }

  map(func) {
    let current = this.head;
    while (current) {
      current.data = func(current.data);
      current = current.next;
    }
    return this;
  }

  filter(func) {
    let filtered = new LinkedList();
    let current = this.head;
    while (current) {
      if (func(current.data)) {
        filtered.push(current.data);
      }
      current = current.next;
    }
    return filtered;
  }

  reduce(func) {
    let reduced = this.head.data || null;
    let current = this.head;
    while (current && current.next) {
      reduced = func(reduced, current.next.data);
      current = current.next;
    }
    return reduced;
  }

  flatten() {
  /*
  Flatten the list
  from
    element1 -> LinkedList(element2, LinkedList(element3)) -> element4
  to
    element1 -> element2 -> element3 -> element4
  */
    let current = this.head;
    while (current) {
      if (typeof(current.data) === 'LinkedList') {
        current.data = current.data.flatten();
        while (!current.data.isEmpty()) {
          let temp = current.data.pop();
          temp.prev = current.prev;
          temp.next = current.next;
          current.prev.next = current.next.prev = temp;
        }
      }
      current = current.next;
    }
    return this;
  }
}
