/* Напишите программу, которая на вход принимает два числа и выдаёт максимальное из этих чисел.
a = 5; b = 7 -> max = 7
a = 2 b = 10 -> max = 10
a = -9 b = -3 -> max = -3*/

Console.WriteLine("Enter first number ");
int a = int.Parse(Console.ReadLine());
Console.WriteLine ("First number = " + a);

Console.WriteLine("Enter second number ");
int b = int.Parse(Console.ReadLine());
Console.WriteLine("Second number = " + b);

if (a > b) 
{
    Console.WriteLine("max = " + a);
}
else 
{
    Console.WriteLine("max = " + b);
}
