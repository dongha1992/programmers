function solution(dirs) {
  const board = Array.from(Array(10), () => Array(10).fill(0));
  const visitedPaths = new Set();
  const posMap = {
    U: [0, 1],
    L: [-1, 0],
    R: [1, 0],
    D: [0, -1],
  };
  let current = [5, 5];
  const n = board.length;

  for (let i = 0; i < dirs.length; i++) {
    const pos = posMap[dirs[i]];
    const nx = current[0] + pos[0];
    const ny = current[1] + pos[1];
    if (nx >= 0 && ny >= 0 && nx <= n && ny <= n) {
      const path1 = `${current[0]},${current[1]},${nx},${ny}`;
      const path2 = `${nx},${ny},${current[0]},${current[1]}`;

      if (!visitedPaths.has(path1)) {
        visitedPaths.add(path1);
        visitedPaths.add(path2);
      }

      current = [nx, ny];
    }
  }

  return visitedPaths.size / 2;
}
