/* Задайте значения M и N. Напишите программу, которая найдёт сумму 
натуральных элементов в промежутке от M до N.
M = 1; N = 15 -> 120
M = 4; N = 8. -> 30*/


int sum = 0;
Console.Write("Enter M: ");

int m = Convert.ToInt16(Console.ReadLine());
Console.Write("Enter N: ");

int n = Convert.ToInt16(Console.ReadLine());
for (int i = m; i <= n; i++)
    sum += i;
Console.WriteLine(sum);