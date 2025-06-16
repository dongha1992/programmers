
function solution(maps) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const n = maps.length;
  const m = maps[0].length;

  let start, lever, end;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maps[i][j] === 'S') start = [i, j];
      else if (maps[i][j] === 'L') lever = [i, j];
      else if (maps[i][j] === 'E') end = [i, j];
    }
  }

  function bfs(from, to) {
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    const queue = [[...from, 0]];
    visited[from[0]][from[1]] = true;
      
    
    while (queue.length) {
      const [x, y, dist] = queue.shift();
      if (x === to[0] && y === to[1]) return dist;
        
      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];

        if (nx >= 0 && nx < n && ny >= 0 && ny < m && !visited[nx][ny] && maps[nx][ny] !== 'X') {
          visited[nx][ny] = true
          queue.push([nx, ny, dist + 1]);
        }
      }
    }
      return -1;
  };
    
  const toLever = bfs(start, lever);
  const toEnd = bfs(lever, end);
    
  if (toLever === -1 || toEnd === -1) return -1;
  return toLever + toEnd;
  
}