<!-- Нарисовать блок-схемы:

Нахождение индексов максимального и минимального элемента массива (16)
Задание на «разворот» массива. Нужно перевернуть массив и записать его в обратном порядке. (17)
Найти сумму элементов массива, лежащих между максимальным и минимальным по значению элементами (15)
Найти среднее арифметическое среди всех элементов массива. (12) -->



Python
Индекс иаксимального и минимального значения
Не выводит min_number_index, не могу найти ошибку(((
numbers = 1, 8, 3, 2, 6
size = len(numbers)
current_index = 1
max_current_index = 0
min_current_index = 0
max = numbers[0]
min = numbers[0]
while current_index < size:
if numbers[current_index] > max:
max = numbers[current_index]
max_number_index = current_index
current_index = current_index + 1
while current_index < size:
if numbers[current_index] < min:
min = numbers[current_index]
min_number_index = current_index
current_index = current_index + 1
print(max_number_index)
print(min_number_index)

Разворот массива
numbers = [1, 8, 3, 2, 6]
numbers.reverse()
print(numbers)

Сумма значений между максимальным и минимальным
numbers = 1, 8, 3, 2, 6
size = len(numbers)
current_index = 0
max_current_index = 0
min_current_index = 0
max = numbers[0]
min = numbers[0]
while current_index < size:
if numbers[current_index] > max:
max = numbers[current_index]
max_number_index = current_index
current_index = current_index + 1
current_index = 0
while current_index < size:
if numbers[current_index] < min:
min = numbers[current_index]
min_number_index = current_index
current_index = current_index + 1
min = numbers[0]
print(sum(numbers) - max - min)

Среднее арифметическое
import statistics

numbers = [1, 8, 3, 2, 6]
print(statistics.mean(numbers))