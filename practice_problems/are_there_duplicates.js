// function areThereDuplicates(){
//     let collection = {};

//     for(let val in arguments){

//         collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
//     }

//     for(let key in collection){
//         if(collection[key]>1)
//             return true;
//     }
//     return false;
// }



// function areThereDuplicates(...args){
//     args.sort();
//     console.log(args)
//     let start = 0;
//     let next = 1;
//     while(next < args.length){
//         if(args[start]===args[next])
//             return true;
//         start++;
//         next++;  
//     }
//     return false;
// }



function areThereDuplicates(){
    return new Set(arguments).size !== arguments.length;
}