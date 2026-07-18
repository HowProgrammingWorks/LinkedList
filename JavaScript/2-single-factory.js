'use strict';

const node = (next, data) => ({ next, data });

// Usage

const n3 = node(null, { name: 'third' });
const n2 = node(n3, { name: 'second' });
const n1 = node(n2, { name: 'first' });



console.dir(n1);
console.dir(n2);
console.dir(n3);
