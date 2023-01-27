function solution(n, lost, reserve) {
  const init = Array.from({length:n},()=>1)
  const ch = init.map((a, i)=>  {
    if(reserve.includes(i+1)){
      if(lost.includes(i+1)){
        return a
      } 
      return a+=1
    } 
    if(lost.includes(i+1)){
      if(reserve.includes(i+1)){
        return a
      }
      return a-=1
    }
      return a
  })

  for(let i = 0; i < n; i++){
    if(!ch[i]){
      if(ch[i-1]>1){
        ch[i-1]--
        ch[i]++
      } else if(ch[i+1]>1){
        ch[i+1]--
        ch[i]++
      }
    }
  }
  return ch.filter(a=>a).length
}