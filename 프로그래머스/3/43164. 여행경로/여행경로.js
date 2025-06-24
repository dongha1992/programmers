function solution(tickets) {
  const n = tickets.length;
  const visited = Array.from({ length: n }).fill(false);
  const answer = [];

  const dfs = (depth, path) => {
    if (depth === n) {
      answer.push(path);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (!visited[i]) {
        const [start, end] = tickets[i];

        if (path[path.length - 1] === start) {
          visited[i] = true;
          dfs(depth + 1, [...path, end]);
          visited[i] = false;
        }
      }
    }
  };
  dfs(0, ['ICN']);
  return answer.sort()[0];
}






