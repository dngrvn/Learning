// Дан массив nums = [3,2,5,3] и число val = 3.
// Если в массиве есть числа, равные заданному, нужно перенести эти элементы в конец массива.
// Таким образом, первые несколько (или все) элементов массива должны быть отличны от заданного, а остальные - равны ему.

public class Task2 {
    public static void main(String[] args) {
        
        int[] nums = new int[] {3, 2, 5, 3, 5, 3, 4, 1};
        int[] newNums = new int[nums.length];
        int val = 5;
        int countFront = 0,
            countBack = 0;

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == val){
                newNums[nums.length - 1 - countBack] = nums[i];
                countBack++;
            } else {
                newNums[countFront] = nums[i];
                countFront++;
            }
        }

        for (int i : newNums) {
            System.out.println(i);
        }
    }
}
