function pivot(arr,start=0,end=arr.length-1){
    function swap(arr,i,j){
        [arr[i],arr[j]] = [arr[j],arr[i]];
    }

    let pivot = arr[start];
    let swapIdx = start;

    for(let i=start+1;i<arr.length;i++){
        if(pivot>arr[i]){
            swapIdx++;
            swap(arr,swapIdx,i);        
        }
    }
    swap(arr,start,swapIdx);
    return swapIdx;   
}

function quick_sort(arr,left=0,right=arr.length-1){
    if(left<right){
        let pivotIndex = pivot(arr,left,right);
        //left
        quick_sort(arr,left,pivotIndex-1);
        //right
        quick_sort(arr,pivotIndex+1,right);
    }
    return arr;
}

quick_sort([100,649,2,56,3,44,532,-1,-8]);