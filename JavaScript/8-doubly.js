
const Node = (value, prev = null, next = null) => ({
  value,
  prev,
  next,
});

const DoublyLinkedList = () => {
  const list = {
    head: null,
    
    append(value) {
      if (!list.head) {
        list.head = Node(value)
      } else {
        let node = list.head;
        while (node.next) {
          node = node.next;
        }
        node.next = Node(value, node);
      }
    },
    
    remove(value) {
      let node = list.head;
      
      while (node) {
        if (node.value === value) {
          if (node === list.head) {
            list.head = node.next;
          } else {
            node.prev.next = node.next;
            if (node.next) {
              node.next.prev = node.prev;
            }
          }
        }
        node = node.next;
      }
    },
    
    [Symbol.iterator]: function* () {
      let node = list.head;
      while (node) {
        yield node.value;
        node = node.next;
      }
    }
  };
  return list;
};

// Usage

const list = DoublyLinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.remove(3);

for (item of list) {
  console.log(item);
}

