class Program
    {
        static void Main(string[] args)
        {
            ListNode<int> first = new ListNode<int>(1);
            ListNode<int> second = new ListNode<int>(2);
            first.Next = second;
            ListNode<int> zero = new ListNode<int>(0, first);

            Console.WriteLine(zero.Value);
            Console.WriteLine(zero.Next.Value);
            Console.WriteLine(zero.Next.Next.Value);

            Console.ReadKey();
        }
    }
