def merge(arr1, arr2):
    for i in range(len(arr2) - 1, -1, -1):
        last = arr1[len(arr1) - 1]
        j = len(arr1) - 2
        while j >= 0 and arr1[j] > arr2[i]:
            arr1[j + 1] = arr1[j]
            j -= 1

        if j != len(arr1) - 2 or last > arr2[i]:
            arr1[j + 1] = arr2[i]
            arr2[i] = last

    print(arr1)
    print(arr2)


arr1 = [1, 5, 9, 10, 15, 20]
arr2 = [2, 3, 8, 13]
merge(arr1, arr2)
