
import java.util.*;

public class Main2 {
    /*
    1) Написать метод, который принимает массив элементов,
    помещает их в стэк и выводит на консоль содержимое стэка.
    2) Написать метод, который принимает массив элементов,
    помещает их в очередь и выводит на консоль содержимое очереди.
    */
    public static void main(String[] args) {
        String[] strings = new String[]{"1", "2", "3", "4"};
        test1(strings);
    }

    static void test1(String[] strings){
        Stack<String> stack = new Stack<>();
        stack.addAll(Arrays.asList(strings));
//        Collections.addAll(stack, strings);

//        System.out.println(stack);

//        for (String word: stack){
//            System.out.println(word);
//        }

        while (!stack.empty()){
            System.out.println(stack.pop());
        }
    }

    static void test2(String[] strings){
        Queue<String> queue = new LinkedList<>();
        queue.addAll(Arrays.asList(strings));
//        Collections.addAll(queue, strings);
//        System.out.println(stack);

//        for (String word: stack){
//            System.out.println(word);
//        }

        while (!queue.isEmpty()){
            System.out.println(queue.poll());
        }
    }
}