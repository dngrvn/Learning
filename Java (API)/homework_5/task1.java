package job;

import java.util.HashMap;
import java.util.Map;

// Реализуйте структуру телефонной книги с помощью HashMap, 
// учитывая, что один человек может иметь несколько телефонов.

public class task1 {
    public static void main(String[] args) {

        Map<String, String> bookFone = new HashMap<>();    
        bookFone.put("Иванов И.И.", "2-23-23");
        bookFone.put("Звягтин А.А.", "3-23-63");
        bookFone.put("Приввалов Д.Н.", "2-76-53");
        bookFone.put("Смирнов К.А.", "3 -15-78");
        bookFone.put("Любомиров С.С.", "2-23-89, 2-43-53");
        bookFone.put("Горшкок П.К.", "2-15-13");
        bookFone.put("Лобанов Г.О.", "3-78-99, 2-29-00");
        System.out.println(bookFone.get("Иванов И.И."));
        System.out.println(bookFone.get("Лобанов Г.О."));

        addBookFone(bookFone, "Костров Б.Е.", "2-02-45");

        System.out.println(bookFone.get("Костров Б.Е."));

        deleteBookFone(bookFone, "Иванов И.И.");

        System.out.println(bookFone);
    }

    // Добавить или изменить или изменить данные
    public static void addBookFone(Map<String, String> dict, String name, String number){
        dict.put(name, number);
    }
    // Удалить данные
    public static void deleteBookFone(Map<String, String> dict, String name){
        dict.remove(name);
    }
}
