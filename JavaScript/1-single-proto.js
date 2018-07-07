'use strict';

function Node(next, data) {
  this.next = next;
  this.data = data;
}

// Usage

const n3 = new Node(null, { name: 'third' });
const n2 = new Node(n3, { name: 'second' });
const n1 = new Node(n2, { name: 'first' });



console.dir(n1);
console.dir(n2);
console.dir(n3);
