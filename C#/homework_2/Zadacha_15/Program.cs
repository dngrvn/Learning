/* Напишите программу, которая принимает на вход цифру, обозначающую день недели, и проверяет, является ли этот день выходным.
6 -> да
7 -> да
1 -> нет */

Console.WriteLine("Enter number day of week: ");
int i = int.Parse(Console.ReadLine());

if (i < 6)
Console.WriteLine("Рабочий день");
if (i == 6)
Console.WriteLine("Выходной");
if (i == 7)
Console.WriteLine("Выходной");
if (i > 7)
Console.WriteLine("Нет такого номера дня в неделе");