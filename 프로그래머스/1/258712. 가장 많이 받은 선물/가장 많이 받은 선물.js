function solution(friends, gifts) {
 const n = friends.length;
  const graph = Array.from({length:n}, ()=>Array.from({length:n}).fill(0))
  const giftsIndexes = Array(n).fill(0);
  const answer = new Map();
  
  for(let gift of gifts){
    const [giver, taker] = gift.split(" ")
    const g = friends.indexOf(giver)
    const t = friends.indexOf(taker)
    graph[g][t]++
    giftsIndexes[g]++
    giftsIndexes[t]--
  }

  
  for(let i = 0; i < graph.length; i++){
    for(let j = 0; j < graph.length; j++){
      if(i === j) continue;
      const g = graph[i][j]
      const t = graph[j][i]
      
      if(g < t){
        if(answer.has(friends[j])){
          answer.set(friends[j], answer.get(friends[j])+1)
          } else {
            answer.set(friends[j], 1)
          }
        } else if(g === t && giftsIndexes[i] > giftsIndexes[j]){
          if(answer.has(friends[i])){
            answer.set(friends[i], answer.get(friends[i])+1)
          } else {
            answer.set(friends[i], 1)
          }
        }
      }
    }
    return  Math.max(...answer.values()) > 0 ? Math.max(...answer.values()) : 0
}