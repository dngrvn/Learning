package org.example;
import org.mockito.Mockito;
import org.junit.jupiter.api.Test;
import java.util.Arrays;
import java.util.List;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.*;

public class BookServiceTest {

    @Test
    public void testGetTotalBooks() {
        // Создаем заглушку мок-объект BookRepository
        BookRepository bookRepositoryMock = mock(BookRepository.class);

        // Задаем поведение заглушки мок-объекта при вызове getTotalBooks
        when(bookRepositoryMock.getTotalBooks()).thenReturn(5);

        // Создаем объект BookService, передавая мок-объект в конструктор
        BookService bookService = new BookService(bookRepositoryMock);

        // Вызываем метод getTotalBooks и проверяем, что результат соответствует ожидаемому
        int result = bookService.getTotalBooks();
        assertEquals(5, result);

        // Проверяем, что метод getTotalBooks был вызван один раз
        verify(bookRepositoryMock, times(1)).getTotalBooks();
    }

    @Test
    public void testGetBookTitles() {
        // Создаем мок-объект BookRepository
        BookRepository bookRepositoryMock = mock(BookRepository.class);

        // Задаем поведение мок-объекта при вызове getBookTitles
        when(bookRepositoryMock.getBookTitles()).thenReturn(Arrays.asList("Title1", "Title2", "Title3"));

        // Создаем объект BookService, передавая мок-объект в конструктор
        BookService bookService = new BookService(bookRepositoryMock);

        // Вызываем метод getBookTitles и проверяем, что результат соответствует ожидаемому
        List<String> result = bookService.getBookTitles();
        assertEquals(Arrays.asList("Title1", "Title2", "Title3"), result);

        // Проверяем, что метод getBookTitles был вызван один раз
        verify(bookRepositoryMock, times(1)).getBookTitles();
    }

    @Test
    public void testAddBook() {
        // Создаем мок-объект BookRepository
        BookRepository bookRepositoryMock = mock(BookRepository.class);

        // Задаем поведение мок-объекта при вызове addBook
        when(bookRepositoryMock.addBook("New Book")).thenReturn(true);

        // Создаем объект BookService, передавая мок-объект в конструктор
        BookService bookService = new BookService(bookRepositoryMock);

        // Вызываем метод addBook с определенным аргументом и проверяем, что результат соответствует ожидаемому
        boolean result = bookService.addBook("New Book");
        assertTrue(result);

        // Проверяем, что метод addBook был вызван с заданным аргументом
        verify(bookRepositoryMock, times(1)).addBook("New Book");
    }
}