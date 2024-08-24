/* Напишите программу, которая задаёт массив из 8 элементов и выводит их на экран.
1, 2, 5, 7, 19 -> [1, 2, 5, 7, 19]
6, 1, 33 -> [6, 1, 33] */
Console.WriteLine("Enter size of array ");
int size = int.Parse(Console.ReadLine());
int[] FillArray(int num)
{
    int[] Array = new int[num];
    Random rnd = new Random();
    for (int i = 0; i < Array.Length; i++)
    {
        Array[i] = rnd.Next(0, 100);
    }
    return Array;
}
int[] Arr = FillArray(size);
for (int i = 0; i < Arr.Length; i++)
{
    Console.Write(Arr[i] + " ");
}