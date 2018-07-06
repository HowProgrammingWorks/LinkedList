using System;

namespace HowProgrammingWorks.CS.SingleLinkedList
{
    class Node<T>
    {
        public Node(T data)
            :  this(null, data)
        {            
        }

        public Node(Node<T> previous, T data)
        {
            Previous = previous;
            Data = data;
        }

        public Node()
            : this(null, default(T))
        {
        }

        public Node<T> Previous { get; set; }
        public T Data { get; set; }
    }

    class Example
    {
        public void Run()
        {
            var n0 = new Node<string>("road");
            var n1 = new Node<string>(n0, "the");
            var n2 = new Node<string>(n1, "across");
            var n3 = new Node<string>(n2, "running");
            var n4 = new Node<string>(n3, "was");
            var n5 = new Node<string>(n4, "cat");
            var n6 = new Node<string>(n5, "Black");

            var currentNode = n6;
            
            while (currentNode != null)
            {
                Console.Write($"{currentNode.Data} ");
                currentNode = currentNode.Previous;
            }

            Console.ReadKey();
        }
    }
}
