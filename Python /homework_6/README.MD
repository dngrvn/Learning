```python
# Задача 30: Заполните массив элементами арифметической
# прогрессии. Её первый элемент, разность и количество
# элементов нужно ввести с клавиатуры. Формула для
# получения n-го члена прогрессии: an = a1 + (n-1) * d.
# Каждое число вводится с новой строки.


a, d, n = [int(input(f'Please input {x}: ')) for x in ('first element', 'differences', 'amount')]

progression = [a + d * i for i in range(n)]

print(progression)
```

```python
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

```
```python
# n = '16856833'
# n = '14016856833'
# n = '9996'
n = '234523642345789812354678654323454919865'


# n = input("Please input number: ")

def divisible_seven(number: str, sign: int) -> int:
    if len(number) > 3:
        return sign * int(number[-3:]) + divisible_seven(number[:-3], -1 if sign == 1 else 1)
    else:
        return sign * int(number)


print(f'Number {n.strip()} is{" not" if divisible_seven(n.strip(), +1) % 7 else ""} divisible for seven')



print(f'Number {n.strip()} is{" not" if print_all(n.strip(), +1) % 7 else ""} divisible for seven')

```
