import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;



public class Main {
    /*
    1) Замерьте время, за которое в ArrayList добавятся 10000 элементов.
    2) Замерьте время, за которое в LinkedList добавятся 10000 элементов. Сравните с предыдущим.
    */

    public static void main(String[] args) {


        //List<Integer> list = new ArrayList<>();
        List<Integer> list = new LinkedList<>();

        long timeStart = System.currentTimeMillis();
        for (int i = 0; i < 100000; i++) {
            list.add(0, i);
        }
        long timeFinish = System.currentTimeMillis();

        System.out.println(timeFinish - timeStart);


    }
}