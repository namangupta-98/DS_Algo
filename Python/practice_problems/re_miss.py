import sys


def remiss(arr):
    dict = {}
    min = sys.maxsize
    max = 0 - sys.maxsize
    print("Repeating:")
    for i in arr:
        if i not in dict:
            dict[i] = True
            if i < min: min = i
            if i > max: max = i
        else:
            print(i)

    print("Missing:")
    for i in range(min, max):
        if i not in dict:
            print(i)


arr = [3, 1, 4, 3, 6, 4]
remiss(arr)