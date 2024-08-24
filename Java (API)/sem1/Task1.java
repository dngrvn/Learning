// Дан массив двоичных чисел, например [1,1,0,1,1,1],
// вывести максимальное количество подряд идущих 1

import java.util.Arrays;

public class Task1 {
    public static void main(String[] args) {
        byte[] arr = new byte[] {1, 1, 0, 1, 1, 1};
        for (byte item : arr) {
            System.out.println(item);
        }
        System.out.println(" ");
        int[] counts = new int[arr.length];
        int i = 0;
        for (byte item : arr) {
            if (item == 1){
                counts[i]++;
            }
            if (item == 0){
                i++;
            }
        }
        int max = Arrays.stream(counts).max().getAsInt();
        System.out.println(max);
    }
}
