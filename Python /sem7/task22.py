# 2) Дано вещественное число, показать сумму его цифр.

def print_with_type(n):
    print(n, ':', type(n))

number = 3.12
print_with_type(number)

str_number = str(number)

list_number = []
for a in str_number:
    list_number.append(a)

list_number_not_dot = list(filter(lambda x: x != '.', list_number))

int_number = list(map(int, list_number_not_dot))

sum_number = sum(int_number)
print_with_type(sum_number)

print(sum(map(lambda x: int(x), str(number).replace(".", ""))))