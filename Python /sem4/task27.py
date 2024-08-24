# Дан текст. Выведите слово, которое в этом тексте встречается чаще всего.
# Если таких слов несколько, выведите то, 
# которое меньше в лексикографическом порядке.

# She sells sea shells on the sea shore The shells that she sells are sea shells I'm sure.So if she sells sea shells on the sea shore I'm sure that the shells are sea shore shells

import re

string = re.split(' |\\.', input('Введите текст -> ').lower())
string.sort()
dict = {}
for i in string:
    if i not in dict:
        dict[i] = 1
    else:
        dict[i] += 1

max_val = 0
max_key = ''
for key, value in dict.items():
    if value > max_val:
        max_val = value
        max_key = key
print(f'Слово которое чаще всего встречалось - {max_key}, оно встретилось - {max_val} раз/раза!' )