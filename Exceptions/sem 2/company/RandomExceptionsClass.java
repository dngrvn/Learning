
// Посмотрите на код, и подумайте сколько разных типов исключений вы тут сможете получить?
// https://github.com/sabinaIsm/test/blob/d2ebf811b85139783b1a0dcbe3714dbb28deee82/RandomExceptionsClass.java
// Запустите код, с помощью анализа стектрейса найдите и по возможности исправьте ошибки,
// добейтесь корректного выполнения программы.

package com.company;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.LinkedList;

public class RandomExceptionsClass {
    public static void main(String[] args) throws IOException {
        callMethod6("");
        ArrayList<String> stringArraysList = (ArrayList<String>) callMethod1(); // ClassCastException  неправильное преобразование класса из одного типа в другой
        int a = 10, b = 1; // заменила значение b на 1
        callMethod6("");
        int div = callMethod2(a, b); // ArithmeticException
        System.out.println(div);
        callMethod6("");
        callMethod3(stringArraysList);
    }

    private static void callMethod6(String s) {
        System.out.println("Hello World, it's me!");
    }

    private static void callMethod3(ArrayList<String> stringArraysList) {
        callMethod6("");
        //  callMethod3(stringArraysList); // ссылается сам на себя. бесконечный цикл.
    }

    private static Collection<String> callMethod1() throws IOException {
        // можно изменить значение b которое передается в callMethod2
        callMethod2(100000000, 10); //ArithmeticException: исключение, возникающее при делении на ноль
        return new ArrayList<>(); // поменяла на ArrayList
    }

    public static int callMethod2(int a, int b) throws IOException {
        callMethod6("");
        // создала файл и указала полный путь т.к. IDE не видит файл)
        FileInputStream fis = new FileInputStream("C:\\_GB\\01. Семестр\\Исключения\\HW_Exception\\src\\1.txt"); //FileNotFoundException файл не найден
        fis.read();

        if (fis.available() > 0) throw new RuntimeException();
        int num = callMethod4("1240"); // исправила букву "о" на цифру "0"
        return a / b; //ArithmeticException: исключение, возникающее при делении на ноль
    }

    private static int callMethod4(String s) {
        callMethod5(s);
        return Integer.parseInt(s); //NumberFormatException:  ошибка преобразования строки в число.
    }

    private static void callMethod5(String s) {
        callMethod6("");
        String[] strings = new String[5];
        // скорректировала индексы, чтобы убрать выход за пределы массива ArrayIndexOutOfBoundsException
        for (int i = 0; i < strings.length; i++) { // ArrayIndexOutOfBoundsException: индекс вне границ массива
            strings[i] = s;
        }
    }
}