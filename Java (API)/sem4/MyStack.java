
import java.util.Collections;

public class MyStack {
    private int[] array = new int[10];
    private int size = 0;

    int size(){
        return size;
    }

    boolean empty(){
        return size == 0;
    }

    void push(int elem){
        if (array.length <= size){
            int[] array2 = new int[array.length*2];
            System.arraycopy(array, 0, array2, 0, array.length);
            array = array2;
        }
        array[size++] = elem;
    }

    int peek(){
        return array[size-1];
    }

    int pop(){
        return array[--size];
    }
}