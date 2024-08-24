package job;

import java.util.ArrayList;

public class task2 {
    public static void main(String[] args) {
        
        ArrayList<Integer> list = new ArrayList<Integer>();
        
        // Создание рандомной коллекции
        class_job.RandomCollection(list);
        // Удаление из коллекции чётных чисел
        class_job.delEvenNumbers(list);

    }
}
