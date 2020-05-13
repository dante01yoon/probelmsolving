function solution(tickets) {
  var answer = [];
  let ticketDict = new Object(); 
  ticketDict = tickets.reduce((acc,value) => {
      if(acc.hasOwnProperty(value[0]))
          acc[value[0]].push(value[1])
      else 
          acc[value[0]] = [value[1]];
      acc["count"] += 1
      return acc
  },{count:0})
  for(let index in ticketDict){
     (index !== 'count') && ticketDict[index].sort()
  }
  let departure = 'ICN'
  answer.push(departure); 
  while(ticketDict['count'] > 0){
      let arrival = ticketDict[departure].shift();
      departure = arrival;
      ticketDict['count'] -=1;
      answer.push(departure); 
  }
  return answer;
}