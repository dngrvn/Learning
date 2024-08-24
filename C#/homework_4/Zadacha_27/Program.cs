/* Напишите программу, которая принимает на вход число и выдаёт сумму цифр в числе.
452 -> 11
82 -> 10
9012 -> 12 */

Console.WriteLine("Enter number: ");
int num = int.Parse(Console.ReadLine());
int sum = 0;
int num2;

while (num > 0)
{
    num2 = num % 10;
    num = num / 10;
    sum = sum + num2;
}
Console.WriteLine(sum);