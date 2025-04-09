'use strict';

const list = () => {
  let element;
  return {
    push(data) {
      element = {
        prev: element,
        data,
      };
      return element;
    },

    last: () => element,

    [Symbol.iterator]: () => ({
      current: element,
      next() {
        const element = this.current;
        if (!element) {
          return {
            done: true,
            value: null,
          };
        }
        this.current = element.prev;
        return {
          done: false,
          value: element.data,
        };
      },
    }),
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

console.dir(l1.last());

console.dir([...l1]);

for (const element of l1) {
  console.log(element);
}
