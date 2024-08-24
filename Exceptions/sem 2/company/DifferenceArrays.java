package com.company;

// Реализуйте метод, принимающий в качестве аргументов два целочисленных массива,
// и возвращающий новый массив,
// каждый элемент которого равен разности элементов двух входящих массивов в той же ячейке.
// Если длины массивов не равны, необходимо как-то оповестить пользователя.

import java.util.Arrays;

public class DifferenceArrays {

    public static void main(String[] args) {
        int[] arrayOne = {1, 2, 3};
        int[] arrayTwo = {6, 8, 6};
        System.out.println(Arrays.toString(getSubArray(arrayOne, arrayTwo)));
    }

    public static int[] getSubArray(int[] array_first, int[] array_second) {
//        if (array_first.length != array_second.length) {
//            throw new RuntimeException("Массивы имеют разную длину");
//        }
        ExceptionLocal.equalSizeArray(array_first, array_second);
        int[] diffArrays = new int[array_first.length];
        for (int i = 0; i < array_first.length; i++) {
            diffArrays[i] = array_first[i] - array_second[i];
        }
        return diffArrays;
    }

}
