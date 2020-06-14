function merge(first,second){
    let results = [];
    let i=0;
    let j=0;
    while(i < first.length && j < second.length){
        if(first[i] < second[j]){
            results.push(first[i]);
            i++;
        }
        else{
            results.push(second[j]);
            j++;
        }
    }
    while(i<first.length){
        results.push(first[i]);
        i++;        
    }
    while(j<second.length){
        results.push(second[j]);
        j++;        
    }
    return results;
}

function merge_sort(arr){
    if(arr.length<=1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = merge_sort(arr.slice(0,mid));
    let right = merge_sort(arr.slice(mid));
    return merge(left,right);
}

merge_sort([4,9,1,3,1,6,3,1,48]);