def mergeSort(arr):
    temp_arr = [0] * len(arr)
    return ms(arr, temp_arr, 0, len(arr) - 1)


def ms(arr, temp_arr, left, right):
    inv_count = 0

    if left < right:
        mid = (left + right) // 2

        # left decomposition
        inv_count += ms(arr, temp_arr, left, mid)

        # right decompositon
        inv_count += ms(arr, temp_arr, mid + 1, right)

        # calculate inverse for each decomposed array
        inv_count += merge(arr, temp_arr, left, mid, right)

    return inv_count


def merge(arr, temp_arr, left, mid, right):
    i = left
    j = mid + 1
    k = left
    inv_count = 0

    while i <= mid and j <= right:
        if arr[i] <= arr[j]:
            temp_arr[k] = arr[i]
            k += 1
            i += 1
        else:
            temp_arr[k] = arr[j]
            inv_count += (mid - i + 1)
            k += 1
            j += 1

    while i <= mid:
        temp_arr[k] = arr[i]
        k += 1
        i += 1

    while j <= right:
        temp_arr[k] = arr[j]
        k += 1
        j += 1

    for e in range(left, right + 1):
        arr[e] = temp_arr[e]

    return inv_count


arr = [5, 4, 6, 2, 4]
print(mergeSort(arr))