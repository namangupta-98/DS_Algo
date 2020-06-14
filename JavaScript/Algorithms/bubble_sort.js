function bubbleSort(arr){
    let swapped;
    for(let i=arr.length;i>0;i--){
        swapped = true;
        for(let j=0;j<i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                swapped = false;
            }
        }
        if(swapped) break;
    }
    return arr;
}

bubbleSort([5,4,8,9,1,2,3]);
