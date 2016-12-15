class Program
    {
        static void Main(string[] args)
        {
            DLL<int> instance = new DLL<int> { };

            #region Adding items

            instance.Add(12);
            instance.Add(15);
            instance.Add(20);
            instance.Add(25);

            Display(instance, "List");

            #endregion

            #region Removing item

            instance.Remove(20);

            Display(instance, "20 was removed");

            #endregion
            
            #region Clearing list

            instance.Clear();
            Display(instance, "List is cleared");

            #endregion

            Console.ReadKey();
        }

        public static void Display(DLL<int> words, string test)
        {
            Console.WriteLine(test);
            foreach (int word in words)
            {
                Console.Write(word + " ");
            }
            Console.WriteLine();
            Console.WriteLine();
        }
    }
