package gb.oop.homeworks.model;

public interface iBinaryCalculator<T> {
    Long fromBinary(T num);

    String toBinary(T num);

    Object getNumber();
}
