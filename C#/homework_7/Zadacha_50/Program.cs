/* Напишите программу, которая на вход принимает позиции элемента в двумерном 
массиве, и возвращает значение этого элемента или же указание, что такого 
элемента нет.
Например, задан массив:
1 4 7 2
5 9 2 3
8 4 2 4
17 -> такого числа в массиве нет */

Random rnd = new Random();
int strokaDlyaMassiva = rnd.Next(0, 10);
int stolbDlyaMassiva = rnd.Next(0, 10);

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
}


int[,] arr = GetArr(strokaDlyaMassiva, stolbDlyaMassiva);
PrintArr(arr);


System.Console.WriteLine("\n Введите номер строки 'с 0 строки'");
int strokaProverki = int.Parse(Console.ReadLine());
System.Console.WriteLine("Введите номер столбца 'с 0 столбца'");
int stolbProverki = int.Parse(Console.ReadLine());

if (strokaProverki <= strokaDlyaMassiva & stolbProverki <= stolbDlyaMassiva)
{
    System.Console.WriteLine("Вывод значения под адресом " + "[" + strokaProverki + "," + stolbProverki + "]: " + arr[strokaProverki, stolbProverki]);
}
else
{
    System.Console.WriteLine("За пределами массива");
}