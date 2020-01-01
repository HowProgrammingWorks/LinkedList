const createNode = (data, next = null) => ({ data, next })

const createLinkedList = () => {
  const list = {
    head: null,
    length: 0,
    *traverse(node = list.head) {
      yield node
      if (node.next !== null && typeof (node.next) === "object") {
        yield* list.traverse(node.next)
      }
    },
    *[Symbol.iterator]() {
      for (const node of list.traverse()) {
        yield node.data
      }
    },
    append(data) {
      if (!list.head) {
        list.head = createNode(data)
        list.length++
      } else {
        for (const node of list.traverse()) {
          if (!node.next) {
            node.next = createNode(data)
            list.length++
            break
          }
        }
      }
    },
    find(data) {
      for (const node of list.traverse()) {
        if (node.data === data) return node
      }
    },
    getNth(index) {
      let count = 0
      for (const node of list.traverse()) {
        if (count === index) return node
        count++
      }
    },
    prepend(data) {
      const newNode = { data }
      newNode.next = list.head
      list.head = newNode
      list.length++
    },
    remove(data) {
      let prev = null
      for (const node of list.traverse()) {
        if (node.data === data) {
          if (node === list.head) {
            list.head = node.next
          } else {
            prev.next = node.next
          }
          list.length--
        }
        prev = node
      }
    },
  }

  return list
}

const list = createLinkedList()
list.append(1)
list.append(2)
list.append(3)
list.prepend(4)
list.remove(3)
console.log(list.find(1)) // { data: 1 }
console.log(list.getNth(0)) // { data: 4 }
console.log(list.length) // 3
console.log([...list]) // [4, 1, 2]
