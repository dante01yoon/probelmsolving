const arr = [8,5,6,2,4]; 
//insertion sort
//in-place sort  추가 메모리를 요구하지 않는다. 
// 다음 예제는 increase order sort로 구현 
for(let i = 1 ; i < arr.length; i++){
  for(let j = 0; j < i; j++){
    if(arr[i] < arr[j]){
      let temp = arr[i]; 
      for( let k = i -1; k >= j; k--){
        arr[k+1] = arr[k];
      }
      arr[j] = temp; 
      break;
    }
    
  }
}

console.log(arr); 