package Java;

import java.util.Arrays;

/**
 * @author Michael Balakhon
 * @link t.me/mibal_ua.
 */
public class QueueExample {

    static class Queue {

        private Element first;

        private Element last;

        private int count;

        public void put(final String value) {
            final Element element = new Element(first, value);
            if (count == 0) {
                first = element;
            } else {
                last.next = element;
            }
            last = element;
            count++;
        }

        public String pick() {
            if (count == 0) {
                throw new NullPointerException("Queue is empty");
            }
            final Element result = first;
            first = first.next;
            count--;
            if (count == 0 || count == 1) {
                last = first;
            }
            return result.value;
        }

        public String[] asArray() {
            final String[] result = new String[count];
            Element current = first;
            for (int j = 0; j < count; j++) {
                result[j] = current.value;
                current = current.next;
            }
            return result;
        }


        private static class Element {

            private Element next;

            private final String value;

            public Element(final Element next, final String value) {
                this.next = next;
                this.value = value;
            }
        }
    }

    // Usage
    public static void main(final String[] args) {
        final Queue queue = new Queue();
        queue.put("first");
        queue.put("second");
        queue.put("third");

        String[] array = queue.asArray();
        System.out.println(Arrays.toString(array));

        System.out.println(queue.pick());
        System.out.println(queue.pick());
        System.out.println(queue.pick());
        //System.out.println(queue.pick());
    }
}
