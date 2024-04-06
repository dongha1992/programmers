function solution(friends, gifts) {
const n = friends.length;
 const giftsGraph = Array.from({length:n}, ()=>Array.from({length:n}).fill(0))
 const giftsIndexes = [];
 const answer = new Map()
  
 for(let gift of gifts){
   const [giver, taker] = gift.split(" ")
   const giverIndex = friends.indexOf(giver)
   const takerIndex = friends.indexOf(taker)
   giftsGraph[giverIndex][takerIndex] = giftsGraph[giverIndex][takerIndex]+1
 }
  
  
  for(let i = 0; i < giftsGraph.length; i++){
    const totalGive = giftsGraph[i].reduce((acc, cur)=> acc+cur,0)
    let totalTake = 0;
    for(let j = 0; j < giftsGraph.length; j++){
      totalTake += giftsGraph[j][i]
    }
    giftsIndexes.push(totalGive-totalTake)
  }
  
  for(let i = 0; i < giftsGraph.length; i++){
    
    for(let j = 0;  j < giftsGraph.length; j++){
      const give = giftsGraph[i][j]
      const take = giftsGraph[j][i]
      if(i!==j){
        if(give < take){
          if(answer.has(friends[j])){
            answer.set(friends[j], answer.get(friends[j])+1)
          } else {
            answer.set(friends[j], 1)
          }
        } else if(give === take && giftsIndexes[i] > giftsIndexes[j]){
          if(answer.has(friends[i])){
            answer.set(friends[i], answer.get(friends[i])+1)
          } else {
            answer.set(friends[i], 1)
          }
          
        }
      }
    }
  }
  return  Math.max(...answer.values()) > 0 ? Math.max(...answer.values()) : 0
}