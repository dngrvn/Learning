package HomeWork2;
// Дан следующий код, исправьте его там, где требуется (задание 3
public class TaskThree {

    public static void main(String[] args) throws Exception {
        try {
            int a = 90;
            int b = 3;
            System.out.println(a / b);
            printSum(23, 234); // тут можно передать null
            int[] abc = {1, 2};
            abc[3] = 9;
        } catch (NullPointerException ex) {
            System.out.println("Указатель не может указывать на null!");
        } catch (IndexOutOfBoundsException ex) {
            System.out.println("Массив выходит за пределы своего размера!");
        } catch (Throwable ex) { // перенесла с первого места в конец. т.к. все исключения будут попадать под него
            System.out.println("Что-то пошло не так...");
        }
    }

    public static void printSum(Integer a, Integer b) throws NullPointerException {
        // заменила  FileNotFoundException на NullPointerException- т.к. в методе нет чтения файла а null возможно передать
        System.out.println(a + b);
    }

}
