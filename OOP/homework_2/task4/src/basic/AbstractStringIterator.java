package basic;

/**
 * Абстрактное представление об итераторе для строки,
 * содержащей математическое выражение.
 */
public interface AbstractStringIterator {
    /**
     * Проверяет наличие следующего элемента сроки.
     *
     * @return true, если следующий элемент строки существует, иначе - false.
     */
    boolean hasNext();

    /**
     * Возвращает следующий элемент строки.
     *
     * @return элемент строки.
     */
    String next();
}