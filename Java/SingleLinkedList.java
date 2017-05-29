
public class SingleLinkedList<T> {

    private Node last = null;

    private class Node {
        T item;
        Node previous;
    }

    public boolean isEmpty() { return last == null; }

    public void push(T item) {
        Node oldLast = last;
        last = new Node();
        last.item = item;
        last.previous = oldLast;
    }

    public T pop() {
        T item = null;
        if(!isEmpty()) {
            item = last.item;
            last = last.previous;
        }
        return item;
    }
}