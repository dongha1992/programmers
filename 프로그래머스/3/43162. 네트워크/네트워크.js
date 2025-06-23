function solution(n, computers) {
  const graph = {};
  const visited = Array.from({ length: n + 1 }).fill(false);

  for (let i = 0; i < computers.length; i++) {
    graph[i + 1] = [];
    for (let j = 0; j < computers[0].length; j++) {
      if (computers[i][j] === 1 && i !== j) {
        graph[i + 1].push(j + 1);
      }
    }
  }

  let count = 0;
    
  for (let i = 1; i <= n; i++) {
    if (visited[i]) continue;

    const queue = [i];
    visited[i] = true;
      
    while (queue.length) {
      const node = queue.shift();

      for (const nx of graph[node]) {
        if (!visited[nx]) {
          queue.push(nx);
          visited[nx] = true;
        }
      }
    }
      count++
  }
  return count
}



