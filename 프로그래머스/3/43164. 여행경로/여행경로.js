function solution(tickets) {
 const n = tickets.length
 const finish = tickets.length + 1
 const ch = Array.from({length:n}, ()=>0)
 const answer = []
 
 const dfs = (route) => {
   if(route.length === finish){
     answer.push(route)
   } else {
     for(let i = 0; i < tickets.length; i++){
       if(!ch[i]){
         const [start, end] = tickets[i]
         if(route[route.length-1] === start){
            ch[i] = 1
            dfs([...route, end])
            ch[i] = 0 
         }
       }
     }
   }
 }
 dfs(["ICN"])
  return answer.sort()[0]
}



