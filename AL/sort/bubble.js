// bubble sort
// increase order 
const arr = [7,4,5,1,3];

for(let i = 0 ; i < arr.length; i++){
  let j = arr.length -1;
  while(j > i ){
   if(arr[j] < arr[j-1]) 
    [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
   j--; 
  }
}

console.log(arr) // 1, 3, 4, 5, 7