
const solution = (m, n, board) => {
const checked = Array.from({ length: m }, () => new Array(n).fill(1));
  board = board.map(b=>b.split(""))
  let finishCnt = 0
  const dx = [0, 1, 1]
  const dy = [1, 1, 0]



const reorderBoard = (board) => {
  let resultBoard = board
  
    for(let col = 0; col < n; col++){
     for(let row = m-1; row >= 0; row--){
      let startIndex = row
       if(row > 1 && resultBoard[row][col] === 0){
           while(true) {
             let temp = resultBoard[startIndex-1][col]
            resultBoard[startIndex-1][col] = resultBoard[startIndex][col]
            resultBoard[startIndex][col] = temp
        
           let checTemp = checked[startIndex-1][col]
           checked[startIndex-1][col] = checked[startIndex][col]
           checked[startIndex][col] = checTemp  
           startIndex--
           if(startIndex <= 0) break;
         }
       } 
    }
  } 
  
   return resultBoard
}

const changeBoard = (board) => {
  const resultBoard = board
  for(let row = 0; row < m; row++){
    for(let col = 0; col < n; col++){
      if(!checked[row][col]){
        board[row][col]= 0
      }
    }
  }
  return resultBoard
}

const changeCheckedArr = (pos) => {
  const [current, right, rightBottom, bottom] = pos;
  checked[current[0]][current[1]] = 0
  checked[right[0]][right[1]] = 0
  checked[rightBottom[0]][rightBottom[1]] = 0
  checked[bottom[0]][bottom[1]] = 0
}

const checkBoard = (board) => {
  let resultBoard = board
   for(let row = 0; row < m-1; row++){
    for(let col = 0; col < n-1; col++){
      let flag = true
      for(let k = 0; k < 3; k++){
        const nx = row + dx[k]
        const ny = col + dy[k]
        if(nx >=0 && nx <= m && ny >=0 && ny <= n){
         const current = resultBoard[row][col]
         const target = resultBoard[nx][ny]
         if(current !== target){
           flag = false
          }
          if(k === 2 && flag){
            changeCheckedArr([[row, col], [row, col+dy[0]],[row+dx[1], col+dy[1]],[row+dx[2], col]])
          }
        }
      }
      
      finishCnt++
    }
  }
  return resultBoard
}


while(true){
 board = reorderBoard(changeBoard(checkBoard(board)))
  if(finishCnt > 380000) break;
}

  return  m * n - checked.flatMap(arr => arr.filter(c=>c)).length
};

