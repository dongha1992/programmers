function solution(numbers, target) {
  const n = numbers.length
  const ch = Array.from({length:n}, ()=> 0)
  const tmp = Array.from({length:n}, (v, i)=> numbers[i])
  let answer = []

  const dfs = (L) => {
    if(L === n){
      if(tmp.reduce((a, b)=>a+b,0)===target){
      answer.push(tmp.slice())
    } 
    } else {
      if(ch[L]===0){
        ch[L] = 1
        dfs(L+1)
        ch[L] = 0
        tmp[L] = -1 * tmp[L]
        dfs(L+1)
      }
    }
  }
  dfs(0)
  return answer.length
}