package HomeWork2;

// Если необходимо, исправьте данный код
public class TaskTwo {

    public static void main(String[] args) {
        int[] intArray = {1, 2, 3, 4, 5, 6, 7, 8};// добавила для теста
        try {
            int d = 0;
            double catchedRes1 = intArray[8] / d;
            System.out.println("catchedRes1 = " + catchedRes1);
        } catch (ArithmeticException e) {
            System.out.println("Catching exception: " + e);
        } catch (ArrayIndexOutOfBoundsException e) {// добавила, т.к есть риск что в массиве нет столько элементов
            System.out.println("Catching exception: " + e);
        }

    }
}
