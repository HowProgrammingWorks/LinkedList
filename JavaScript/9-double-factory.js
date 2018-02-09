'use strict';

const node = (prev, data) => {
  const next = null;
  const element = { prev, data, next };
  if(prev) prev.next = element;
  return element;
}

// Usage

const n1 = node(null, { name: 'first' });
const n2 = node(n1, { name: 'second' });
const n3 = node(n2, { name: 'third' });

console.dir(n1);
console.dir(n2);
console.dir(n3);
