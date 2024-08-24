# Задача 30: Заполните массив элементами арифметической
# прогрессии. Её первый элемент, разность и количество
# элементов нужно ввести с клавиатуры. Формула для
# получения n-го члена прогрессии: an = a1 + (n-1) * d.
# Каждое число вводится с новой строки.


a, d, n = [int(input(f'Please input {x}: ')) for x in ('first element', 'differences', 'amount')]

progression = [a + d * i for i in range(n)]

print(progression)