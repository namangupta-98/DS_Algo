function binarySearch(arr,val){
    let min = 0;
    let max = arr.length - 1;

    while(min<=max){
        let mid = Math.floor((min+max)/2);
        let currentElement = arr[mid];

        if(arr[mid] < val){
            min = mid + 1;
        }
        else if(arr[mid] > val){
            max = mid-1;
        }
        else
            return mid;
    }
    return -1;
}

binarySearch([2,4,5,1,3,6,9,7],6)   //5