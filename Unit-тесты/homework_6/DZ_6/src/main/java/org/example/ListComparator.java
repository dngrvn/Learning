package org.example;

import java.util.List;

public class ListComparator {
    private List<Integer> list1;
    private List<Integer> list2;

    public ListComparator(List<Integer> list1, List<Integer> list2) {
        this.list1 = list1;
        this.list2 = list2;
    }

    public String compareLists() {
        Integer average1 = (int) calculateAverage(list1);
        Integer average2 = (int) calculateAverage(list2);

        if (average1 > average2) {
            return "Первый список имеет большее среднее значение";
        } else if (average1 < average2) {
            return "Второй список имеет большее среднее значение";
        } else {
            return "Средние значения равны";
        }
    }

    private double calculateAverage(List<Integer> list) {
        if (list == null || list.isEmpty()) {
            return 0.0;
        }

        double sum = 0.0;
        for (Integer number : list) {
            sum += number;
        }

        return sum / list.size();
    }
}