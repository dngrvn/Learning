package HomeWork2;

import java.util.Scanner;

// Разработайте программу, которая выбросит Exception, когда пользователь вводит пустую строку.
// Пользователю должно показаться сообщение, что пустые строки вводить нельзя.
//


public class EmptyString {

    public static void main(String[] args) {
        System.out.println("введите строку");
        Scanner scanner = new Scanner(System.in);

        EmptyStringException(scanner.nextLine());
    }

    public static void EmptyStringException(String stringValue) {
        if (stringValue.isEmpty()) {
            throw new RuntimeException("Пустые строки вводить нельзя!");
        }
    }


}


