def sot(arr):
    count0, count1, count2 = 0, 0, 0
    for i in arr:
        if i == 0:
            count0 += 1
        elif i == 1:
            count1 += 1
        else:
            count2 += 1

    i = 0
    while count0 > 0:
        arr[i] = 0
        i += 1
        count0 -= 1

    while count1 > 0:
        arr[i] = 1
        i += 1
        count1 -= 1

    while count2 > 0:
        arr[i] = 2
        i += 1
        count2 -= 1

    print(arr)


arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]
sot(arr)

