import java.io.FileWriter;
import java.io.IOException;
import java.util.logging.FileHandler;
import java.util.logging.Handler;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.logging.SimpleFormatter;



public class Task4 {
    /*Напишите метод, который составит строку, состоящую из 100 повторений
    слова TEST и метод, который запишет эту строку в простой текстовый файл,
    обработайте исключения*/

    static Logger logger;

    public static void main(String[] args) {
        createLogger();
        logger.log(Level.INFO, "Начало работы");
        String word = "Test";
        int count = 10;
        String res = repeat(word, count);
        String filePath = "test.txt";
        writeToFile(res, filePath);
        closeLogger();
    }

    static String repeat(String word, int count){
        StringBuilder stringBuilder = new StringBuilder();
        for (int i = 0; i < count; i++) {
            stringBuilder.append(word).append(" ");
        }
        return stringBuilder.toString();
    }

    static void writeToFile(String word, String filePath){
        try (FileWriter writer = new FileWriter(filePath, true)) { // true - добавление false - перезапись
            writer.write(word);
            writer.write("\n");
            writer.flush();
            logger.log(Level.INFO, "Запись прошла успешно");
        } catch (IOException e) {
            e.printStackTrace(); // выведет в консоль ошибку, но работа продолжится
            logger.warning("Запись не удалась");
        }
    }

    static void createLogger(){
        logger = Logger.getAnonymousLogger();
        FileHandler fileHandler = null;
        try {
            fileHandler = new FileHandler("log.txt", true);
            SimpleFormatter formatter = new SimpleFormatter();
            fileHandler.setFormatter(formatter);
        } catch (IOException e) {
            e.printStackTrace();
        }
        logger.addHandler(fileHandler);
    }

    static void closeLogger(){
        Handler[] handlers = logger.getHandlers();
        for (int i = 0; i < handlers.length; i++) {
            handlers[i].close();
        }
    }
}
