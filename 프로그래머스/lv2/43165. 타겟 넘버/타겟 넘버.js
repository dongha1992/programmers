function solution(numbers, target) {
  const len = numbers.length
  const ch = Array.from({length:len}, ()=>0)
  let answer= 0;
  let sum = 0;
  
  const dfs = (L,sum) => {
    if(L===len){
      if(sum === target) answer++
    } else {
      if(ch[L]===0){
        ch[L] = 1
        dfs(L+1, sum+numbers[L])
        ch[L] = 0
        dfs(L+1, sum-numbers[L])
      }
    }
  }
  dfs(0, 0)
  
  return answer
}