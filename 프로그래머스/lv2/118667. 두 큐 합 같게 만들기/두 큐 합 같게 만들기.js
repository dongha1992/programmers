function solution(queue1, queue2) {
 const equal = ([...queue1, ...queue2].reduce((a, b) => a+b, 0) / 2)
  let answer = 0;
  let cnt = 0;
  let lt = 0;
  let rt = 0;
  let sum1 = queue1.reduce((a, b)=> a+b, 0)
  let sum2 = queue2.reduce((a, b)=> a+b, 0)
  let max = queue1.length * 3
    
  while(true){
    if(max < cnt) {
     answer = -1;
     break;
    }
      
      if(sum1 > sum2) {
      const q1 = queue1[lt]
      queue2.push(queue1[lt])
      sum1-=q1
      sum2+=q1
      answer++
      lt++
    } else if(sum1 < sum2){
      const q2 = queue2[rt]
      queue1.push(queue2[rt])
      sum2-= q2
      sum1+= q2
      answer++
      rt++
    }
  
    if(sum1===sum2){
      break;
    }
    cnt++
      
  }

  return answer
}