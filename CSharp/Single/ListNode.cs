public class ListNode<T>
    {
        public T Value { get; set; }
        public ListNode<T> Next { get; set; }

        public ListNode(T value)
        {
            Value = value;
        }

        public ListNode(T value, ListNode<T> next)
        {
            Value = value;
            Next = next;
        }
    }
