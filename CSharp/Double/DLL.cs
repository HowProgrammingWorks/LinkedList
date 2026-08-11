public class DLL<T> : System.Collections.Generic.IEnumerable<T>
    {
        private ListNode<T> _head;
        private ListNode<T> _tail;

        public int Count { get; private set; }
        /// <summary>
        /// Adding new node to tail of list
        /// </summary>
        /// <param name="value">Value for new node</param>
        public void Add(T value)
        {
            ListNode<T> _tmpNode = new ListNode<T>(value);
            if (_head == null)
            {
                _head = _tmpNode;
                _tail = _tmpNode;
            }
            else
            {
                _tail.Next = _tmpNode;
                _tail.Next.Previous = _tail;
                _tail = _tmpNode;
            }
            Count++;
        }

        /// <summary>
        /// Make your list clear
        /// </summary>
        public void Clear()
        {
            _head = null;
            _tail = null;
            Count = 0;
        }

        /// <summary>
        /// Removing node by value from list
        /// </summary>
        /// <param name="value">Value of node</param>
        /// <returns></returns>
        public bool Remove(T value)
        {
            ListNode<T> previous = null;
            ListNode<T> current = _head;

            while (current != null)
            {
                if (current.Value.Equals(value))
                {

                    if (previous != null)
                    {
                        previous.Next = current.Next;
                        current.Next.Previous = current.Previous;
                        
                        if (current.Next == null)
                        {
                            _tail = previous;
                        }
                    }
                    else
                    {
                        _head = _head.Next;               

                        if (_head == null)
                        {
                            _tail = null;
                        }
                    }

                    Count--;
                    return true;
                }
                previous = current;
                current = current.Next;
            }
            return false;
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return ((IEnumerable<T>)this).GetEnumerator();
        }

        public IEnumerator<T> GetEnumerator()
        {
            ListNode<T> current = _head;

            while (current != null)
            {
                yield return current.Value;
                current = current.Next;
            }
        }
    }
