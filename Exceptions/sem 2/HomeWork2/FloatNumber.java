package HomeWork2;

import java.util.Scanner;

// Реализуйте метод, который запрашивает у пользователя ввод дробного числа (типа float),
// и возвращает введенное значение.
// Ввод текста вместо числа не должно приводить к падению приложения,
// вместо этого, необходимо повторно запросить у пользователя ввод данных.
public class FloatNumber {

    public static void main(String[] args) {
        System.out.println(convertFloatNumber());
    }

    public static float convertFloatNumber() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("введите дробное число (разделитель точка)");
        String number = null;
        while (number == null) {
            number = scanner.next();
            try {
                Float.parseFloat(number);
            } catch (NumberFormatException e) {
                System.out.println("повторите ввод (разделитель точка)");
                number = null;
            }
        }
        return Float.parseFloat(number);
    }
}
