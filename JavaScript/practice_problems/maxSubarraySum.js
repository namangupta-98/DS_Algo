function maxSubarraySum(arr,num){
    let maxsum = 0;
    let tempsum = 0;

    if(arr.length < num) return null;
    for(let i = 0; i < num; i++)
        maxsum += arr[i];
    
    tempsum = maxsum;

    for(let i = num; i < arr.length; i++){
        tempsum = maxsum - arr[i-num] +arr[i];
        maxsum = Math.max(maxsum,tempsum); 
    }
    
    return maxsum;
}