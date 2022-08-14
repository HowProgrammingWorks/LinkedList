using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LinkedList
{
    class SingleLinkedList<T>
    {
        private Node last = null;

        private class Node
        {
            internal T item;
            internal Node previous;
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
        }

        public List<T> returnList()
        {
            List<T> res = new List<T>();
            Node temp = last;
            T item = default(T);
            while (!isEmpty())
            {
                item = last.item;
                last = last.previous;
                res.Add(item);
            }
            last = temp;
            return res;
        }
    }
}
