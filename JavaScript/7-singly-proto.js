'use strict';

const getNext = Object.getPrototypeOf;

const createNode = (value, next) => {
  const node = Object.create(next);
  node.value = value;
  return node;
};

const createList = () => ({
  head: null,
  size: 0,
});

const prepend = (list, value) => {
  list.head = createNode(value, list.head);
  list.size++;
  return list;
};

const shift = (list) => {
  const node = list.head;
  if (node === null) return undefined;

  list.head = getNext(node);
  list.size--;

  return node.value;
};

const first = (list) => {
  const node = list.head;
  return node === null ? undefined : node.value;
};

const isEmpty = (list) => list.head === null;

const forEach = (list, callback) => {
  let node = list.head;
  let index = 0;

  while (node !== null) {
    callback(node.value, index);
    node = getNext(node);
    index++;
  }
};

const find = (list, predicate) => {
  let node = list.head;
  let index = 0;

  while (node !== null) {
    const value = node.value;
    if (predicate(value, index)) return value;

    node = getNext(node);
    index++;
  }

  return undefined;
};

const toArray = (list) => {
  const result = new Array(list.size);
  let node = list.head;
  let index = 0;

  while (node !== null) {
    result[index] = node.value;
    node = getNext(node);
    index++;
  }

  return result;
};

const fromArray = (values) => {
  const list = createList();

  for (let i = values.length - 1; i >= 0; i--) {
    prepend(list, values[i]);
  }

  return list;
};

module.exports = {
  createList,
  prepend,
  shift,
  first,
  isEmpty,
  forEach,
  find,
  toArray,
  fromArray,
};
