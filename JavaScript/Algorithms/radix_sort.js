function get_digit(num,i){
    return Math.floor(Math.abs(num) / Math.pow(10,i)) % 10;
}

function digitCount(num){
    if(num===0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr){
    let maxDigits = 0;
    for( let i=0;i<arr.length;i++)
        maxDigits = Math.max(maxDigits,digitCount(arr[i]));
    return maxDigits;
}

function radix_sort(arr){
    let maxDigit = mostDigits(arr);
    for(let k=0;k<maxDigit;k++){
        let bucket = Array.from({length: 10},() => []);
        for(let j=0;j<arr.length;j++){
            let digit = get_digit(arr[j],k);
            bucket[digit].push(arr[j]);
        }
        arr = [].concat(...bucket);
    }
    return arr;
}

radix_sort([7655,565,36,663,393,384,225,110]);