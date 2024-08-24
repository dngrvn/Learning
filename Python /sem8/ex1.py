# with open("text.txt", 'w') as data:
#     data.write("pisa\n")

data = open("text.txt", 'w')
spisok = ["ajshdva", "Suhdvihq"]
data.writelines(spisok)
data.close()

data2 = open("text.txt", 'r')
for i in data2:
    print(i)