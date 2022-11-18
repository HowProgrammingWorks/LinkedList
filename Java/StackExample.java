package Java;

import java.util.Arrays;

public class StackExample {

    static class Stack {

        private Element last;

        private int count;

        public void push(final String value) {
            last = new Element(last, value);
            count++;
        }

        public String pop() {
            if (count == 0) {
                throw new NullPointerException("Stack is empty");
            }
            final Element result = last;
            last = last.prev;
            count--;
            return result.value;
        }

        public String[] asArray() {
            final String[] result = new String[count];
            Element current = last;
            for (int i = count - 1; i >= 0; i--) {
                result[i] = current.value;
                current = current.prev;
            }
            return result;
        }


        private static class Element {

            private final Element prev;

            private final String value;

            public Element(final Element prev, final String value) {
                this.prev = prev;
                this.value = value;
            }
        }
    }

    // Usage
    public static void main(final String[] args) {
        final Stack stack = new Stack();
        stack.push("first");
        stack.push("second");
        stack.push("third");

        String[] array = stack.asArray();
        System.out.println(Arrays.toString(array));

        System.out.println(stack.pop());
        System.out.println(stack.pop());
        System.out.println(stack.pop());
        //System.out.println(stack.pop());
    }
}
