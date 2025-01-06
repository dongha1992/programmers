function solution(maps) {
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  const n = maps.length;
  const m = maps[0].length;
  const ch = Array.from({ length: n }, () => Array.from({ length: m }).fill(0));
  let answer = [];

  const dfs = (i, j) => {
    ch[i][j] = 1;
    let days = Number(maps[i][j]);
    for (let k = 0; k < 4; k++) {
      const nx = dx[k] + i;
      const ny = dy[k] + j;

      if (nx >= 0 && nx < n && ny >= 0 && ny < m && ch[nx][ny] === 0) {
        if (maps[nx][ny] !== 'X') {
          days += dfs(nx, ny);
        }
      }
    }
    return days;
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maps[i][j] !== 'X' && ch[i][j] === 0) {
        const days = dfs(i, j);
        answer.push(days);
      }
    }
  }
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}
