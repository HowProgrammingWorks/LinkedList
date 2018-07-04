using System;

namespace HowProgrammingWorks
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Clear();

            var singleLinkedListExample = new HowProgrammingWorks.SingleLinkedList.Example();
            var doubleLinkedListExample = new HowProgrammingWorks.DoubleLinkedList.Example();
            
            //singleLinkedListExample.Run();

            doubleLinkedListExample.Run();
        }
    }
}
