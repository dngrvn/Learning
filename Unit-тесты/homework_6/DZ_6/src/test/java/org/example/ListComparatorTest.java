package org.example;

import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

class ListComparatorTest {

    @Test
    void testCompareLists() {
        List<Integer> list1 = Arrays.asList(1, 2, 3);
        List<Integer> list2 = Arrays.asList(4, 5, 6);

        ListComparator comparator = new ListComparator(list1, list2);
        String result = comparator.compareLists();

        assertEquals("Второй список имеет большее среднее значение", result);
    }

    @Test
    void testCompareListsEqualAverages()
    {
        List<Integer> list1 = Arrays.asList(1, 2, 3);
        List<Integer> list2 = Arrays.asList(4, 2, 1);

        ListComparator comparator = new ListComparator(list1, list2);
        String result = comparator.compareLists();

        assertEquals("Средние значения равны", result);
    }

    @Test
    void testCompareListsEmptyLists() {
        List<Integer> list1 = Collections.emptyList();
        List<Integer> list2 = Collections.emptyList();

        ListComparator comparator = new ListComparator(list1, list2);
        String result = comparator.compareLists();

        assertEquals("Средние значения равны", result);
    }

}