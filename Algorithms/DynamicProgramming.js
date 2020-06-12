//DP: - A method for solving a complex problem by breaking it down int a collection of simpler problems, 
//solving each of those subproblems just once & storing their solutions. 
// Complexity: O(N)

// Two types:
//1. Overlapping subproblems:-
//A problem is said to have overlapping subproblems if it can be broken down into subproblems which are reused
//several times.

//2. Optimal Subtructure:-
//A problem is said to be have an optimal substructure if an optimal solution can be constructed from an optimal
//solution of its subproblems.

function fib_naive(n){
    if(n<=2) return 1;
    return fib_naive(n-1)+fib_naive(n-2);
}

//Two methods:
//1. Memotization: Storing the results of expensive function calls and executing the cached result when 
//same inputs occur again.

function fib_memo1(n,memo=[]){ //for js,python
    if(memo[n]!==undefined) return memo[n];
    if(n<=2) return 1;
    let result = fib_memo1(n-1,memo)+fib_memo1(n-2,memo);
    memo[n] = result;
    return result;
}
function fib_memo2(n,memo=[undefined,1,1]){ //c++,Java,Go
    if(memo[n]!==undefined) return memo[n];
    let result = fib_memo2(n-1,memo)+fib_memo2(n-2,memo);
    memo[n] = result;
    return result;
}

//2. Tabulation: storing the results of previous results in a "table" (usually an array). Usually its done using 
//iteration. Better space complexity can be achieved using tabulation also known as bottom-up approach.

function fib_table(n){
    if(n<=2) return 1;
    let fibNums = [0,1,1];
    for(let i=3;i<=n;i++){
        fibNums[i] = fibNums[i-1] +fibNums[i-2];
    }
    return fibNums[n];
}


