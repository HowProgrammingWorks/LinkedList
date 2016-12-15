public class ListNode<T>
    {
        public T Value { get; set; }
        public ListNode<T> Previous { get; internal set; }
        public ListNode<T> Next { get; internal set; }

        public ListNode(T value)
        {
            Value = value;
        }
    }
