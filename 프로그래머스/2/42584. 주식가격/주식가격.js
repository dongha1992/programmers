function solution(prices) {
 const stack = [];
 let answer = []
 let max = prices[0];
 
  for(let i = 0; i < prices.length; i++){
    const current = prices[i]
    if(current < max){
        while(stack.length && stack[stack.length-1][0] > current){
        const [_, targetIndex] = stack.pop() 
        answer[targetIndex] = i - targetIndex
      }
    } 
      stack.push([current, i])
      max = current
   }
      while(stack.length){
        const [_,targetIndex] = stack.pop();
        answer[targetIndex] = prices.length-targetIndex-1;
    }

    return answer;
}