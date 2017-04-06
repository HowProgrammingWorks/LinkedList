"""Implementation of singly linked list"""

class Node:
    """Node class. 'Data' stores data in node, 'next' points to the next node"""
    def __init__(self):
        self.data = None
        self.next = None


class LinkedList:
    """Singly linked list class"""
    def __init__(self):
        self.current_node = None

    def add_node(self, data):
        """
        A method for adding a new node and write data in it.

        First, it creates new node. Then it stores data in the new node.
        After it, method links new node to the previous one, in this case
        the previous one is the current one. Then the current node becomes
        the new one.
        """
        new_node = Node()
        new_node.data = data
        new_node.next = self.current_node
        self.current_node = new_node

    def print_list(self):
        """A method to iterate through the list and print all data"""
        node = self.current_node
        while node:
            print(node.data)
            node = node.next


my_ll = LinkedList()
my_ll.add_node({'name': 'first'})
my_ll.add_node({'name': 'second'})
my_ll.add_node({'name': 'third'})

my_ll.print_list()
