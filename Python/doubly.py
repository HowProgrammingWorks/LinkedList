"""Doubly linked list implementation"""

class Node:
    """
    Class for node.

    'list' for reference to the linked list, 'data' for storing data,
    'prev' for pointing on previous node, 'next' - for the next one
    """
    def __init__(self, lst, data):
        self.lst = lst
        self.data = data
        self.prev = None
        self.next = None


class LinkedList:
    """Class for doubly linked list"""
    def __init__(self):
        self.first = None
        self.last = None
        self.length = 0

    def push(self, data):
        """
        A method to push data into the list through creating a new node.

        First, it creates a new node with given data. Then it assigns
        previous node of the new one to the last node of the list.
        If the list is empty then the new node becomes a first node.
        If not, it creates a link in the last node of the list to the new one.
        After it, the new node becomes a last one in the list and length
        of the list increments.
        """
        new_node = Node(self, data)
        new_node.prev = self.last
        if self.length == 0:
            self.first = new_node
        else:
            self.last.next = new_node
        self.last = new_node
        self.length += 1
        return new_node

    def pop(self):
        """
        A method that returns data from node and removes it.

        If list is not empty then it finds the last node, afterwards
        it reassigns last node of the list with the previous one. Then,
        it stores data, removes node and returns data.
        """
        if self.length > 0:
            node = self.last
            self.last = node.prev
            data = node.data
            del node
            self.length -= 1
            return data

ll = LinkedList()

ll.push({'name': 'first'})
ll.push({'name': 'second'})
ll.push({'name': 'third'})

print(ll.pop())
print(ll.pop())
print(ll.pop())
print(ll.pop()) # Trying to pop empty list

ll.push({'name': 'uno'})
ll.push({'name': 'due'})
print(ll.pop()) # Printing and deleting last element of the list, 'due'
ll.push({'name': 'tre'})
print(ll.pop())
print(ll.pop())
