import java.util.HashMap;
import java.util.Map;

public class Passports {
    private Map<String, String> map = new HashMap<>();

    void add(String passport, String name) {
        map.put(passport, name);
    }

    String findByName(String user) {
        StringBuilder stringBuilder = new StringBuilder();
        int count = 1;
        for (Map.Entry<String, String> entry : map.entrySet()) {
            String passport = entry.getKey();
            String name = entry.getValue();
            if (name.equals(user)) {
                stringBuilder.append(count++);
                stringBuilder.append(". ");
                stringBuilder.append(name);
                stringBuilder.append(": ");
                stringBuilder.append(passport);
                stringBuilder.append("\n");
            }
        }
        return stringBuilder.toString();
    }

    String getList() {
        StringBuilder stringBuilder = new StringBuilder();
        for (Map.Entry<String, String> entry : map.entrySet()) { // объект Entry хранит в себе и ключи и значения
            String passport = entry.getKey();
            String name = entry.getValue();
            stringBuilder.append(passport);
            stringBuilder.append(": ");
            stringBuilder.append(name);
            stringBuilder.append("\n");
        }
        return stringBuilder.toString();
    }
}
