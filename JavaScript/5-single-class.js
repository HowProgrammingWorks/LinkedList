'use strict';

class List {
  constructor() {
    this.last = null;
  }
  push(data) {
    const prev = this.last;
    const element = { prev, data };
    this.last = element;
    return element;
  }
}

// Usage

const obj1 = { name: 'first' };
const obj2 = { name: 'second' };
const obj3 = { name: 'third' };

const list = new List();
list.push(obj1);
list.push(obj2);
list.push(obj3);

console.dir(list.last, { depth: 3 });
