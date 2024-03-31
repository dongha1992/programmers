function solution(park, routes) {
   
const parks = park.map((p) => p.split(''));
const routeArray = routes.map((r) => r.split(' '));

const n = park.length;
const m = routeArray.length;

let currentPos = [];

const checkColumn = (start, end, fixed) => {
  let flag = false;
  for (let l = start; l >= end; l--) {
    if (parks[l][fixed] === 'X' || !parks[l][fixed]) {
      flag = true;
      break;
    }
  }
  return flag;
};
  
const checkRow = (start, end, fixed) => {
  let flag = false;
  for (let l = start; l >= end; l--) {
    if (parks[fixed][l] === 'X' || !parks[fixed][l]) {
      flag = true;
      break;
    }
  }
  return flag;
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < parks[i].length; j++) {
    if (parks[i][j] === 'S') {
      currentPos = [i, j];
      for (let k = 0; k < m; k++) {
        const directions = routeArray[k];
        const [direction, count] = directions;

        if (direction === 'N') {
          const nxI = currentPos[0] - Number(count);
          const curJ = currentPos[1];
          
          const isLimit = nxI >= n || nxI < 0
          if (isLimit || parks[nxI][curJ] === 'X' || checkColumn(currentPos[0], nxI, curJ)) {
            continue;
          }
          currentPos = [nxI, curJ];
        } else if (direction === 'S') {
          const nxI = currentPos[0] + Number(count);
          const curJ = currentPos[1];
    
          const isLimit = nxI >= n || nxI < 0
          
          if (isLimit || parks[nxI][curJ] === 'X' || checkColumn(nxI,currentPos[0], curJ)) {
            continue;
          }
          currentPos = [nxI, curJ];
        } else if (direction === 'W') {
          const curI = currentPos[0];
          const nxJ = currentPos[1] - Number(count);

          const isLimit = nxJ >= m || nxJ < 0
          
          if (
           isLimit || parks[curI][nxJ] === 'X' || checkRow(currentPos[1], nxJ, curI)
          ) {
            continue;
          }
          currentPos = [curI, nxJ];
        } else if (direction === 'E') {
          const curI = currentPos[0];
          const nxJ = currentPos[1] + Number(count);
          const check = (curJ, nxI, nxJ) => {
            let flag = false;
            for (let l = curJ; l <= nxJ; l++) {
              if (parks[nxI][l] === 'X' || !parks[nxI][l]) {
                flag = true;
                break;
              }
            }
            return flag;
          };
  
          const isLimit = nxJ > m || nxJ < 0
          const canCheck = currentPos[1] >= 0 && curI > 0 && nxJ > 0;
          if (
           isLimit|| parks[curI][nxJ] === 'X' ||
         checkRow(nxJ,currentPos[1], curI)) {
            continue;
          }
          currentPos = [curI, nxJ];
        }
      }
      break;
    }
  }
}
return currentPos;
}