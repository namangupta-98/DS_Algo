function computeLpsArray(pattern){
    let auxArr = new Array(pattern.length).fill(0);
    let i = 1;
    let len = 0;
    while(i<pattern.length){
        if(pattern[i]===pattern[len]){
            len++;
            auxArr[i]=len;
            i++;
        }
        else{
            if(len!=0){
                len=auxArr[len-1];
            }
            else{
                auxArr[i]=0;
                i++;
            }
        }
    }
    return auxArr;
}
function kmpSearch(pattern,text){
       let lps = computeLpsArray(pattern);
       console.log(lps)
       let i = 0;
       let j = 0;
       let count = 0;
       while(i<text.length){
           if(pattern[j]===text[i]){
               i++;
               j++;
           }
           if(j===pattern.length){
               count++;
               j = lps[j-1];
           }
           else if(i<text.length && pattern[j] !== text[i]){
               if(j!==0)
                j = lps[j-1];
               else
                i++;
           }
       }
       return count;
}


kmpSearch("abcdabcaa","ababcabcababd");
