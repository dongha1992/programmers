function solution(n, wires) {
  let min = Infinity;

  for (let i = 0; i < wires.length; i++) {
    const filteredWires = wires.filter((_, idx) => idx !== i);
    const graph = Array.from({ length: n + 1 }, () => []);
    for (const [a, b] of filteredWires) {
      graph[a].push(b);
      graph[b].push(a);
    }
    const visited = Array(n + 1).fill(false);
    const count = bfs(1, graph, visited);
    const diff = Math.abs(n - 2 * count);
    min = Math.min(min, diff);
  }

  function bfs(start, graph, visited) {
    let count = 0;
    const queue = [start];
    visited[start] = true;

    while (queue.length > 0) {
      const node = queue.shift();
      count++;

      for (const neighbor of graph[node]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }

    return count;
  };
    return min
}