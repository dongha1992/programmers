function solution(progresses, speeds) {
  const days = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));
  const queue = [...days]
  const answer = []
  
  while(queue.length) {
    const depoly = queue.shift();
    let cnt = 1;
    
    while(queue.length && queue[0] <= depoly) {
      queue.shift();
      cnt++;
    }
    answer.push(cnt)
  }
  return answer;
}

















