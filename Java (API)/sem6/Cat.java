public class Cat {
    String name, ownerName, poroda;
    int age;

    @Override
    public String toString() {
        return "name: " + name + ", owner: " + ownerName + ", poroda: " + poroda + ", age: " + age;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj){
            return true;
        }
        if (!(obj instanceof Cat)){
            return false;
        }
        Cat cat = (Cat) obj;
        return name.equals(cat.name) && ownerName.equals(cat.ownerName)
                && poroda.equals(cat.poroda) && age == cat.age;
    }

    @Override
    public int hashCode() {
        return name.hashCode() + 7 * ownerName.hashCode() + 11 * poroda.hashCode() + 17 * age;
    }
}