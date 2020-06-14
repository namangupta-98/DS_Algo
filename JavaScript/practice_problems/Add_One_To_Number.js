//https://www.interviewbit.com/problems/add-one-to-number/
function add_one_to_number(A){
  if(A.length>1){
  for(let i=0;i<A.length;i++)
    if(A[0]===0)
      A = A.slice(1);
    else
      break;
  }
  let added = false;
  for(let i=A.length;i>0;i--){
    if(A[i-1]===9){
      A[i-1]=0;
    }
    else{
      A[i-1]+=1;
      added = true;
      break;
    }
  }
  if(!added){
    A.unshift(1);
  }

  console.log(A);
  return A;
}

add_one_to_number([0,0,9,9]);
