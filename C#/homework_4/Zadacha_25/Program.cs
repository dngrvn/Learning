/* Напишите цикл, который принимает на вход два числа (A и B) и возводит число A в натуральную степень B.
3, 5 -> 243 (3⁵)
2, 4 -> 16 */

Console.Write("Введите число: ");
int num1 = int.Parse(Console.ReadLine());

Console.Write("Введите степень: ");
int num2 = int.Parse(Console.ReadLine());

int num21 = num2;
int num12 = num1;

while (num2 > 1)
{
    num2 = num2 - 1;
    num1 = num1 * num12;
}
Console.WriteLine(num1);