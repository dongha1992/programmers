function solution(board) {
  const n = board.length;
  const m = board[0].length;

  let visited = Array.from({ length: n }, () =>
    Array.from({ length: m }).fill(false)
  );
    
  const queue = [];

  let answer = 0;
    

    const bfs = (i, j) => {
        queue.push([i, j, 0])
        visited[i][j] = true;
        
        while(queue.length) {
            const [x, y, cnt] = queue.shift()
            
            if (board[x][y] === 'G') return cnt;
            
             for(let k = 0; k < 4; k++) {
                let nx = x
                let ny = y
                 
                 switch (k) {
                    case 0: 
                     while(ny + 1 < m && board[nx][ny+1] !== 'D') {
                         ny++
                     }
                     break;
                   case 1: 
                     while(ny - 1 >= 0 && board[nx][ny-1] !== 'D') {
                         ny--
                     }
                     break;
                   case 2: 
                     while(nx + 1 < n && board[nx + 1][ny] !== 'D') {
                         nx++
                     }
                     break;
                   case 3: 
                     while(nx - 1 >= 0 && board[nx - 1][ny] !== 'D') {
                         nx--
                     }
                     break;
                 }
                    
                if(!visited[nx][ny]) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny, cnt + 1])
                }
             }   
        }
        return -1
    }
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(board[i][j] === 'R') {
                return bfs(i, j)
                break;
            }
        }
     }
  

  return -1;
}
