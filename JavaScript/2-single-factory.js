'use strict';

const node = (prev, data) => ({ prev, data });

// Usage

const n1 = node(null, { name: 'first' });
const n2 = node(n1, { name: 'second' });
const n3 = node(n2, { name: 'third' });

console.dir(n1);
console.dir(n2);
console.dir(n3);
