package gb.oop.homeworks.model;

import java.util.regex.Pattern;

/**
 * Класс реализующий конвертацию в двоичное представление и обратно
 */
public class BinaryCalculator implements iCalculator, iBinaryCalculator{

    protected Object number;

    public BinaryCalculator(Object number) {
        this.number = number;
    }

    /**
     * Конструктор по умолчанию создаст number = "11111111"
     */
    public BinaryCalculator() {
        this.number = "11111111";

    }

    public Object getNumber() {
        return number;
    }

    public void setNumber(Object number) {
        this.number = number;
    }

    public Long fromBinary(Object number) {
        Long res = 0L;
        String strBin;
        if (number instanceof Double){
            res = ((Double)number).longValue();
            strBin = res.toString();
            res = 0L;
        } else if (number instanceof Number) {
            strBin = ((Long) (number)).toString();
        } else strBin = number.toString();
        if (Pattern.matches("^[01]+$", strBin)) {
            int exponent = 0;
            for (int i = strBin.length() - 1; i >= 0; i--) {
                res += (int) Math.pow(2, exponent++) * Integer.parseInt(String.valueOf(strBin.charAt(i)));

            }
        } else return null;
        return res;

    }

    @Override
    public String toBinary(Object number) {
        StringBuilder res = new StringBuilder();
        Long num = 0L;
        if (number instanceof Long) {
            num = (Long) number;
        } else if (number instanceof Integer) {
            num = Long.valueOf((int) number);
        } else if (number instanceof String) {
            num = ((Double) Double.parseDouble((String) number)).longValue();
        } else {
            num = ((Double) number).longValue();
        }
        while (num != 0) {
            res.append(num % 2);
            num /= 2;
        }
        return res.reverse().toString();

    }
}