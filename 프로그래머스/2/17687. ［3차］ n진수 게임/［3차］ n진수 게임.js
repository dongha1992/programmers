function solution(n, t, m, p) {
    let total = t * m;
  let number = 0;
  let sequence = ""
  let answer = ""
  
  while (sequence.length < total) {
    sequence += number.toString(n).toUpperCase(); 
    number++;
  }
  
  for(let i = p - 1; i < sequence.length; i+= m){
    answer += sequence[i];
    if (answer.length === t) break;
  }
    return answer
}