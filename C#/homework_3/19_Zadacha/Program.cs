/* Напишите программу, которая принимает на вход пятизначное число и проверяет, является ли оно палиндромом.
14212 -> нет
12821 -> да
23432 -> да */

Console.Write("Введите число: ");
string i = (Console.ReadLine());

if (Palindrom(i))
{
    Console.WriteLine("Палиндром");
}
else
{
    Console.WriteLine("Не палиндром");
}

bool Palindrom (string s)
{
    for (int i = 0; i < s.Length / 2; i++)
    if (s[i] != s[s.Length - i - 1])
    {
        return false;
    }
    return true;    
}