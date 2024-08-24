package Calculator;
import java.util.ArrayList;
import java.util.List;

/**
 * Класс для вычесления списков
 * @param <C>
 */
public class ListCalculator<C extends Number> implements Calculator<C> {
    private List<C> numbers;

    public ListCalculator(List<C> numbers) {
        this.numbers = numbers;
    }

    public ListCalculator() {
        numbers = new ArrayList<C>();
    }

    public List<C> getNumbers() {
        return numbers;
    }

    @Override
    public Object getNumber() {
        return null;
    }

    public void setNumbers(List<C> numbers) {
        this.numbers = numbers;
    }

    public Double sum(List<C> numbers) {
        double res = 0;
        for (Number number : numbers) {
            res += number.doubleValue();
        }
        return res;
    }

    public Double product(List<C> numbers) {
        double res = 1;
        for (Number number : numbers) {
            res *= number.doubleValue();
        }
        return res;
    }

    public Double div(List<C> numbers) {
        double res = numbers.get(0).doubleValue();
        for (int i = 1; i < numbers.size(); i++) {
            if (numbers.get(i).doubleValue() != 0)
                res /= numbers.get(i).doubleValue();
        }
        return res;
    }
    public Long fromBinary(C num){return null;}
    public String toBinary(C num){return null;}


}