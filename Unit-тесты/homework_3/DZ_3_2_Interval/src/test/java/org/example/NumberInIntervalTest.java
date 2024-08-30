package org.example;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import static org.assertj.core.api.AssertionsForClassTypes.assertThatThrownBy;
import static org.assertj.core.api.Assertions.assertThat;


class NumberInIntervalTest
{
    NumberInInterval numberInInterval;

    @BeforeEach
    void setUp() {
        numberInInterval = new NumberInInterval();
    }

    @Test
    void numberInInterval()
    {
        boolean result = numberInInterval.numberInInterval(1);
        assertFalse(result, "20 should be outside the interval (25;100)");
    }
    @Test
    void testNumberInIntervalInside() {
        boolean result = numberInInterval.numberInInterval(50);
        assertTrue(result, "50 should be in the interval (25;100)");
    }

    @Test
    void testNumberInIntervalOutsideLowerBound() {
        boolean result = numberInInterval.numberInInterval(20);
        assertFalse(result, "20 should be outside the interval (25;100)");
    }

    @Test
    void testNumberInIntervalOutsideUpperBound() {
        boolean result = numberInInterval.numberInInterval(110);
        assertFalse(result, "110 should be outside the interval (25;100)");
    }

    @Test
    void testNumberInIntervalBoundary25() {
        boolean result = numberInInterval.numberInInterval(25);
        assertTrue(result, "25 should be outside the interval (25;100)");
    }

    @Test
    void testNumberInIntervalBoundary100() {
        boolean result = numberInInterval.numberInInterval(100);
        assertTrue(result, "100 should be outside the interval (25;100)");
    }
}