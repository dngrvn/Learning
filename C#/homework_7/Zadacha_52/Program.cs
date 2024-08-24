/* Задайте двумерный массив из целых чисел. 
Найдите среднее арифметическое элементов в каждом столбце.
Например, задан массив:
1 4 7 2
5 9 2 3
8 4 2 4
Среднее арифметическое каждого столбца: 4,6; 5,6; 3,6; 3. */

Random rnd = new Random();
int strokaDlyaMassiva = rnd.Next(2, 5);
int stolbDlyaMassiva = rnd.Next(2, 5);

int[,] GetArr(int strokaDlyaMassiva, int stolbDlyaMassiva)
{
    int[,] arr = new int[strokaDlyaMassiva, stolbDlyaMassiva];
    Random rnd = new Random();

    for (int i = 0; arr.GetLength(0) > i; i++)
    {
        for (int j = 0; arr.GetLength(1) > j; j++)
        {
            arr[i, j] = rnd.Next(1, 50);
        }

    }
    return arr;
}

void PrintArr(int[,] array)
{
    Console.WriteLine();
    for (int i = 0; i < array.GetLength(0); i++)
    {
        for (int j = 0; j < array.GetLength(1); j++)
        {
            Console.Write(array[i, j] + "\t");
        }
        Console.WriteLine();

    }
    Console.WriteLine();
}

int[,] arr = GetArr(strokaDlyaMassiva, stolbDlyaMassiva);
PrintArr(arr);

double sredZnach = 0;

for (int i = 0; i < arr.GetLength(1); i++)
{
    for (int j = 0; j < arr.GetLength(0); j++)
    {
        sredZnach = (arr[j, i] + sredZnach);
    }
    sredZnach = sredZnach / arr.GetLength(0);
    System.Console.Write(string.Format("{0:F2}", sredZnach) + "; ");
    sredZnach = 0;
}