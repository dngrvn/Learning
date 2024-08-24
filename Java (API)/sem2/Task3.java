public class Task3 {
    /*Напишите метод, который принимает на вход строку (String) и
    определяет является ли строка палиндромом (возвращает boolean значение).
    Полиндром - Слово или фраза, которые одинаково читаются слева направо и справа налево.*/

    public static void main(String[] args) {
        String str = "abccba";
        if (IsPalindrom(str)){
            System.out.println('+');
        } else {
            System.out.println('-');
        }
    }

    static boolean IsPalindrom(String str){
        int len = str.length();
        byte count = 0;
        for (int i = 0; i < len / 2; i++) {
            if (str.charAt(i) != str.charAt(len - i - 1)){
                count++;
            }
        }
        return (count == 0);
    }

}
