function solution(N, road, K) {
 const graph = Array.from({length:N+1}, ()=>[])
  const dist = Array(N+1).fill(Infinity)
  const queue = [[1, 0]]
  dist[1] = 0;
  
  for (const [start, end, weight] of road) {
    graph[start].push([end, weight]);
    graph[end].push([start, weight]);
  }
  
  while(queue.length){
    const [node, time] = queue.shift();
    if(graph[node]){
     for(const [nNode, nTime] of graph[node]){
       const newTime = time + nTime;
       if(newTime <= K && dist[nNode] >newTime){
           dist[nNode] = newTime
             queue.push([nNode, newTime])
       }
     } 
    }
  }
  
  let answer = 0;
   for (let i = 1; i <= N; i++) {
        if (dist[i] <= K) answer++;
    }
  return answer
  
}