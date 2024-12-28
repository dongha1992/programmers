function solution(priorities, location) {
  let answer = 0;
  const queue = priorities.map((priority, index) => [priority, index]);

  
  while(queue.length) {
    const head = queue.shift();
    const hasHigherPrior = queue.some(([priority]) => priority > head[0])
    
    if(hasHigherPrior){
      queue.push(head)
      continue;
    }
    
    answer++;
    
    if(head[1] === location) break;
  }
  
  return answer
}