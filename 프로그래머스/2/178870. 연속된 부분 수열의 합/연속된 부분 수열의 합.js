function solution(sequence, k) {
  const indexes = [];
  let sum = 0;
  let lt = 0;
  let rt = 0;
  let answer = [0, 1000000000]
  
  while (rt <= sequence.length) {
    if (sum === k) {
      indexes.push([lt, rt - 1]);
      sum -= sequence[lt];
      lt++;
    } else if (sum < k) {
      sum += sequence[rt];
      rt++;
    } else {
      sum -= sequence[lt];
      lt++;
    }
  }
  
  for(let i = 0; i < indexes.length; i++){
    const [a, b] = indexes[i]
    const diff = b-a
    if(diff < answer[1] - answer[0]){
      answer = indexes[i]
    } 
  }
 return !answer.length ? indexes[0] : answer
}