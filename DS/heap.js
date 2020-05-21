class MaxHeap{
  constructor(){
    this.length = 1; 
    this.items = new Array(1).fill(null); 
    this.popped = null; 
  }
  
  swap(){
    for(let i = this.items.length-1; i >1; i= Math.floor(i/2))
    {
      if(this.items[i] > this.items[Math.floor(i/2)]){
        [this.items[i], this.items[Math.floor(i/2)]] = 
        [this.items[Math.floor(i/2)], this.items[i]]; 
      }
    }
  }
  add(item){
    this.items.push(item); 
    this.swap();
  }

  get remove(){
    [this.items[this.items.length -1], this.items[1]] =
    [this.items[1] , this.items[this.items.length -1]];
    this.popped = this.items.pop(); 
    for(let i = 1 ; i *2 < this.items.length ; i*=2){
      let max; 
      if(i*2+1 < this.items.length){
        max = this.items[2*i +1] > this.items[2*i] ? 2*i+1 : 2*i; 
      } else {
        max = i*2;
      }
      if(this.items[i] < this.items[max]){
        [this.items[i], this.items[max] ] = [this.items[max], this.items[i]]; 
      }
      else break; 
    }
    return(this.popped); 
  }
  
}