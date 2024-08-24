# Задача 32: Определить индексы элементов массива (списка),
# значения которых принадлежат заданному диапазону
# (т.е. не меньше заданного минимума и не больше заданного максимума)
# Ввод: [-5, 9, 0, 3, -1, -2, 1, 4, -2, 10, 2, 0, -9, 8, 10, -9, 0, -5, -5, 7]
# # Диапазон от 6 до 12
# # Вывод: [1, 9, 13, 14, 19]
import random

n = [random.randint(1, 10) for _ in range(random.randint(8, 15))]
print(n)
min_value, max_value = [int(input(f'Please input {_} value: ')) for _ in ('min', 'max')]

[print(_, end=' ') for _ in range(len(n)) if min_value <= n[_] <= max_value]
