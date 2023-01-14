function solution(n, computers) {
  const ch = Array.from({length:n+1}, ()=>0)
   let answer = 0;
  
    const dfs = (v) => {
     for(let i = 1; i <= n; i++){
        if(computers[v][i]===1 && ch[i]===0){
          ch[i]=1
          dfs(i)
        }
    }
  }
    
  for(let i = 0; i < n; i++){
    if(ch[i]===0){
      dfs(i)
      answer++
    }
  }
  return answer
}