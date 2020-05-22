/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const answer = new ListNode();
  let dummyNode = answer; 
  let overflow = 0;
  while(true){
      // add value 
      let value = 0;  
      value = l1 ? l1.val : value; 
      value = l2 ? value + l2.val : value;
      value = value += overflow;
      let numArray = (value).toString().split("");
      if( numArray.length > 1) overflow = 1;
      else overflow = 0;
      dummyNode.val = parseInt(numArray[numArray.length-1]);
      if(l1) l1 = l1.next ;
      if(l2) l2 =  l2.next 
      if( !l1 && !l2 ){
          if(overflow) dummyNode.next = new ListNode(1);
          break; 
      }  // no more node 
      dummyNode.next = new ListNode(); // build new node 
      dummyNode = dummyNode.next; // point new node 
  }
  return answer; 
};