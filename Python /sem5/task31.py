# Задача №17. Решение в группах
# Дан список чисел. Определите, сколько в нем
# встречается различных чисел.
# Input: [1, 1, 2, 0, -1, 3, 4, 4]
# Output: 6
# Примечание: Пользователь может вводить значения
# списка или список задан изначально.

#  ВАРИАНТ 1 (ВЫБОР РУЧНОГО ИЛИ АВТОМАТИЧЕСКОГО РЕЖИМА)
# import random
#
# array_frs = []
# # Пользователь выбирает вручную или автоматически
# while True:
#     a = input('Как вы хотите заполнить список. Напишите (вручную или автоматически) -> ')
#     if a == 'вручную':
#         break
#     if a == 'автоматически':
#         break
#
# while True:
#     array_len = int(input('Введите длину списка -> '))
#     if array_len > 0:
#         break
#
# # Заполнение списка
# if a == 'вручную':
#     i = 1
#     while i <= array_len:
#         a = int(input(f'Введите {i} элемент списка -> '))
#         array_frs.append(a)
#         i += 1
# if a == 'автоматически':
#     while array_len > 0:
#         a = random.randint(-20, 20)
#         array_frs.append(a)
#         array_len -= 1
#
# print(array_frs)
#
# array_scnd = []
# count = 0
#
# # Метод подсчета уникальных знаков
# for i in array_frs:
#     if i not in array_scnd:
#         count += 1
#         array_scnd.append(i)
#
# print(f'В списке {count} различных чисел')

# ВАРИАНТ 2 (Элегантное решение в 1 строчку)
# print(len(set(input('Введите элементы списка через пробел').split())))

# ВАРИАНТ 3 (Лист дан или пользователь сам вводит)

# array = []
# # [1, 1, 2, 0, -1, 3, 4, 4]
# while True:
#     n = int(input('Введите длину списка -> '))
#     if n > 0:
#         j = 1
#         while j <= n:
#             array.append(int(input(f'Введите {j} элемент массива -> ')))
#             j += 1
#         break
#
# compare_arr = []
# count = 0
#
# for i in array:
#     if i not in compare_arr:
#         count += 1
#         compare_arr.append(i)
#
# print(f'В списке {count} различных чисел')

# Задача №19. Решение в группах
# Дана последовательность из N целых чисел и число
# K. Необходимо сдвинуть всю последовательность
# (сдвиг - циклический) на K элементов вправо, K –
# положительное число.
# Input: [1, 2, 3, 4, 5] k = 3
# Output: [4, 5, 1, 2, 3]
# Примечание: Пользователь может вводить значения
# списка или список задан изначально.

# 1 ВАРИАНТ (строго по ТЗ)

# array = []
# # [1, 2, 3, 4, 5]
#
# while True:
#     n = int(input('Введите длину списка -> '))
#     if n > 0:
#         j = 1
#         while j <= n:
#             array.append(int(input(f'Введите {j} элемент массива -> ')))
#             j += 1
#         break
#
# print(array)
#
# while True:
#     k = int(input('Введите (k - кол-во на которое нужно сместить) -> '))
#     if k > 0:
#         break
#
# array_scnd = []
#
# for i in array[k:]:
#     array_scnd.append(i)
# for i in array[:k]:
#     array_scnd.append(i)
#
# print(array_scnd)

# 2 Вариант (Пользователь выбирает в какую сторону
# сдвинуть массив и массив сам заполняется) - Универсальный

# import random
#
# array_frs = []
#
# while True:
#     a = input('Как вы хотите заполнить список. Напишите (вручную или автоматически) -> ')
#     if a == 'вручную' or a == 'автоматически':
#         break
#
# while True:
#     array_len = int(input('Введите длину списка -> '))
#     if array_len > 0:
#         break
#
# # Заполнение списка
# if a == 'вручную':
#     i = 1
#     while i <= array_len:
#         a = int(input(f'Введите {i} элемент списка -> '))
#         array_frs.append(a)
#         i += 1
# if a == 'автоматически':
#     while array_len > 0:
#         a = random.randint(-20, 20)
#         array_frs.append(a)
#         array_len -= 1
#
# print(array_frs)
# array_scnd = []
#
# while True:
#     p = input('В какую сторону вы хотите сдвинуть массив (влево/вправо) -> ')
#     if p == 'влево' or p == 'вправо':
#         break
#
# while True:
#     k = int(input('Введите (k - кол-во на которое нужно сместить) -> '))
#     if k > 0:
#         break
#
# if p == 'вправо':
#     array_frs = list(reversed(array_frs))
# for i in array_frs[k:]: #[len - k:] - 12 строчек
#     array_scnd.append(i)
# for i in array_frs[:k]: #[:len - k]
#     array_scnd.append(i)
# if p == 'вправо':
#     array_scnd = list(reversed(array_scnd))
#
# print(array_scnd)

