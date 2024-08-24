package HomeWork2;
// Запишите в файл следующие строки:
//Анна=4
//Елена=5
//Марина=6
//Владимир=?
//Константин=?
//Иван=4
//Реализуйте метод, который считывает данные из файла и сохраняет в двумерный массив (либо HashMap).
// В отдельном методе нужно будет пройти по структуре данных,
// если сохранено значение ?, заменить его на соответствующее число.
// Если на каком-то месте встречается символ, отличный от числа или ?, бросить подходящее исключение.
// Записать в тот же файл данные с замененными символами ?.

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.Scanner;

public class EditDataFile {
    static FileReader fis;

    public static void main(String[] args) {

        HashMap<String, String> currentMap = new HashMap<String, String>();
        String path = "C:\\_GB\\01. Семестр\\Исключения\\HW_Exception\\src\\data.txt"; // путь к файлу

        openFile(path);// открыть файл + проверка на исключение
        writeToFileInMap(fis, currentMap);// считать данные в мапу
        changeMap(currentMap); // преобразовать данные в мапе.либо кидаем исключение
        writerToMapInFile(path, currentMap);// записать данные обратно в файл

    }

    public static void openFile(String path) { // открыть файл + проверка на исключение
        try {
            fis = new FileReader(path);
        } catch (FileNotFoundException e) {
            System.out.println("неверный путь/наименования файла");
            e.printStackTrace();
        }
    }

    public static void writeToFileInMap(FileReader file, HashMap<String, String> map) { // считать данные в мапу
        Scanner scan = new Scanner(file);
        while (scan.hasNextLine()) {
            String[] temp = scan.nextLine().split("=");
            map.put(temp[0], temp[1]);
        }
        scan.close();
    }

    public static void changeMap(HashMap<String, String> map) { //проверяет и преобразовывает данные в мапе. либо бросает исключение
        for (String item : map.keySet()) {
            if (map.get(item).equals("?")) {
                map.put(item, String.valueOf(item.length()));
            } else {
                checkNumberException(map.get(item));
            }
        }
    }

    public static void checkNumberException(String number) { //исключение если символ, не число
        try {
            Integer.parseInt(number);
        } catch (NumberFormatException e) {
            throw new RuntimeException("ошибка данных: \"" + number + "\" не может быть значением после знака =");
        }
    }

    public static void writerToMapInFile(String currentPatch, HashMap<String, String> map) {// запись данных обратно в файл
        try {
            PrintWriter writer = new PrintWriter(currentPatch, "UTF-8");
            for (HashMap.Entry<String, String> item : map.entrySet()) {
                writer.println(String.join("=",item.getKey(), item.getValue()));
            }
            writer.close();
        } catch (FileNotFoundException | UnsupportedEncodingException e) {
            System.out.println("файл недоступен для записи");
        }

    }
}
