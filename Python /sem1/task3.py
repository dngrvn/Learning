# В некоторой школе решили набрать три новых
# математических класса и оборудовать кабинеты для
# них новыми партами. За каждой партой может сидеть
# два учащихся. Известно количество учащихся в
# каждом из трех классов. Выведите наименьшее
# число парт, которое нужно приобрести для них.

klass1 = int(input("Количество людей в 1 классе >"))
klass2 = int(input("Количество людей в 2 классе >"))
klass3 = int(input("Количество людей в 3 классе >"))

desk_number = round((klass1 + klass2 + klass3)/2)
print(f'Нужно {desk_number} парт')

