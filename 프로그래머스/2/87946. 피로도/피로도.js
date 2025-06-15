function solution(k, dungeons) {
  const n = dungeons.length;
  const visited = Array.from({ length: n }).fill(0);
  let answer = 0;

  const dfs = (l, sum) => {
    answer = Math.max(answer, visited.filter(v => v).length);
      
    for (let i = 0; i < n; i++) {
      const [need, spend] = dungeons[i];
      if (visited[i] === 0 && sum >= need) {
        visited[i] = 1;
        dfs(i + 1, sum - spend);
        visited[i] = 0;
      }
    }
  };

  dfs(0, k);
  return answer;
}




