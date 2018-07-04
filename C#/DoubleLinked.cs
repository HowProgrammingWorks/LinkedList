using System;

namespace HowProgrammingWorks.DoubleLinkedList
{
    class DoubleLinkedList<T>
    {

        public int Length { get; private set; }

        public Node<T> First { get; private set; }

        public Node<T> Last { get; private set; }

        public Node<T> Push(T data)
        {
            var node = new Node<T>(this, data);
            node.Previous = this.Last;

            if (this.Length == 0) this.First = node;
            else this.Last.Next = node;

            this.Last = node;
            this.Length++;

            return node;
        }

        public T Pop()
        {
            if (this.Length == 0)
                return default(T);

            var node = this.Last;

            this.Last = node.Previous;

            node.List = null;
            node.Previous = null;
            node.Next = null;

            this.Length--;

            return node.Data;
        }

    }

    class Node<T>
    {
        public DoubleLinkedList<T> List { get; set; }
        public Node<T> Previous { get; set; }
        public Node<T> Next { get; set; }
        public T Data { get; set; }

        public Node(DoubleLinkedList<T> list, T data)
            : this(list, null, null, data)
        {
        }

        protected Node(DoubleLinkedList<T> list, Node<T> previous, Node<T> next, T data)
        {
            List = List;
            Data = data;
            Next = next;
            Previous = previous;
        }
    }

    public class Example
    {
        public void Run()
        {
            var list = new DoubleLinkedList<string>();

            list.Push("road");
            list.Push("the");
            list.Push("across");
            list.Push("running");
            list.Push("was");
            list.Push("cat");
            list.Push("Black");

            while (list.Length > 0)
            {
                Console.Write($"{list.Pop()} ");
            }

            Console.ReadKey();
        }
    }
}
