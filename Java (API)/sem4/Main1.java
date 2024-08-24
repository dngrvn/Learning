
import java.util.LinkedList;
import java.util.List;
import java.util.Scanner;

public class Main1 {
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

        while (true) {

            String line = scanner.nextLine();
            if (line.equals("finish")){
                System.out.println("До новых встреч");
                break;
            }

            String[] parts = line.split("~");
            
            int num = Integer.parseInt(parts[1]);
//            if (num >= list.size() || num < 0){
//                System.out.println("Индекс за пределами массива");
//                continue;
//            }
            String text = parts[0];

            switch (text){
                case "print":
                    System.out.println(list.remove(num));
                    break;
                default:
                    list.add(num, text);
            }
        }
    }
}