'use strict';

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class List {
  constructor() {
    this.first = null;
    this.last = null;
  }

  getNthNode(index) {
    if (Math.abs(index) > this.length()) return null;
    let pos, next, curr;
    if (index >= 0) {
      curr = this.first;
      next = 'next';
      pos = index;
    } else {
      curr = this.last;
      next = 'prev';
      pos = ~index;
    }
    for (let i = 0; i < pos; i++) {
      curr = curr[next];
    }
    return curr;
  }

  append(data) {
    if (!this.last) {
      this.last = new Node(data);
      this.first = this.last;
      return this;
    }
    const newNode = new Node(data);
    this.last.next = newNode;
    newNode.prev = this.last;
    this.last = newNode;
    return this;
  }

  insert(index, data) {
    const len = this.length();
    if (len === 0 || index > len) {
      return this.append(data);
    }
    if (index === 0 || -index > len) {
      return this.prepend(data);
    }
    const pos = (index > 0) ? index : ++index;
    const nextNode = this.getNthNode(pos);
    const prevNode = nextNode.prev;
    const newNode = new Node(data);
    prevNode.next = newNode;
    nextNode.prev = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    return this;
  }

  delete(index) {
    let nodeToDelete = this.getNthNode(index);
    if (nodeToDelete) {
      const prevNode = nodeToDelete.prev;
      const nextNode = nodeToDelete.next;
      if (prevNode) prevNode.next = nextNode;
      if (nextNode) nextNode.prev = prevNode;
      nodeToDelete = undefined;
    }
    return this;
  }

  prepend(data) {
    if (!this.last) {
      this.last = new Node(data);
      this.first = this.last;
      return this;
    }
    const newNode = new Node(data);
    this.first.prev = newNode;
    newNode.next = this.first;
    this.first = newNode;
    return this;
  }

  clone() {
    const newList = new List();
    for (const data of this) {
      if (typeof data === 'object') {
        if (Array.isArray(data)) {
          newList.append([...data]);
        } else {
          const newObject = Object.assign({}, data);
          newList.append(newObject);
        }
      } else {
        newList.append(data);
      }
    }
    return newList;
  }

  length() {
    return [...this].length;
  }

  compare(second) {
    if (this.length() !== second.length()) return false;
    const secondIterator = second[Symbol.iterator]();

    for (const data of this) {
      const secondData = secondIterator.next().value;
      if (typeof data !== typeof secondData)
        return false;
      if (typeof data === 'object') {
        const keys = Object.keys;
        if (Array.isArray(data)) {
          if (data.length !== secondData.length)
            return false;
        } else if (keys(data).length !== keys(secondData).length)
          return false;
        for (const i in data) {
          if (data[i] !== secondData[i])
            return false;
        }
      } else if (data !== secondData) return false;
    }
    return true;
  }

  find(fn) {
    for (const data of this) {
      if (fn(data)) return data;
    }
    return null;
  }

  filter(fn) {
    const newList = new List();
    for (const data of this) {
      if (fn(data)) newList.append(data);
    }
    return newList;
  }

  map(fn) {
    const newList = new List();
    for (const data of this) {
      newList.append(fn(data));
    }
    return newList;
  }

  includes(data) {
    if (this.find(item => (item === data))) return true;
    return false;
  }

  indexOf(data) {
    let i = 0;
    for (const item of this) {
      if (item === data) return i;
      i++;
    }
    return -1;
  }

  glue(second) {
    const newList = new List();
    for (const data of this) {
      if (typeof data === 'object') {
        if (Array.isArray(data)) {
          newList.append([...data]);
        } else {
          const newObject = Object.assign({}, data);
          newList.append(newObject);
        }
      } else {
        newList.append(data);
      }
    }
    for (const data of second) {
      if (typeof data === 'object') {
        if (Array.isArray(data)) {
          newList.append([...data]);
        } else {
          const newObject = Object.assign({}, data);
          newList.append(newObject);
        }
      } else {
        newList.append(data);
      }
    }
    return newList;
  }

  [Symbol.iterator]() {
    let curr = this.first;
    let data;

    return {
      next: () => {
        if (curr) {
          data = curr.data;
          curr = curr.next;
          return {
            done: false,
            value: data
          };
        }

        return { done: true };
      },
    };
  }
}

module.exports = List;