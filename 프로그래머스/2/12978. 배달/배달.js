function solution(N, road, K) {
 const graph = []
 const dist = Array(N + 1).fill(Infinity);
 const queue = [[1, 0]]
 dist[1]=0
  
 for(const [s, e, w] of road){
    if(!graph[s]){
     graph[s] = [[e, w]]
   } else {
     graph[s].push([e, w])
   }
    if(!graph[e]){
     graph[e] = [[s, w]]
   } else {
     graph[e].push([s, w])
   }
 }

  while(queue.length){
    const [node, time] = queue.shift()

      if(graph[node]){
        for(const [nextNode, nextTime] of graph[node]){
          const newTime = time + nextTime;
           if(newTime <= K && dist[nextNode] > newTime) {
             dist[nextNode] = newTime
             queue.push([nextNode, newTime])
           }
        }
    }
  }
    let answer = 0;
    for (let i = 1; i <= N; i++) {
        if (dist[i] <= K) answer++;
    }
    
    return answer;
  
}