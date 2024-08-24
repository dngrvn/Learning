/* Напишите программу для вычисления площади круга, прямоугольника и 
треугольника. 
Ввод данных осуществляется в диалоговом режиме. 
На первом шаге у пользователя запрашивается фигура, 
площадь которой нужно вычислить. 
На втором шаге пользователь вводит параметры, необходимые для рассчета. 
Затем, выводится результат.*/

Console.WriteLine("Введите название фигуры, площать которой необходимо найти: ");
string figure = Console.ReadLine()!;

if (figure.ToLower() == "треугольник")
{
Console.Write("Введите высоту треугольника: ");
int h = int.Parse(Console.ReadLine());
Console.Write("Введите длину основания: ");
int a = int.Parse(Console.ReadLine());
Console.WriteLine("Площадь треугольника равна: " + (a*h)/2);


}
if (figure.ToLower() == "круг")
{
Console.Write("Введите радиус круга: ");
int r = int.Parse(Console.ReadLine());
Console.WriteLine("Площадь круга равна: " + (r*Math.PI));

}
if (figure.ToLower() == "прямоугольник")
{
Console.Write("Введите длину прямоугольника: ");
int d = int.Parse(Console.ReadLine());
Console.Write("Введите ширину прямоугольника: ");
int sh = int.Parse(Console.ReadLine());
Console.WriteLine("Площадь прямоугольника равна: " + (d*sh));

}