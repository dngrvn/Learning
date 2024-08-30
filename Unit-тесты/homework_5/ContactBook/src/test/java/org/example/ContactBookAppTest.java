package org.example;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import java.io.ByteArrayOutputStream;
import java.io.PrintStream;
import java.util.HashMap;
import java.util.Map;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

class ContactBookAppTest
{
    private final ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
    private final PrintStream originalOut = System.out;

    private ContactBookApp contactBookApp;

    @BeforeEach
    void setUp() {

        System.setOut(new PrintStream(outputStream));
        contactBookApp = new ContactBookApp();
    }

    @AfterEach
    void tearDown() {
        System.setOut(originalOut);
    }


    @Test
    void testAddContact() {
        contactBookApp.addContact("John Doe", "1234567890");
        Map<String, String> expectedContacts = new HashMap<>();
        expectedContacts.put("John Doe", "1234567890");
        assertEquals(expectedContacts, contactBookApp.getContacts());
    }

    @Test
    void testEditContact() {
        contactBookApp.addContact("Jane Doe", "9876543210");
        contactBookApp.editContact("Jane Doe", "5555555555");
        Map<String, String> expectedContacts = new HashMap<>();
        expectedContacts.put("Jane Doe", "5555555555");
        assertEquals(expectedContacts, contactBookApp.getContacts());
    }

    @Test
    void testDeleteContact() {
        contactBookApp.addContact("Alice", "1111111111");
        contactBookApp.deleteContact("Alice");
        Map<String, String> expectedContacts = new HashMap<>();
        assertEquals(expectedContacts, contactBookApp.getContacts());
    }

    @Test
    void testDisplayContacts() {
        ContactBookApp contactBookApp = new ContactBookApp();
        contactBookApp.addContact("Bob", "555");

        Map<String, String> contacts = contactBookApp.getContacts();

        assertTrue(contacts.containsKey("Bob"));
        assertEquals("555", contacts.get("Bob"));
    }

    @Test
    void testIntegrationAddAndDisplayContacts() {
        contactBookApp.addContact("Eve", "7777777777");

        outputStream.reset();

        contactBookApp.displayContacts();

        String expectedOutput = "Contacts:" + System.getProperty("line.separator") + "Eve: 7777777777" + System.getProperty("line.separator");
        assertEquals(expectedOutput, outputStream.toString());
    }


    @Test
    void testEndToEndAddEditDisplayContacts() {
        contactBookApp.addContact("Alex", "123");
        contactBookApp.editContact("Alex", "456");

        outputStream.reset();

        contactBookApp.displayContacts();

        // Используем System.lineSeparator() для символа новой строки
        String expectedOutput = "Contacts:" + System.lineSeparator() + "Alex: 456" + System.lineSeparator();
        assertEquals(expectedOutput, outputStream.toString());
    }


    @Test
    void testNegativeEditNonExistingContact() {
        contactBookApp.editContact("NonExisting", "123");
        assertTrue(outputStream.toString().contains("Contact not found."));
    }


    @Test
    void testNegativeDeleteNonExistingContact() {
        contactBookApp.deleteContact("NonExisting");
        String expectedOutput = "Contact not found." + System.lineSeparator();
        assertEquals(expectedOutput, outputStream.toString());
    }
}

  /**  Unit Test: Add Contact

   Названия тестов, их типы и краткие описания, объединенные с указанием типа теста и пояснением:
   testAddContact

   Тип: Юнит-тест
   Описание: Проверяет, что метод addContact корректно добавляет контакт в телефонную книгу.
   testEditContact

   Тип: Юнит-тест
   Описание: Проверяет, что метод editContact корректно изменяет номер телефона существующего контакта.
   testDeleteContact

   Тип: Юнит-тест
   Описание: Проверяет, что метод deleteContact корректно удаляет контакт из телефонной книги.
   testDisplayContacts

   Тип: Юнит-тест
   Описание: Проверяет, что метод displayContacts корректно отображает контакты в телефонной книге.
   testIntegrationAddAndDisplayContacts

   Тип: Интеграционный тест
   Описание: Проверяет интеграцию между методами addContact и displayContacts, удостоверяется, что контакт успешно добавлен и отображается.
   testEndToEndAddEditDisplayContacts

   Тип: Сквозной тест
   Описание: Проверяет корректность взаимодействия методов addContact, editContact и displayContacts. Добавляет контакт, изменяет его и проверяет, что изменения отражаются при отображении.
   testNegativeEditNonExistingContact

   Тип: Юнит-тест (сценарий с отрицательным результатом)
   Описание: Проверяет, что при попытке изменения несуществующего контакта выводится сообщение "Contact not found."
   testNegativeDeleteNonExistingContact

   Тип: Юнит-тест (сценарий с отрицательным результатом)
   Описание: Проверяет, что при попытке удаления несуществующего контакта выводится сообщение "Contact not found."
   Объяснение типов тестов:

   Юнит-тесты: Эти тесты проверяют отдельные компоненты программы (например, методы класса) в изоляции от других компонентов. Каждый тест фокусируется на определенном аспекте функциональности.

   Интеграционные тесты: Эти тесты проверяют взаимодействие между различными компонентами или модулями программы. Например, как методы addContact и displayContacts работают вместе.

   Сквозные тесты (End-to-End): Эти тесты проверяют всю систему как целое. Они симулируют реальные сценарии использования, начиная от ввода пользователя и заканчивая выводом или состоянием системы.. **/