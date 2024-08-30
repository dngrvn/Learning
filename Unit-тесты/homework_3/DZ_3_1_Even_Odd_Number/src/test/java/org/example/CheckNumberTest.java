package org.example;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CheckNumberTest
{
    CheckNumber checkNumber;
    @BeforeEach
    void setUp()
    {
        checkNumber = new CheckNumber();
    }

    @Test
    void testEvenNumber() {
        boolean result = checkNumber.evenOddNumber(10);
        assertTrue(result, "10 should be even");
    }

    @Test
    void testOddNumber() {
        boolean result = checkNumber.evenOddNumber(15);
        assertFalse(result, "15 should be odd");
    }

    @Test
    void testZero() {
        boolean result = checkNumber.evenOddNumber(0);
        assertTrue(result, "0 should be even");
    }

    @Test
    void testNegativeEvenNumber() {
        boolean result = checkNumber.evenOddNumber(-8);
        assertTrue(result, "-8 should be even");
    }

    @Test
    void testNegativeOddNumber() {
        boolean result = checkNumber.evenOddNumber(-3);
        assertFalse(result, "-3 should be odd");
    }
}