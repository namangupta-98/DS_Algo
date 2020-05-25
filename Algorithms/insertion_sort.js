function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let currentVar = arr[i];
        let j;
        for(j=i-1;j>=0 && arr[j] > currentVar;j--){
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentVar;
    }
    return arr;
}