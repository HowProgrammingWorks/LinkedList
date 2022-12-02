'use strict';

const node = (data) => {
  const element = (data) => {
    const next = node(data);
    next.prev = element;
    next.prev.last = next;
    return next;
  };
  element.data = data;
  return element;
};

// Usage

const obj1 = { name: 'first' };
const obj2 = { name: 'second' };
const obj3 = { name: 'third' };

const list = node(obj1)(obj2)(obj3);

console.dir(list);
