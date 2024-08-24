/* Задайте две матрицы. Напишите программу, которая будет находить 
произведение двух матриц.
Например, заданы 2 массива:
1 4 7 2                 1 5 8 5
5 9 2 3         и       4 9 4 2  
8 4 2 4                 7 2 2 6  
5 2 6 7                 2 3 4 7    
Их произведение будет равно следующему массиву:
1 20 56 10
20 81 8 6
56 8 4 24
10 6 24 49 */

int m = new Random().Next(3, 6);
int n = new Random().Next(3, 6);
int p = new Random().Next(3, 6);

int[,] Martrix1 = new int[m, n];
GetArray(Martrix1);
Console.WriteLine($"\n1-ая матрица:\n");
PrintArray(Martrix1);

int[,] Martrix2 = new int[n, p];
GetArray(Martrix2);
Console.WriteLine($"\n2-ая матрица:\n");
PrintArray(Martrix2);

int[,] resultMatrix = new int[m, p];
MultiplyMatrix(Martrix1, Martrix2, resultMatrix);
Console.WriteLine($"\nПроизведение матриц №1 и №2:\n");
PrintArray(resultMatrix);

void MultiplyMatrix(int[,] Martrix1, int[,] Martrix2, int[,] resultMatrix)
{
    for (int i = 0; i < resultMatrix.GetLength(0); i++)
    {
        for (int j = 0; j < resultMatrix.GetLength(1); j++)
        {
            int sum = 0;
            for (int k = 0; k < Martrix1.GetLength(1); k++)
            {
                sum += Martrix1[i, k] * Martrix2[k, j];
            }
            resultMatrix[i, j] = sum;
        }
    }
}

void GetArray(int[,] array)
{
    for (int i = 0; i < array.GetLength(0); i++)
    {
        for (int j = 0; j < array.GetLength(1); j++)
        {
            array[i, j] = new Random().Next(1, 21);
        }
    }
}

void PrintArray(int[,] array)
{
    for (int i = 0; i < array.GetLength(0); i++)
    {
        for (int j = 0; j < array.GetLength(1); j++)
        {
            Console.Write(array[i, j] + "\t");
        }
        Console.WriteLine();
    }
}