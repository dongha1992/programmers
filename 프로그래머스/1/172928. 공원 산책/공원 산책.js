function solution(park, routes) {
 
  const parks = park.map(p=>p.split(""))
  const routeArray = routes.map(r => r.split(" "))

  const n = park.length
  const m = routeArray.length
  
  let currentPos = []

  // console.log(parks)
  for(let i = 0; i < n; i++){
    for(let j =0; j < parks[i].length; j++){      
      if(parks[i][j] === 'S'){
        currentPos = [i, j]
        for(let k = 0; k < m; k++){
          const directions = routeArray[k]
          const [direction, count] = directions
          
          if(direction === 'N') {
            const nxI = currentPos[0] - Number(count)
            const curJ = currentPos[1] 
            
            const check = (curI, nxI, curJ) => {
              let flag = false
              for(let l = curI; l >= nxI; l--){ 
                if(parks[l][curJ] === 'X' || !parks[l][curJ]){
                  flag = true
                  break;
                }
                
              }
               return flag
            }
            if(nxI >= n || nxI < 0) continue;
            
            if(parks[nxI][curJ]==='X' || check(currentPos[0], nxI,curJ)){
              continue;
            }
            currentPos = [nxI, curJ]

          } else if(direction === 'S'){
            const nxI = currentPos[0] + Number(count)
            const curJ = currentPos[1] 
            const check = (curI, nxI, curJ) => {
              let flag = false
              for(let l = curI; l <= nxI; l++){ 
                if(parks[l][curJ] === 'X' || !parks[l][curJ]){
                  flag = true
                  break;
                }
              }
               return flag
            }
    
            if(nxI >= n || nxI < 0) continue;
          
            if(parks[nxI][curJ]==='X' ||  check(currentPos[0],nxI, curJ)){
              continue;
            }
            currentPos = [nxI, curJ]
          } else if(direction === 'W'){
            const curI = currentPos[0] 
            const nxJ = currentPos[1] - Number(count)
            const check = (curJ, curI, nxJ) => {
              let flag = false
              for(let l = curJ; l >= nxJ; l--){ 
                if(parks[curI][l] === 'X' || !parks[curI][l]){
                  flag = true
                  break;
                }
              }
               return flag
            }
            if(nxJ >= m || nxJ < 0) continue;
            
            if(parks[curI][nxJ]==='X'|| check(currentPos[1], curI, nxJ)){
              continue;
            } 
            currentPos = [curI, nxJ]
           } else if(direction=== 'E'){
            const curI = currentPos[0] 
            const nxJ = currentPos[1] + Number(count)
            const check = (curJ, nxI, nxJ) => {
               let flag = false
              for(let l = curJ; l <= nxJ; l++){ 
                if(parks[nxI][l] === 'X' || !parks[nxI][l]){
                  flag = true
                  break;
                }
              }
               return flag
            }
            if(nxJ > m || nxJ < 0) continue;
            
            if(parks[curI][nxJ]==='X' || check(currentPos[1],curI ,nxJ)){
              continue;
            }
            currentPos = [curI, nxJ]
           }
        } 
        break;
      }
    }
  }
  return currentPos
}