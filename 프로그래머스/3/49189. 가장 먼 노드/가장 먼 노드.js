function solution(n, edge) {
 const graph = {}
 
 edge.forEach(([from, to]) => {
  graph[from] = graph[from] || [];
  graph[from].push(to);
  
  graph[to] = graph[to] || [];
  graph[to].push(from);
});


  const visited = [1]
  const queue = [[1, 0]]
  const ws = []
  let answer = 0;
  
  while(queue.length){
    const [node, w] = queue.shift()
    
    ws.push(w)

    if(graph[node]){
      for(const nextNode of graph[node]){
          if(!visited.includes(nextNode)){
           visited.push(nextNode);
           queue.push([nextNode, w+1]);
        }
      } 
    }
  }
  const max = Math.max(...ws)
  
  return ws.filter(w => w===max).length
}