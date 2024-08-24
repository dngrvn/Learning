# arr = list(map(int, input().split()))
# print(arr)

# def f1(n):
#     return n % 2 == 0

# pre_arr = input().split()
# print(pre_arr)
# pre_arr = list(map(int, pre_arr))

# arr = list(filter(f1, pre_arr))
# arr = list(filter(lambda x: x % 2 == 0, pre_arr))
# print(arr)

# arr1 = [1, 2, 3, 4, 5]
# arr2 = [11, 22, 33, 44, 55, 66]

# # zip объединяет списки в кортежи соответственно
# arr3 = list(zip(arr1, arr2)) 
# print(arr3)

arr = [11, 22, 33, 44, 55, 66]
# нумерует элементы в сиске
arr_res = list(enumerate(arr))
print(arr_res)