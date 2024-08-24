# 1) Дан список, вывести в отдельном списке буквы, а в другом цифры, используя фильтр.

# ["asd", 1, 2, "gfd"]
# ["asd", "gfd"][1,2]


arr = ["asd", 1, 2, "gfd"]

arr_int = list(filter(lambda n: isinstance(n, int), arr))
arr_int1 = list(filter(lambda x: type(x) == int, arr))
print(arr_int1)

arr_str = list(filter(lambda n: isinstance(n, str), arr))
print(arr_str)
 
    

