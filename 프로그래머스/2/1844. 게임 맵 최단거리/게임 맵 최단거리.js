function solution(maps) {
  const DIRECTIONS = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ]; 
  const ROW = maps.length;
  const COL = maps[0].length;
  const GOAL = [ROW - 1, COL - 1];

  const visited = Array.from({ length: ROW }, () => Array(COL).fill(false));
  const queue = [[0, 0, 1]];

  visited[0][0] = true;

  let front = 0;

  while (front < queue.length) {
    const [x, y, dist] = queue[front++];

    if (x === GOAL[0] && y === GOAL[1]) return dist;

    for (const [dx, dy] of DIRECTIONS) {
      const nx = x + dx;
      const ny = y + dy;

      if (isValid(nx, ny) && maps[nx][ny] === 1 && !visited[nx][ny]) {
        visited[nx][ny] = true;
        queue.push([nx, ny, dist + 1]);
      }
    }
  }

  function isValid(x, y) {
    return x >= 0 && x < ROW && y >= 0 && y < COL;
  }
    
  return -1
}



