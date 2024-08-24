/*Напишите программу вычисления функции Аккермана с помощью рекурсии. 
Даны два неотрицательных числа m и n.
m = 2, n = 3 -> A(m,n) = 29*/



Console.Write("Enter m: ");
int m = Convert.ToInt32(Console.ReadLine());

Console.Write("Enter n: ");
int n = Convert.ToInt32(Console.ReadLine());

Aker(n, m);
static int Aker(int m, int n)
{
    if (m == 0)
        return n + 1;

    if (m != 0 && n == 0)
        return Aker(m - 1, 1);

    if (m > 0 && n > 0)
        return Aker(m - 1, Aker(m, n - 1));
    return Aker(m, n);
}
System.Console.WriteLine(Aker(m, n));