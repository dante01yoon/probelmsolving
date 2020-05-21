class Queue{
  constructor(){
    this.items = [];
  }

  get isEmpty(){
    return this.items.length === 0 
  }

  push(item){
    this.items.push(item); 
  }

  get pop(){
    return !this.isEmpty && this.items.shift();  
  }

  get peek(){
    return !this.isEmpty && this.items[0]; 
  }
}

const my_queue = new Queue();
my_queue.push(false);
my_queue.push(0);
my_queue.push(1);
console.log(my_queue); 

console.log(my_queue.peek); 

console.log(my_queue.pop);
console.log(my_queue.isEmpty); 
console.log(my_queue.pop);
console.log(my_queue.pop);
console.log(my_queue.isEmpty);
