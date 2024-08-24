import java.util.HashSet;
import java.util.Random;
import java.util.Set;

public class Task2 {
    
    /*
    1. Напишите метод, который заполнит массив из 1000 элементов случайными цифрами от 0 до 24.
    2. Создайте метод, в который передайте заполненный выше массив и с помощью Set вычислите процент
    уникальных значений в данном массиве и верните его в виде числа с плавающей запятой.
    Для вычисления процента используйте формулу:
    процент уникальных чисел = количество уникальных чисел * 100 / общее количество чисел в массиве.
    */

    public static void main(String[] args) {
        
        Integer[] arr = new Integer[1000];
        Set<Integer> uniqArr = new HashSet<>();

        for (int i = 0; i < arr.length; i++) {
            arr[i] = new Random().nextInt(25);
            uniqArr.add(arr[i]);
        }

        double proc = uniqArr.size() * 100.0 / 1000;
        System.out.println(proc);
        System.out.println(uniqArr);

    }


}