# 3 ВАРИАНТ короткое решение
# spisok = [1,2,3,4,5,6,7]
# k = int(input("Введите значение"))
# spisok = spisok[len(spisok) - k :] + spisok[:len(spisok) - k]
# print(spisok)

# Задача №21. Решение в группах
# Напишите программу для печати всех уникальных
# значений в словаре.
# Input: [{"V": "S001"}, {"V": "S002"}, {"VI": "S001"},
# {"VI": "S005"}, {"VII": " S005 "}, {" V ":" S009 "}, {" VIII
# ":" S007 "}]
# Output: {'S005', 'S002', 'S007', 'S001', 'S009'}
# Примечание: Список словарей задан изначально.
# Пользователь его не вводит

# 1 Вариант (ТЗ здорового человека)
# data = {'1': 'S001',
#         '2': 'S002',
#         '3': 'S001',
#         '4': 'S005',
#         '5': 'S005',
#         '6': 'S009',
#         '7': 'S007'}
#
# array = []
#
# for key in data:
#         if data[key] not in array:
#                 array.append(data[key])
#
# print(array)


# data = {'1': 'S001',
#         '2': 'S002',
#         '3': 'S001',
#         '4': 'S005',
#         '5': 'S005',
#         '6': 'S009',
#         '7': 'S007'}
#
# print(set([value for key, value in data.items()]))
#
# print(set(data.values()))

# 2 Вариант (ТЗ курильщика)

# dict = [{"V": "S001"}, {"V": "S002"}, {"VI": "S001"},
# {"VI": "S005"}, {"VII": "S005"}, {" V ": "S009"}, {" VIII ": "S007"}]
#
# array = []
#
# # из массива словарей в массив значений (ключей) в словаре
# for i in range(0, len(dict)):
#         a = dict[i]
#         for key in a:
#                 array.append(a[key])
#
# new_array = []
#
# for j in array:
#         if j not in new_array:
#                 new_array.append(j)
#
# print(new_array)


# Задача №23. Решение в группах
# Дан массив, состоящий из целых чисел. Напишите
# программу, которая подсчитает количество
# элементов массива, больших предыдущего (элемента
# с предыдущим номером)
# Input: [0, -1, 5, 2, 3]
# Output: 2 (-1 < 5, 2 < 3)
# Примечание: Пользователь может вводить значения
# списка или список задан изначально.


# 1 Вариант строго по тз

# array = [0, -1, 5, 2, 3]
# print(len([array[i] for i in range(1, len(array)) if array[i-1] < array[i]]))
# a = ''
# for i in range(1, len(array)):
#     if array[i - 1] < array[i]:
#         a += ' (' + str(array[i - 1]) + ' < ' + str(array[i]) + ') '
# print(a)


# spisok = [4, 3, 5, 6, 1, 2]
# chislo = [[spisok[i-1], spisok[i]] for i in range(1, len(spisok)) if spisok[i] > spisok[i-1]]
# chislo2 = [print(' (' + str(item[0]) + ' < ' + str(item[1]) + ') ') for item in chislo]

# array = []
# # [0, -1, 5, 2, 3]
#
# while True:
#     n = int(input('Введите длину списка -> '))
#     if n > 0:
#         j = 1
#         while j <= n:
#             array.append(int(input(f'Введите {j} элемент массива -> ')))
#             j += 1
#         break
#
# print(array)
# count = 0
# frst = array[0]
# scnd = array[1]
#
# for i in range(0, len(array)):
#     if frst < scnd:
#         count += 1
#     frst, scnd = scnd, array[i]
#
# print(count)

# 2 ВАРИАНТ (универсальный + вывод значений которые больше)

import random

array_frs = []

while True:
    a = input('Как вы хотите заполнить список. Напишите (вручную или автоматически) -> ')
    if a == 'вручную' or a == 'автоматически':
        break

while True:
    array_len = int(input('Введите длину списка -> '))
    if array_len > 0:
        break

# Заполнение списка
if a == 'вручную':
    i = 1
    while i <= array_len:
        a = int(input(f'Введите {i} элемент списка -> '))
        array_frs.append(a)
        i += 1
if a == 'автоматически':
    while array_len > 0:
        a = random.randint(-20, 20)
        array_frs.append(a)
        array_len -= 1

print(array_frs)
count = 0
res_array = ''


for i in range(1, len(array_frs)):
    frst, scnd = array_frs[i-1], array_frs[i]
    if frst < scnd:
        res_array += ' (' + str(frst) + ' < ' + str(scnd) + ') '
        count += 1


print(count)
print(res_array)