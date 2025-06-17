function solution(N, road, K) {
  const graph = Array.from({ length: N + 1 }, () => []);
  const dist = Array(N + 1).fill(Infinity);
  dist[1] = 0;

  for (const [from, to, weight] of road) {
    graph[from].push([to, weight]);
    graph[to].push([from, weight]);
  }

  const queue = [[0, 1]]; 

  while (queue.length) {
    queue.sort((a, b) => a[0] - b[0]);
    const [time, node] = queue.shift();

    if (dist[node] < time) continue;

    for (const [nextNode, cost] of graph[node]) {
      const totalCost = time + cost;
      if (totalCost <= K && totalCost < dist[nextNode]) {
        dist[nextNode] = totalCost;
        queue.push([totalCost, nextNode]);
      }
    }
  }

  return dist.filter((d) => d <= K).length;
}





