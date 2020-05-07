function countUniqueValues(arr){
    let i = 0;
    let j = 1;
    if(arr.length===0)
        return i;
    while(j < arr.length){
        if(arr[i]===arr[j]){
            j++;
        }
        else{
            arr[i+1]=arr[j];
            i++;
            j++;
        }
    }
    return ++i;
}

//countUniqueValues([0,1,2,2,4,4,5,5,6,6])