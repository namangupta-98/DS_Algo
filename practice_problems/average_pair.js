function averagePair(arr,val){
    let start = 0;
    let end = arr.length - 1;

    while(start < end){
        let avg = (arr[start] + arr[end]) / 2;
        if(avg === val) return true;
        else if (avg < val) start++;
        else end--;
    }
    return false;
}