package com.company;

// Реализуйте 3 метода, чтобы в каждом из них получить разные исключения

public class ExampleMetods {

    public static void main(String[] args) {
        System.out.println(divide(5, 0)); //ArithmeticException
        int[] arrayExe = {1, 5, 6};
        System.out.println(getElementArray(arrayExe, 8)); //ArrayIndexOutOfBoundsException
        System.out.println(convertToInt("456s")); //NumberFormatException
    }

    // деление на ноль.
    public static float divide(int argOne, int argTwo) { //ArithmeticException
        return argOne / argTwo;
    }

    // индекс вне границ массива
    public static int getElementArray(int[] array, int item) { //ArrayIndexOutOfBoundsException
        return array[item];
    }

    // ошибка преобразования строки в число
    public static int convertToInt(String stringNums) { //NumberFormatException
        return Integer.parseInt(stringNums);
    }
}
