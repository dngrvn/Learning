# Даны два неупорядоченных набора целых чисел (может быть, с
# повторениями). Выдать без повторений в порядке возрастания все те числа, которые
# встречаются в обоих наборах.


number_m = int(input('Введите количество элементов первого списка -> '))
number_n = int(input('Введите количество элементов второго списка -> '))

print('Введите первый список: ')
list_1 = list()
for i in range(number_m):
    n = int(input())
    list_1.append(n)

print('Введите второй список: ')
list_2 = list()
for i in range(number_n):
    n = int(input())
    list_2.append(n)

list_1 = set(list_1)
list_2 = set(list_2)

result_set = sorted(list_1.intersection(list_2))

print("Встречаются без повторений в обоих списках: ", *result_set)



