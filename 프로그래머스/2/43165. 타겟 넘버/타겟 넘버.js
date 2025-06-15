function solution(numbers, target) {
  const len = numbers.length
  let answer= 0;
  let sum = 0;
  
  const dfs = (L,sum) => {
    if(L===len){
      if(sum === target) answer++
    } else {
        dfs(L+1, sum+numbers[L])
        dfs(L+1, sum-numbers[L])
    }
  }
  dfs(0, 0)
  
  return answer
}















