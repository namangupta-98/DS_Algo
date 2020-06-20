def mergeInterval(arr):
    arr.sort(key=lambda x: x[0])
    index = 0
    for i in range(1, len(arr)):
        if arr[index][1] >= arr[i][0]:
            arr[index][1] = max(arr[index][1], arr[i][1])
            arr[index][0] = min(arr[index][0], arr[i][0])

        else:
            index += 1
            arr[index] = arr[i]

    for i in range(index+1):
        print(arr[i])


arr = [[1, 3], [2, 6], [8, 15], [16, 18]]
mergeInterval(arr)
