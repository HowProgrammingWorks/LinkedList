using System;

namespace HowProgrammingWorks.CS
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Clear();

            Console.WriteLine("Linked list");
            new SingleLinkedList.Example().Run();
            Console.WriteLine();

            Console.WriteLine("Double linked list");
            new DoubleLinkedList.Example().Run();
            Console.WriteLine();
        }
    }
}
