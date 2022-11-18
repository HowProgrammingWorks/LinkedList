package Java;

import java.util.Arrays;

public class DequeExample {

    static class Deque {

        private Element first;

        private Element last;

        private int count;

        public void push(final String value) {
            final Element element = new Element(last, null, value);
            last = element;
            count++;
            if (count == 1) {
                first = last;
            } else {
                last.prev.next = element;
            }

        }

        public String pop() {
            if (count == 0) {
                throw new NullPointerException("Deque is empty");
            }
            final Element result = last;
            last = last.prev;
            count--;
            if (count == 0 || count == 1) {
                first = last;
            } else {
                last.next = null;
            }
            return result.value;
        }

        public void unshift(final String value) {
            final Element element = new Element(null, first, value);
            first = element;
            count++;
            if (count == 1) {
                last = first;
            } else {
                first.next.prev = element;
            }
        }

        public String shift() {
            if (count == 0) {
                throw new NullPointerException("Deque is empty");
            }
            final Element result = first;
            first = first.next;
            count--;
            if (count == 0 || count == 1) {
                last = first;
            } else {
                first.prev = null;
            }
            return result.value;
        }

        public String[] asArray() {
            final String[] result = new String[count];
            Element current = first;
            for (int i = 0; i < count; i++) {
                result[i] = current.value;
                current = current.next;
            }
            return result;
        }


        private static class Element {

            private Element prev;

            private Element next;

            private final String value;

            private Element(final Element prev,
                            final Element next,
                            final String value) {
                this.prev = prev;
                this.next = next;
                this.value = value;
            }
        }
    }

    // Usage
    public static void main(final String[] args) {
        final Deque list = new Deque();
        list.push("first");
        list.push("second");
        list.push("third");

        String[] array = list.asArray();
        System.out.println(Arrays.toString(array));

        System.out.println(list.pop());
        System.out.println(list.pop());
        System.out.println(list.pop());

        list.unshift("first");
        list.unshift("second");
        list.unshift("third");

        array = list.asArray();
        System.out.println(Arrays.toString(array));

        System.out.println(list.shift());
        System.out.println(list.shift());
        System.out.println(list.shift());
        //System.out.println(list.unshift());
    }
}
