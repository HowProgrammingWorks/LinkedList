'use strict';

const list = () => {
  let element, firstEl;
  return {
    push(data) {
      element = {
        prev: element || null, data
      };
      if (!firstEl) {
        firstEl = element;
      };
      if (element.prev) element.prev.next = element;
      return element;
    },
    last: () => element,
    first: () => firstEl,
    [Symbol.iterator]: () => ({
      current: firstEl,
      next() {
        const element = this.current;
        if (!element) return {
          done: true,
          value: null
        };
        this.current = element.next;
        return {
          done: false,
          value: element.data
        };
      }
    })
  };
};

// Usage

const obj1 = { name: 'first' };
const obj2 = { name: 'second' };
const obj3 = { name: 'third' };

const l1 = list();
l1.push(obj1);
l1.push(obj2);
l1.push(obj3);

console.dir(l1.first());

console.dir([...l1]);

for (const element of l1) {
  console.log(element);
}
