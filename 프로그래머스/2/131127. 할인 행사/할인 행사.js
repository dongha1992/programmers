
function solution(want, number, discount) {
   const wantMap = new Map();
  const windowSize = 10;
  let answer = 0;
  
  for(let i = 0; i < want.length; i++){
    wantMap.set(want[i], number[i])
  }
  
  for(let j = 0; j < windowSize; j++) {
    if(wantMap.has(discount[j])) {
      wantMap.set(discount[j], (wantMap.get(discount[j]) - 1))
    }
  }

  if ([...wantMap.values()].every(v => v === 0)) answer++;
  
  for(let k = windowSize; k < discount.length; k++) {
    const exitItem = discount[k - windowSize]; 
    const enterItem = discount[k];       
    
    if(wantMap.has(exitItem)) {
      wantMap.set(exitItem, wantMap.get(exitItem) + 1)
    }
        
    if(wantMap.has(enterItem)) {
      wantMap.set(enterItem, wantMap.get(enterItem) - 1)
    }
    if([...wantMap.values()].every(v => v === 0)) answer++
  }

  return answer
}
