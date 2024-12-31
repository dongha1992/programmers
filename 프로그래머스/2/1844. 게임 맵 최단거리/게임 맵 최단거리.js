const solution = (maps) => {
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  const n = maps.length;
  const m = maps[0].length;
  const goal = [n - 1, m - 1];
  const queue = [[0, 0, 1]];

  let answer = 0;
  let visited = Array.from({ length: n }, () => Array(m).fill(false));

  visited[0][0] = true;

  while (queue.length) {
    const [x, y, dist] = queue.shift();

    if (x === goal[0] && y === goal[1]) {
      return dist;
      break;
    }

    for (let k = 0; k < 4; k++) {
      const nx = dx[k] + x;
      const ny = dy[k] + y;
      if (
        nx >= 0 &&
        nx < n &&
        ny >= 0 &&
        ny < m &&
        maps[nx][ny] === 1 &&
        !visited[nx][ny]
      ) {
        visited[nx][ny] = true;
        queue.push([nx, ny, dist + 1]);
      }
    }
  }
  return -1;
};

