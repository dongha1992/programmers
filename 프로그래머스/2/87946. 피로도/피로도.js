function solution(k, dungeons) {
    const n = dungeons.length;
    const ch = Array.from({length:n}, ()=>0)
    let answer = 0;
    
    const dfs = (l, sum) => {
        for(let i = 0; i < n; i++) {
            const [need, power] = dungeons[i]
            if(ch[i] === 0 && sum >= need){
                ch[i] = 1;
                dfs(i + 1, sum - power);
                ch[i] = 0;
            }
            const cnt = ch.filter(v => v !== 0).length;
            if (answer < cnt) answer = cnt;
        }
    }
    
    dfs(0, k)
    return answer;
  }
