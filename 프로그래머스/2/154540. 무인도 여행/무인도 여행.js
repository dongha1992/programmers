function solution(g) {
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  const n = g.length;
  const m = g[0].length;
  let ch = Array.from({ length: n }, () => Array.from({ length: m }).fill(0));
  // ch[0][0] = 1;
  let answer = [];
  let total = 0;

  const dfs = (i, j) => {
    ch[i][j] = 1;
    let total = Number(g[i][j]); 
    
    for (let k = 0; k < 4; k++) {
      const nx = dx[k] + i;
      const ny = dy[k] + j;
      if (nx >= 0 && nx < n && ny >= 0 && ny < m && ch[nx][ny] === 0) {
        if (g[nx][ny] !== 'X') {
          total += dfs(nx, ny);
        }
      }
    }
    return total
  };

  for (let i = 0; i < g.length; i++) {
    for (let j = 0; j < g[0].length; j++) {
      if (g[i][j] !== 'X' && ch[i][j] === 0) {
        const total = dfs(i, j);
        answer.push(total);
      }
    }
  }
    
  return answer.length ? answer.sort((a, b) => a-b) : [-1]
}