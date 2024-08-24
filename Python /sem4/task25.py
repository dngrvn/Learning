string = input('Введите элементы списка через пробел -> ').split()
dict = {}
res = ''
for i in string:
    if i in dict:
        dict[i] += 1
        res += str(i) + '_'+ str(dict[i]) + ' '
    else:
        dict[i] = 0
        res += str(i) + ' '
print(res)

print(dict)

