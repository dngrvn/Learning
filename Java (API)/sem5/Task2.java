import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;

public class Task2 {

    /*Даны 2 строки, написать метод, который вернет true, если эти строки являются изоморфными и false, если нет. Строки изоморфны,
    если одну букву в первом слове можно заменить на некоторую букву во втором слове, при этом
    повторяющиеся буквы одного слова меняются на одну и ту же букву с сохранением порядка следования. (Например, add - egg изоморфны)
    буква может не меняться, а остаться такой же. (Например, note - code)
    Пример 1:
    Input: s = "foo", t = "bar"
    Output: false
    Пример 2:
    Input: s = "paper", t = "title"
    Output: true
    map {
        p=t
    } т. о. в map будем записывать правило
    */

    public static void main(String[] args) {
        String word1 = "paper";
        String word2 = "title";

        System.out.println(Izomorph(word1, word2));
        
        
    }

    public static boolean Izomorph(String word1, String word2) {
        boolean result = false;
        Map<Character, Character> rool1 = new HashMap<>();
        Map<Character, Character> rool2 = new HashMap<>();
        if (word1.length() == word2.length()) {

            for (int i = 0; i < word1.length(); i++) {
                rool1.putIfAbsent(word1.charAt(i), word2.charAt(i));
                rool2.putIfAbsent(word2.charAt(i), word1.charAt(i));
            }

            // for (Entry<Object, Object> entry : rool1.entrySet()) {
            //     System.out.println(entry.getKey() + ": " + entry.getValue());
            // }
            // System.out.println(" ");
            // for (Entry<Object, Object> entry : rool2.entrySet()) {
            //     System.out.println(entry.getKey() + ": " + entry.getValue());
            // }
            
            if (rool1.size() == rool2.size()) {
                int count = 0;
                for (Entry<Character, Character> entry1 : rool1.entrySet()) {
                    if (entry1.getKey().equals(rool2.get(entry1.getValue()))) {
                        count++;
                    }
                }
                if (count == rool1.size()) {
                    result = true;
                }
            }
        }
        return result;
    }
}
