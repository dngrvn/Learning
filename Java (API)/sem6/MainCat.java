import java.util.HashSet;
import java.util.Set;

public class MainCat {
    /*
    Продумайте структуру класса Кот. Какие поля и методы будут актуальны для приложения, которое является
    а) информационной системой ветеринарной клиники
    б) архивом выставки котов
    в) информационной системой Театра кошек Ю. Д. Куклачёва
    Можно записать в текстовом виде, не обязательно реализовывать в java
    */
    /*
    Реализуйте 1 из вариантов класса Cat из предыдущего задания, можно использовать не все придуманные поля и методы.
    Создайте несколько экземпляров этого класса, выведите их в консоль.
    Добейтесь того, чтобы при выводе в консоль объекта типа Cat,
    выводилась его кличка, цвет и возраст (или другие параметры на ваше усмотрение)
     */
    /*
    Создайте множество, в котором будут храниться экземпляры класса Cat - HashSet.
    Поместите в него некоторое количество объектов.
    Создайте 2 или более котов с одинаковыми параметрами в полях. Поместите их во множество.
    Убедитесь, что все они сохранились во множество.
    Создайте метод public boolean equals(Object o)
    Пропишите в нём логику сравнения котов по параметрам, хранимым в полях.
    То есть, метод должен возвращать true, только если значения во всех полях сравниваемых объектов равны.
    Выведите снова содержимое множества из пункта 2, убедитесь, что дубликаты удалились.
     */
    public static void main(String[] args) {
        Set<Cat> cats = new HashSet<>();

        Cat cat1 = new Cat();
        cat1.name = "Барсик";
        cat1.age = 8;
        cat1.poroda = "Вислоухие";
        cat1.ownerName = "Василий Петрович";

        Cat cat2 = new Cat();
        cat2.name = "Маша";
        cat2.age = 10;
        cat2.poroda = "Дворняга";
        cat2.ownerName = "Татьяна Федоровна";

        Cat cat3 = new Cat();
        cat3.name = "Васька";
        cat3.age = 5;
        cat3.poroda = "Перс";
        cat3.ownerName = "Иван Иваныч";

        Cat cat4 = new Cat();
        cat4.name = "Васька";
        cat4.age = 5;
        cat4.poroda = "Перс";
        cat4.ownerName = "Иван Иваныч";

        cats.add(cat1);
        cats.add(cat2);
        cats.add(cat3);
        cats.add(cat4);

        printSet(cats);
        System.out.println();
        System.out.println(findCat(cats, 7));
    }

    static Set<Cat> findCat(Set<Cat> cats, int minAge){
        Set<Cat> res = new HashSet<>();
        for (Cat cat: cats){
            if (cat.age >= minAge){
                res.add(cat);
            }
        }
        return res;
    }

    static void printSet(Set<Cat> set){
        for (Cat cat: set){
            System.out.println(cat);
        }
    }
}