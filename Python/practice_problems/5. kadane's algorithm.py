# only get max sum from this method
# def kadaneInteger(arr):
#     max_so_far = arr[0]
#     curr_max = arr[0]
#
#     for i in range(1, len(arr)):
#         curr_max = max(arr[i], curr_max + arr[i])
#         max_so_far = max(max_so_far, curr_max)
#
#     return max_so_far

# can get max sum and position of sub array from this method
def kadanePos(arr):
    max_so_far, max_ending_here = 0, 0
    start, end = 0, 0
    s = 0
    for i in range(len(arr)):
        max_ending_here += arr[i]

        if max_ending_here < 0:
            max_ending_here = 0
            s = i + 1

        elif max_so_far < max_ending_here:
            max_so_far = max_ending_here
            start = s
            end = i

    print("max: " + str(max_so_far) + ", start: " + str(start) + ", end: " + str(end))


arr = [-2, -3, 4, -1, -2, 1, 5, -3]
kadanePos(arr)