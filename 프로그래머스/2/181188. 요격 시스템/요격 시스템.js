function solution(targets) {
 let answer= 0;
  targets.sort((a, b) => {
    if(a[1] === b[1]) return a[0] - b[0]
    else return a[1] - b[1]
  })

  let et = 0;
  for(let x of targets){
    const [start, end] = x
    if(start >= et){
      answer++;
      et = end
    }
  }
  
  return answer
}
