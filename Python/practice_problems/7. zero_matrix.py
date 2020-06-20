def zmatrixSpace(arr):
    row_size = len(arr)
    col_size = len(arr[0])

    row = [1] * row_size
    col = [1] * col_size

    for i in range(row_size):
        for j in range(col_size):
            if arr[i][j] == 0:
                row[i] = 0
                col[i] = 0

    for i in range(row_size):
        for j in range(col_size):
            if row[i] == 0 or col[j] == 0:
                arr[i][j] = 0

    print(arr)


def zmatrix(arr):
    row_size = len(arr)
    col_size = len(arr[0])

    row_flag = True
    col_flag = True

    for i in range(row_size):
        for j in range(col_size):
            if i == 0 and arr[i][j] == 0:
                row_flag = False

            if j == 0 and arr[i][j] == 0:
                col_flag = False

            if arr[i][j] == 0:
                arr[0][j] = 0
                arr[i][0] = 0

    for i in range(1, row_size):
        for j in range(1, col_size):
            print(arr[0][j])
            print(arr[i][0])
            if arr[0][j] == 0 or arr[i][0] == 0:
                arr[i][j] = 0

    if (row_flag == False):
        for i in range(0, row_size):
            arr[0][i] = 0

    if (col_flag == False):
        for j in range(0, col_size):
            arr[j][0] = 0

    print(arr)


arr = [
    [1, 0, 1],
    [0, 0, 0],
    [1, 1, 1]
]
zmatrixSpace(arr)
