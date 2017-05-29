
public class DoubleLinkedList<T> {

    private Node last = null;

    private class Node {
        T item;
        Node next;
        Node previous;
    }

    public boolean isEmpty() { return last == null; }

    public void push(T item) {
        Node oldLast = last;
        last = new Node();
        last.item = item;
        last.previous = oldLast;
        if(oldLast!=null)
        {
            oldLast.next = last;
        }
    }

    public T pop() {
        T item = null;
        if(!isEmpty()) {
            item = last.item;
            last = last.previous;
            if(last!=null) {
                last.next = null;
            }
        }
        return item;
    }
}
