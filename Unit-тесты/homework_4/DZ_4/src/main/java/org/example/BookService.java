package org.example;

import java.util.List;

public class BookService implements BookRepository
{
    private final BookRepository bookRepository;

    public BookService(BookRepository bookRepository)
    {
        this.bookRepository = bookRepository;
    }

    public int getTotalBooks()
    {
        return bookRepository.getTotalBooks();
    }

    public List<String> getBookTitles()
    {
        return bookRepository.getBookTitles();
    }

    public boolean addBook(String title)
    {
        return bookRepository.addBook(title);
    }
}
