/*Напишите программу, которая принимает на вход три числа и выдаёт максимальное из этих чисел.
2, 3, 7 -> 7
44 5 78 -> 78
22 3 9 -> 22
*/

Console.WriteLine("Enter First number: ");
int a = int.Parse(Console.ReadLine());
Console.WriteLine("First number = " + a);

Console.WriteLine("Enter Second number: ");
int b = int.Parse(Console.ReadLine());
Console.WriteLine("Second number = " + b);

Console.WriteLine("Enter third number: ");
int c = int.Parse(Console.ReadLine());
Console.WriteLine("Third number = " + c);

int max = a;

if (a > max) max = a;
if (b > max) max = b;
if (c > max) max = c;

Console.WriteLine("max = " +max);