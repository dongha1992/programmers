function solution(n, s, a, b, fares) {
  const dist = Array.from({ length: n + 1 }, (_, i) =>
    Array.from({ length: n + 1 }, (_, j) => (i === j ? 0 : Infinity))
  );

  for (let [u, v, w] of fares) {
    dist[u][v] = w;
    dist[v][u] = w;
  }

  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
      }
    }
  }
    
  let min = Infinity;
  for (let i = 1; i <= n; i++) {
    min = Math.min(min, dist[s][i] + dist[i][a] + dist[i][b]);
  }
  return min;
}








