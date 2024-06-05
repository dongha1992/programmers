
function solution(n, s, a, b, fares) {
  let graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));

  for (let i = 0; i < fares.length; i++) {
    const [start, end, w] = fares[i];
    graph[start][end] = w;
    graph[end][start] = w;
  }

  for (let i = 1; i <= n; i++) {
    graph[i][i] = 0;
  }

  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (graph[i][j] > graph[i][k] + graph[k][j]) {
          graph[i][j] = graph[i][k] + graph[k][j];
        }
      }
    }
  }

  let min = Infinity;

  for (let node = 1; node <= n; node++) {
    min = Math.min(min, graph[s][node] + graph[node][a] + graph[node][b]);
  }

  return min;
}

