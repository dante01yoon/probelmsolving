/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const dict=  new Object();
  for(let i = 0; i < s.length; i++){
      const store = new Array();
      let j = i; 
      while(true){
          if(j === s.length || store.includes(s[j])) break;
          store.push(s[j])
          j++;
      }
      dict[i] = store.length; 
  }
  if(s.length === 0 ) return 0; 
  return Math.max.apply(null,Object.values(dict))
};