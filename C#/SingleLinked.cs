using System;

namespace HowProgrammingWorks.CS.SingleLinkedList
{
    class Node<T>
    {
        public Node(T data)
            :  this(null, data)
        {            
        }

        public Node(Node<T> next, T data)
        {
            Next = next;
            Data = data;
        }

        public Node()
            : this(null, default(T))
        {
        }

        public Node<T> Next { get; set; }
        public T Data { get; set; }
    }

    class Example
    {
        public void Run()
        {
            var n6 = new Node<string>("road");
            var n5 = new Node<string>(n6, "the");
            var n4 = new Node<string>(n5, "across");
            var n3 = new Node<string>(n4, "running");
            var n2 = new Node<string>(n3, "was");
            var n1 = new Node<string>(n2, "cat");
            var n0 = new Node<string>(n1, "Black");

            var currentNode = n0;
            
            while (currentNode != null)
            {
                Console.Write($"{currentNode.Data} ");
                currentNode = currentNode.Next;
            }

            Console.WriteLine();
        }
    }
}
