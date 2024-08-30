package org.example;

import java.util.List;

public interface BookRepository
{
    int getTotalBooks();
    List<String> getBookTitles();
    boolean addBook(String title);
}
