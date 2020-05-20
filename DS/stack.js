// 스택안에 어떤 요소들이 들어갈 수 있는지 명세를 잘 보고 구현해야 할 것 같다. 
// null 값이나 "" 같이 공란이 들어갈 수 있는지 확인해야 한다. 
// Element 객체형식으로 구현할 수 있고, 단일 value값을 기반으로 구현할 수 있다. 

class Element{
  constructor(content){
    this.value = content; 
  }
}

class Stack { 
  constructor(){
    this.items = [];
  }
  
  get isEmpty(){
    return this.items.length === 0 
  }

  push(item){
    if( typeof(item) === 'boolean' || item === 0 || item )
      this.items.push(item);
    else throw Error("item should be given"); 

  }

  pop(){
    !this.isEmpty && this.items.pop(); 
  }


  get peek(){
    return this.isEmpty ? this.items[this.items.length-1] : null ;  
  }
  
}


export const push = () => {
  const my_stack = new Stack();

  my_stack.push(false);
  my_stack.push(1);
  my_stack.push(0);
  console.log( ...my_stack.items);
  return [...my_stack.items]; //[false, 1, 0 ]
}

export const pop = () => {
  const my_stack = new Stack();
  my_stack.push(false);
  my_stack.push(1);
  my_stack.push(0);
  const pop_elements = []; 
  while(!my_stack.isEmpty){
    pop_elements.push(my_stack.pop())
  }
  return [...pop_elements]; //[0,1,false]
}

export const peek = () => {
  const my_stack = new Stack();
  my_stack.push(0);
  return [my_stack.peek, my_stack.items.length]; // [ 0,1 ]  
}

export const testSet = {
  push,
  pop,
  peek 
}

