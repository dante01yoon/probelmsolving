var check = function(s){
  let l1 = 0; 
  let l2 = s.length -1;
  while(l1 < l2){
      if( s[l1]!== s[l2]) return false;
      l1++;
      l2--
  }
  return true;
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let value_dict = new Object(); 
  for(let i = 0 ; i < s.length; i++){
    let substring = "";
    let j = i; 
    while( j< s.length){
      substring += s[j];
      if(check(substring)){
          if(value_dict.hasOwnProperty(substring.length)){ 
              value_dict[substring.length].push(substring);
          }
          else value_dict[substring.length] = [substring];
      } 
      j++;
    }
  }
  return Object.keys(value_dict).length > 0 ? value_dict[Math.max.apply(null,Object.keys(value_dict))][0] : ""; 
};

