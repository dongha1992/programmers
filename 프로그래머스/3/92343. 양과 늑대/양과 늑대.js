
function solution(info, edges) {
  const graph = Array.from({ length: info.length }, () => []);

  for (const [from, to] of edges) {
    graph[from].push(to);
  }

  let max = 0;

  const dfs = (sheep, wolf, current, possible) => {
    if (info[current] === 0) sheep++;
    else wolf++;

    if (sheep <= wolf) return;

    max = Math.max(max, sheep);

    const nextCandidate = [...possible, ...graph[current]].filter(
      (node) => node !== current
    );

    for (const next of nextCandidate) {
      dfs(sheep, wolf, next, nextCandidate);
    }
  };

  dfs(0, 0, 0, []);

  return max;
}

