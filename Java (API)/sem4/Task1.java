import java.util.LinkedList;
import java.util.List;
import java.util.Scanner;

public class Task1 {
    /*
    Реализовать консольное приложение, которое:
    Принимает от пользователя строку вида
    text~num
    Нужно рассплитить строку по ~, сохранить text в связный список на позицию num.
    Если введено print~num, выводит строку из позиции num в связном списке и удаляет её из списка
    */
    public static void main(String[] args) {
        
        List<String> list = new LinkedList<>();
        Scanner scanner = new Scanner(System.in);

        for (;;) {
            String inputLine = scanner.nextLine();
            if (inputLine.equals("stop")) {
                System.out.println("Lines:");
                for (String string : list) {
                    System.out.println(string);
                }
                System.out.println("size: " + list.size());
                break;
            }
            String[] splitLine = inputLine.split("~");
            String text = splitLine[0];
            int num = Integer.parseInt(splitLine[1]);
            if (text.equals("print")) {
                System.out.println(list.remove(num));
            } else {
                list.add(num, text);
            }
            
        }
    }
}
