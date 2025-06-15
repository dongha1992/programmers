function solution(elements) {
  const n = elements.length;
  const doubleArr = [...elements, ...elements]
  const answer = new Set();
  
  for(let i = 1; i <= n; i++) {
    let sum = 0;
    
    for(let j = 0; j < i; j++) {
      sum += doubleArr[j]
    }
    
    answer.add(sum)
    
    for(let k = 1; k < n; k++) {
      sum = (sum - doubleArr[k-1]) + doubleArr[k + i -1]
      answer.add(sum)
    }
  } 
  
  return answer.size
}