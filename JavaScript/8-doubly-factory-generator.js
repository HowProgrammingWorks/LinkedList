'use strict';

const createNode = (data, next = null, prev = null) => ({ data, next, prev });

const createDoublyLinkedList = () => {
  const list = {
    head: null,
    length: 0,
    *traverse(node = list.head) {
      yield node;
      if (node && node.next !== null && typeof(node.next) === 'object') {
        yield* list.traverse(node.next);
      }
    },
    *[Symbol.iterator]() {
      for (const node of list.traverse()) {
        yield node && node.data;
      }
    },
    append(data) {
      if (!list.head) {
        list.head = createNode(data);
      } else {
        for (const node of list.traverse()) {
          if (!node.next) {
            node.next = createNode(data, null, node);
            break;
          }
        }
      }
      list.length++;
    },
    find(data) {
      for (const node of list.traverse()) {
        if (node && node.data === data) return node;
      }
    },
    getNth(index) {
      let count = 0;
      for (const node of list.traverse()) {
        if (count === index) return node;
        count++;
      }
    },
    prepend(data) {
      const node = createNode(data, list.head);
      if (list.head) list.head.prev = node;
      list.head = node;
      list.length++;
    },
    remove(data) {
      for (const node of list.traverse()) {
        if (node.data === data) {
          if (node === list.head) {
            list.head = node.next;
          } else {
            node.prev.next = node.next;
            if (node.next) {
              node.next.prev = node.prev;
            }
          }
          list.length--;
        }
      }
    },
  };

  return list;
};

const list = createDoublyLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(4);
list.remove(3);
console.log(list.find(1)); // { data: 1 }
console.log(list.getNth(0)); // { data: 4 }
console.log(list.length); // 3
console.log([...list]); // [4, 1, 2]

