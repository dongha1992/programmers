function solution(n, roads, sources, destination) {
  const answer = [];
  const graph = {};
  let visited = Array.from({ length: n+1 }).fill(-1);

  for (const [from, to] of roads) {
    if (!graph[from]) graph[from] = [];
    graph[from].push(to);

    if (!graph[to]) graph[to] = [];
    graph[to].push(from);
  }

  const bfs = (destination) => {
    const queue = [[destination, 0]];
    visited[destination] = 0
    
    while (queue.length) {
      const [n, d] = queue.shift();

      if (graph[n]) {
        for (const nn of graph[n]) {
          if(visited[nn] < 0){
            queue.push([nn, d + 1]);
            visited[nn] = d + 1
          }
        }
      } 
    }
  };
  
  bfs(destination)
  
  for (let i = 0; i < sources.length; i++) {
    const dis = visited[sources[i]];
    answer.push(dis)
  }

  return answer
}