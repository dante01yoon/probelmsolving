function solution(begin, target, words) {
  var answer = new Array();
  let count = 0; 
  recursion(begin, words, target, count,answer); 
  if( answer.length )
    return answer.reduce((acc,value) => acc >value ? value : acc);
  else return 0
}
function changePossible(origin, target){
  let originArray = origin.split("");
  let targetArray = target.split("");
  let count = targetArray.length; 
  while(originArray.length > 0 ){
      const originWord = originArray.pop();
      const index = targetArray.indexOf(originWord);   
      if(index >= 0){
          targetArray.splice(index,1);
          count--; 
      }               
      if(count === 1) return true;
  }
  return false;
}
function recursion(origin ,words, target, count,answer){
  if(words.length === 0 ) return; 
  for(let value of words){
      let newCount = count; 
      if(changePossible(origin, value)){
          let sliced_words = words.slice();
          if(value === target){
              answer.push(++newCount);
              return; 
          }
          sliced_words.splice(sliced_words.indexOf(value),1)
          recursion(value,sliced_words , target,++newCount,answer)
      }
   }
}