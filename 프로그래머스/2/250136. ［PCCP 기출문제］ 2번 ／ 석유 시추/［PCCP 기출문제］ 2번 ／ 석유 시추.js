function solution(land) {
  const n = land.length;
  const m = land[0].length;

  const dx = [0, 1, 0, -1];
  const dy = [-1, 0, 1, 0];

  const visited = Array.from({ length: n }, () =>
    Array.from({ length: m }).fill(false)
  );
  const dist = Array.from({ length: m }).fill(false);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (land[i][j] === 1 && !visited[i][j]) {
        bfs(i, j);
      }
    }
  }
    
  function valid(nx, ny) {
    return nx >= 0 && nx < n && ny >= 0 && ny < m;
  }

  function bfs(i, j) {
    visited[i][j] = true;
    const queue = [[i, j, 1]];
    let sum = 1;
    let start = Infinity;
    let end = -1;

    let front = 0;
    while (queue.length) {
      const [x, y] = queue.shift();

      for (let k = 0; k < 4; k++) {
        const nx = dx[k] + x;
        const ny = dy[k] + y;

        if (valid(nx, ny) && !visited[nx][ny] && land[nx][ny] === 1) {
          visited[nx][ny] = true;
          queue.push([nx, ny]);
          sum++;
        }
      }
      start = Math.min(start, y);
      end = Math.max(end, y);
    }

    for (let i = start; i <= end; i++) {
      dist[i] += sum;
    }
  }
    
  return Math.max(...dist)

}
