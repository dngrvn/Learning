
import java.util.Scanner;

public class task3 {
    public static void main(String[] args) {

        Scanner scn = new Scanner(System.in);
        System.out.println("Введите первое число!");
        int number1 = scn.nextInt();

        System.out.println("Введите арифметическое действие!");
        char symbol = scn.next().charAt(0);

        System.out.println("Введите второе число!");
        int number2 = scn.nextInt();

        method(number1, symbol, number2);
    }

    public static void method(int num1, char sym, int num2) {
        int result = 0;

        switch (sym) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
        }
        System.out.printf("%d %c %d = %d", num1, sym, num2, result);
    }
}
