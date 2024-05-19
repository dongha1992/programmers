function solution(n, edge) {
 const graph = {}
  for([from, to] of edge){
    if(graph[from]){
      graph[from].push(to)
    } else {
      graph[from] = [to]
    }
    if(graph[to]){
       graph[to].push(from)
    } else {
       graph[to] = [from]
    }
  }

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