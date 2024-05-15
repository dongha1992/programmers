function solution(routes) {
  let answer = 0;
  routes.sort((a,b)=>{
    if(a[1] === b[1]){
      return a[0] - b[0]
    } else {
      return a[1] - b[1]
    }
  })
  
  let et = -30001;
  
  for(let i = 0; i < routes.length; i++){
    const [start, end] = routes[i]
    if(start > et){
      answer++
      et = end
    }
  }
  return answer
}