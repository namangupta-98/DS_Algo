def repeated(arr):
    arr_dup = {}
    for i in arr:
        if i not in arr_dup:
            arr_dup[i] = 1
        else:
            arr_dup[i] += 1
    for key, value in arr_dup.items():
        if value > 1:
            print(key)

    print(arr_dup)


arr = [1, 2, 3, 1, 3, 6, 6]
repeated(arr)
