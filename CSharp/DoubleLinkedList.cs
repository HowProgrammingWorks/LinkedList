using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LinkedList
{
    class DoubleLinkedList<T>
    {
        private Node last = null;

        private class Node
        {
            public T item;
            public Node next;
            public Node previous;
        }

        public bool isEmpty()
        {
            return last == null;
        }

        public void addNode(T item)
        {
            Node oldLast = last;
            last = new Node();
            last.item = item;
            last.previous = oldLast;
            if (oldLast != null)
            {
                oldLast.next = last;
            }
        }

        public List<T> printList()
        {
            List<T> res = new List<T>();
            T item = default(T);
            while (!isEmpty())
            {
                item = last.item;
                last = last.previous;
                res.Add(item);
            }
            return res;
        }
    }
}
