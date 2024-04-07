function solution(n)
{
  let answer = n % 2 !== 0 ? 1 : 0;
  while(n>0){
    let rest = Math.floor(n / 2)
    if(rest % 2 !== 0){
      answer++
    }
    n = rest
  }
    return answer
}