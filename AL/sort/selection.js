//추가 공간을 사용하지 않는 선택정렬. 
//입력배열이외에 다른 추가 메모리를 요구하지 않는다.
//만약 추가 공간을 사용한다면 코드를 더 간결하게 만들 수 있다. 
const arr = [9,6,7,3,5];

for( let i = 0 ; i < arr.length; i++){
  let j = i; 
  let min = void 0; 
  while(j <arr.length){
    if(min) 
      min = arr[min] > arr[j] ? j : min;
    else min = j;  
    j++;
  }  
  [arr[i], arr[min]] = [ arr[min], arr[i]]; 
}

console.log(arr)  // [3, 5, 6, 7, 9]

 