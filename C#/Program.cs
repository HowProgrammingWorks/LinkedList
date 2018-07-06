using System;

namespace HowProgrammingWorks.CS
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Clear();

            var singleLinkedListExample = new SingleLinkedList.Example();
            var doubleLinkedListExample = new DoubleLinkedList.Example();

            singleLinkedListExample.Run();
            doubleLinkedListExample.Run();
        }
    }
}
