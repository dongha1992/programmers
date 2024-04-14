function solution(maps) {
 let answer = 0;
 // 행   
 const n = maps.length
 // 열
 const m = maps[0].length
 const dx = [0,1,0,-1]
 const dy = [-1,0,1,0]
 const target = [n-1,m-1];
 const visited = Array.from({ length: n }, () => Array(m).fill(false));
 let queue = [[0,0,1]]
 visited[0][0] = true
    
       while(queue.length){
         const [x, y, dist] = queue.shift()
         const [targetX, targetY] = target;
         if(targetX===x && targetY===y){
           answer = dist;
           break; 
         }
         
         for(let k =0; k < 4; k++){
             const nx = x + dx[k]
             const ny = y + dy[k]
             if(nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1 && !visited[nx][ny]){
               visited[nx][ny] = true
               queue.push([nx,ny, dist+1])
             }
   }
 }
  return answer ? answer : -1
}