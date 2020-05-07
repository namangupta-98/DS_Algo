function sumZero(arr){
    let left = 0;
    let right = arr.length -1;

    while(left < right){
        let sum  = arr[left] + arr[right];
        if(sum === 0)
            return [arr[left],arr[right]];
        else if(sum > 0)
            right--;
        else
            left++;
    }

    return "undefined";
}

//sumZero([-4,-3,-2,-1,0,1,3,5,7])    [-3,3]
//sumZero([-4,-3,-2,-1,0,5,7])    "undefined"