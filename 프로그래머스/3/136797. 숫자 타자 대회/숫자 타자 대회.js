function solution(numbers) {
  const dist = getDistMap();
  const n = numbers.length;
  const visited = Array.from({ length: 10 }, () =>
    Array.from({ length: 10 }, () => Array(n + 1).fill(Infinity)),
  );

  const queue = [];
  queue.push([0, 4, 6, 0]);
  visited[4][6][0] = 0;

  while (queue.length) {
    queue.sort((a, b) => a[0] - b[0]);
    const [cost, l, r, idx] = queue.shift();

    if (idx === n) return cost;

    const next = +numbers[idx];

    if (next === l) {
      const nextCost = cost + 1;
      if (nextCost < visited[next][r][idx + 1]) {
        visited[next][r][idx + 1] = nextCost;
        queue.push([nextCost, next, r, idx + 1]);
      }
    } else if (next === r) {
      const nextCost = cost + 1;
      if (nextCost < visited[l][next][idx + 1]) {
        visited[l][next][idx + 1] = nextCost;
        queue.push([nextCost, l, next, idx + 1]);
      }
    } else {
      const lCost = cost + dist[l][next];
      if (lCost < visited[next][r][idx + 1]) {
        visited[next][r][idx + 1] = lCost;
        queue.push([lCost, next, r, idx + 1]);
      }

      const rCost = cost + dist[r][next];
      if (rCost < visited[l][next][idx + 1]) {
        visited[l][next][idx + 1] = rCost;
        queue.push([rCost, l, next, idx + 1]);
      }
    }
  }
}

function getDistMap() {
  const keypad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    0: [3, 1],
  };

  const dist = Array.from({ length: 10 }, () => Array(10).fill(0));

  for (let i = 0; i <= 9; i++) {
    const visited = Array(4)
      .fill(null)
      .map(() => Array(3).fill(false));

    const queue = [];
    const [sx, sy] = keypad[i];
    queue.push([sx, sy, 0]);

    while (queue.length) {
      const [x, y, d] = queue.shift();
      const num = getNumByCoord(x, y);
      if (num !== null) {
        dist[i][num] = d === 0 ? 1 : d;
      }

      for (const [dx, dy] of [
        [0, 1],
        [1, 0],
        [-1, 0],
        [0, -1],
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1],
      ]) {
        const nx = x + dx,
          ny = y + dy;
        if (nx >= 0 && nx < 4 && ny >= 0 && ny < 3 && !visited[nx][ny]) {
          if (getNumByCoord(nx, ny) !== null) {
            visited[nx][ny] = true;
            const cost = Math.abs(dx) + Math.abs(dy) === 1 ? 2 : 3;
            queue.push([nx, ny, d + cost]);
          }
        }
      }
    }
  }
  return dist;
}

function getNumByCoord(x, y) {
  const keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [null, 0, null],
  ];
  return (keypad[x] && keypad[x][y]) ?? null;
}
