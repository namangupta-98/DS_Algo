//memotization
function fib_memo1(n,memo=[undefined,1,1]){
    if(memo[n]!==undefined) return memo[n];
    let result = fib(n-1,memo) + fib(n-2,memo);
    memo[n] = result;
    return result;
}
function fib_memo2(n,memo=[]){
    if(memo[n]!==undefined) return memo[n];
    if(n<=2) return 1;
    let result = fib(n-1,memo) + fib(n-2,memo);
    memo[n] = result;
    return result;
}
//tabulation
function fib_table(n){
    if(n<=2) return 1;
    let fibNums = [0,1,1];
    for(let i=3;i<=n;i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums[n];
}