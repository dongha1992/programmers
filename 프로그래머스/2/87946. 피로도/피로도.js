function solution(k, dungeons) {
     const len = dungeons.length;
  const ch = Array.from({ length: len }, () => 0);
  let answer = Number.MIN_SAFE_INTEGER;
  let sum = 0;

  const dfs = (L, sum) => {
    for (let i = 0; i < dungeons.length; i++) {
      const minimum = dungeons[i][0];
      if (ch[i] === 0 && sum >= minimum) {
        ch[i] = 1;
        dfs(i + 1, sum - dungeons[i][1]);
        ch[i] = 0;
      }
    }
    const cnt = ch.filter(v => v !== 0).length;
    if (answer < cnt) answer = cnt;
  };
    

  dfs(0, k);
  return answer;
}