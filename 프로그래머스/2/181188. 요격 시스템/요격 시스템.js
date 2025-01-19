function solution(targets) {
let answer = 0;
  
 targets.sort(([a1, a2], [b1, b2]) => 
  a2 === b2 ? a1 - b1 : a2 - b2
)
  
  let et = 0;
  for(const x of targets){
    const [s, e] = x;
    if(s >= et){
      answer++;
      et = e;
    }
  }
  
  return answer;
}
