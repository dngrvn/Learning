
import java.util.Scanner;

public class task2 {
    public static void main(String[] args) {

        Scanner scn = new Scanner(System.in);
        System.out.println("Введите число!");
        int num = scn.nextInt();

        method(num);
    }

    public static void method(int a) {
        System.out.println("Все простые числа до заданного числа!");
        for (int i = 2; i <= a; i++) {
            for (int j = 2; j <= i; j++) {
                if (i == j)
                    System.out.println(i);
                else if (i % j == 0)
                    break;

            }
        }
    }
}
