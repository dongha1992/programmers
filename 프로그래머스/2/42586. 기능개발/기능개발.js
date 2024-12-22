function solution(progresses, speeds) {
 const answer = [];
  const days = []
  
  for(let i = 0; i < progresses.length; i++) { 
    let p = progresses[i];
    const s = speeds[i]
    let day = 0
    
    while(p < 100){
      p += s
      day++
    }
    days.push(day)  
  }
  
  let max = days[0]
  let cnt = 1;
  
  for(let i = 0; i < days.length; i++){
    const nextDay = days[i+1];
        
    if(!nextDay){
      answer.push(cnt);
    }
    
    if(max < nextDay) {
      answer.push(cnt);
      max = nextDay;
      cnt = 1
    } else {
      cnt++
    }
  }

  return answer
}