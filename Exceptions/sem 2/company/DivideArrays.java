package com.company;
// Реализуйте метод, принимающий в качестве аргументов два целочисленных массива,
// и возвращающий новый массив,
// каждый элемент которого равен частному элементов двух входящих массивов в той же ячейке.
// Если длины массивов не равны, необходимо как-то оповестить пользователя.
// Важно: При выполнении метода единственное исключение, которое пользователь может увидеть -
// RuntimeException, т.е. ваше

import java.util.Arrays;

public class DivideArrays {
    public static void main(String[] args) {
        int[] arrayOne = {1, 2, 12};
        int[] arrayTwo = {6, 1, 9};
        System.out.println(Arrays.toString(getSubArray(arrayOne, arrayTwo)));
    }

    public static float[] getSubArray(int[] array_first, int[] array_second) {

        ExceptionLocal.equalSizeArray(array_first, array_second); // исключение на разные длины массива
        ExceptionLocal.checkZeroArray(array_second); // исключение на содержание нулей во втором массиве
        float[] diffArrays = new float[array_first.length];
        for (int i = 0; i < array_first.length; i++) {
            diffArrays[i] = array_first[i] / array_second[i];
        }
        return diffArrays;
    }
}
