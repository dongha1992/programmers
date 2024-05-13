function solution(land) {
 const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    const n = land.length;
    const m = land[0].length;
    let dp = Array(m).fill().map(() => 0);
    let answer = 0;
   ;
    const bfs = (j, i) => {
      const queue = []
      queue.push([j, i])
      let ch = Array(m).fill().map(() => 0);
      let cnt = 0;
      ch[i] = 1;
      land[j][i] = 0;   
      
      while(queue.length){
        cnt++
         const [y, x] = queue.shift()     
         for (let i = 0; i < 4; i++) {
            const ny = y + dy[i];
            const nx = x + dx[i];
                if (ny >= 0 && ny < n && nx >= 0 && nx < m && land[ny][nx] === 1) {
                    land[ny][nx] = 0;   
                    ch[nx] = 1;
                    queue.push([ny, nx]);
                }
            }
       }
      
      for(let k = 0; k < m; k++){
        if(ch[k]){
          dp[k] += cnt
        }
      }
    }
    
    for(let i = 0; i < m; i++){
      for(let j = 0; j < n; j++){
        if(land[j][i] === 1){
          bfs(j, i)
        }
      }
    }

    return Math.max(...dp);
}




