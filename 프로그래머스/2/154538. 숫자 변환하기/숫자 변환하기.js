function solution(x, y, n) {
  const visited = new Set();
  const queue = [[x, 0]];

  let front = 0;
  while (front < queue.length) {
    const [sum, l] = queue[front++]
      
    if (sum === y) return l;

    const nextValues = [sum + n, sum * 2, sum * 3];
    for (const nv of nextValues) {
      if (nv <= y && !visited.has(nv)) {
        visited.add(nv);
        queue.push([nv, l + 1]);
      }
    }
  }
  return -1;
}