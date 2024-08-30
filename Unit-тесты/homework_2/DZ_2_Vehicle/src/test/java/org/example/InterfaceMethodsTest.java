package org.example;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class InterfaceMethodsTest
{
    private Car car;
    private Motorcycle motorcycle;

    @BeforeEach
    void setUp()
    {
         car = new Car("Toyota", "Camry", 2023);
         motorcycle = new Motorcycle("Harley-Davidson", "ultra-limited", 2023 );
    }


    @Test
    void carIsVehical()
    {
        assertTrue(car instanceof Vehicle, "Проверка, что машина являеться экземпляром класса Vehicle");
    }

    @Test
    void motocycleIsVehical()
    {
        assertTrue(motorcycle instanceof Vehicle, "Проверка, что мотоцикл являеться экземпляром класса Vehicle");
    }

    @Test
    void testDriveCar()
    {
        car.testDrive();
        assertEquals(60, car.getSpeed(), "Проверка, что машина движется со скоростью 60");
    }

    @Test
    void testDriveMotocycle()
    {
        motorcycle.testDrive();
        assertEquals(75, motorcycle.getSpeed(), "Проверка, что мотоцикл движется со скоростью 75");
    }

    @Test
    void carHasFourWheels()
    {
        assertEquals(4, car.getNumWheels(), "Проверка, что машина имеет четыре колеса");
    }

    @Test
    void motocycleHasTwoWheels()
    {
        assertEquals(2, motorcycle.getNumWheels(), "Проверка, что мотоцикл имеет два колеса");
    }

    @Test
    void parkCar()
    {
        car.testDrive();
        car.park();
        assertEquals(0, car.getSpeed(), "Проверка, что машина остановлена после парковки");
    }

    @Test
    void parkMotocycle()
    {
        motorcycle.testDrive();
        motorcycle.park();
        assertEquals(0, motorcycle.getSpeed(), "Проверка, что мотоцикл остановлена после парковки");
    }
}