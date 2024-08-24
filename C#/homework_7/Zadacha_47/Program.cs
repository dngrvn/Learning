/* Задайте двумерный массив размером m×n, заполненный случайными вещественными 
числами.
m = 3, n = 4.
0,5 7 -2 -0,2
1 -3,3 8 -9,9
8 7,8 -7,1 9 */


System.Console.Write("Введите число строк: ");
int m = int.Parse(Console.ReadLine());
System.Console.Write("Введите число столбцов: ");
int n = int.Parse(Console.ReadLine());

double[,] GetArray(int m, int n)
{
    double[,] arr = new double[m, n];
    Random rnd = new Random();
    for (int i = 0; arr.GetLength(0) > i; i++)
    {
        for (int j = 0; arr.GetLength(1) > j; j++)
        {
            arr[i, j] = rnd.NextDouble() * 10;
        }
    }
    return arr;
}

void RndArray(double[,] array)
{
    for (int i = 0; i < array.GetLength(0); i++)
    {
        for (int j = 0; j < array.GetLength(1); j++)
        {
            Console.Write(string.Format("{0:F1}", array[i, j]) + "\t ");
        }
        Console.WriteLine();
    }
}

double[,] ArrayValue = GetArray(m, n);
RndArray(ArrayValue);