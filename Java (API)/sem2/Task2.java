public class Task2 {
    /*Напишите метод, который сжимает строку.
    Пример: вход aaaabbbcdd.
    Результат: a4b3cd2*/

    public static void main(String[] args) {
        String str = "aaaabbbcddssssss";
        System.out.println(getRar(str));
    }

    static String getRar(String str){
        str = str + ' ';
        StringBuilder rarStr = new StringBuilder();
        rarStr.append(str.charAt(0));
        int count = 1;
        for (int i = 1; i < str.length(); i++) {
            if (str.charAt(i) == str.charAt(i - 1)){
                count++;
            } else {
                if (count != 1) {
                    rarStr.append(count);
                }
                rarStr.append(str.charAt(i));
                count = 1;
            }
        }
        return rarStr.toString();
    }
}
