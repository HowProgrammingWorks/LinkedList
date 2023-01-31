
public class DoubleLinkedList<T> implements LinkedList<T> {

    private Node last = null;

    private class Node {
        private T item;
        private Node next;
        private Node previous;
    }

    public boolean isEmpty() {
        return last == null;
    }

    public void push(final T item) {
        Node oldLast = last;
        last = new Node();
        last.item = item;
        last.previous = oldLast;
        if (oldLast != null) {
            oldLast.next = last;
        }
    }

    public T pop() {
        T item = null;
        if (!isEmpty()) {
            item = last.item;
            last = last.previous;
            if (last != null) {
                last.next = null;
            }
        }
        return item;
    }
}
