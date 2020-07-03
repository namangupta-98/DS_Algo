def rev(arr,start,end):
    while(start<end):
        arr[start],arr[end] = arr[end],arr[start]
        start+=1
        end-=1

    return arr

def nextPermuatation(arr):
    k = len(arr) - 2
    while(k>=0 and arr[k] >= arr[k+1]):
        k-=1

    if(k==-1):
        arr = rev(arr,0,len(arr))
        print(arr)
        return

    j = len(arr) - 1

    while(j>k):
        if(arr[j]>arr[k]):
            break
        j-=1
    arr[j],arr[k] = arr[k],arr[j]

    arr = rev(arr,k+1,len(arr)-1)

    print(arr)


nextPermuatation([4, 5, 6, 3, 2, 1])