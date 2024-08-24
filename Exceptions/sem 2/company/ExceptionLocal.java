package com.company;

public class ExceptionLocal {

    public static void equalSizeArray(int[] array_first, int[] array_second) {
        if (array_first.length != array_second.length) {
            throw new RuntimeException("Массивы имеют разную длину");
        }
    }

    public static void checkZeroArray(int[] array) {
        for (int item : array) {
            if (item == 0) {
                throw new RuntimeException("Массив содержит нулевые элементы. делить на ноль нельзя");
            }
        }
    }

}