
const Node = (value, next = null) => ({
  value,
  next,
});

const LinkedList = () => {
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
        node.next = Node(value);
      }
    },
    
    remove(value) {
      let prev = null;
      let node = list.head;
      
      while (node) {
        if (node.value === value) {
          if (node === list.head) {
            list.head = node.next;
          } else {
            prev.next = node.next;
          }
        }
        prev = node;
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

const list = LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.remove(3);

for (item of list) {
  console.log(item);
}

