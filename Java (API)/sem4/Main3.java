
public class Main3 {
    /*
    Реализовать стэк с помощью массива.
    Нужно реализовать методы
    size(), empty(), push(), peek(), pop().
     */
    public static void main(String[] args) {
        MyStack myStack = new MyStack();
        System.out.println(myStack.empty());
        myStack.push(1);
        myStack.push(2);
        myStack.push(3);

        System.out.println(myStack.peek());
        System.out.println(myStack.pop());
        System.out.println(myStack.pop());
        System.out.println(myStack.pop());
        if (!myStack.empty()){
            System.out.println(myStack.pop());
        } else {
            System.out.println("нет элементов в стеке");
        }
    }
}