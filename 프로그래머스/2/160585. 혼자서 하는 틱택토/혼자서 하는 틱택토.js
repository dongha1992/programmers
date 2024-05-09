function solution(board) {
  let cnt = 0;
  let isWinO = false
  let isWinX = false
  
  for(let i = 0; i < board.length; i++){
    for(let j = 0; j < board[0].length; j++){
      if(board[i][j] === 'O') {
       if(isValid(i, j, "O", board)){
          if(isWinX) return 0
          else isWinO = true
       }   
       cnt++;
      }
      if(board[i][j] === 'X') {
        if(isValid(i, j, "X", board)){
           if(isWinO) return 0
           else isWinX = true
        }   
        cnt--; 
      }
    }
  }
  
 return checkAnswer(cnt, isWinO, isWinX)
}

function isValid(row, col, sign , board){
  const rows = board[row].split("")
  const cols = getColumns(board, col)
  const diagonals = getDiagonals(board,row, col)
  const reversediagonals = getReverseDiagonals(board,row, col)
 return [rows, cols, diagonals, reversediagonals].some(arr => arr.every(a => a === sign))
  
}

function getColumns(board, col){
   return board.map(row => row[col]);
}

function getDiagonals(board, row, col){
  return [board[0][0], board[1][1], board[2][2]]
}

function getReverseDiagonals(board, row, col){
  return [board[2][0], board[1][1], board[0][2]]  
}
function checkAnswer(cnt, isWinO, isWinX){
    if(cnt === 1){
        if(isWinO || !isWinX && !isWinO) return 1
    } else if(cnt === 0){
        if(isWinX || !isWinX && !isWinO) return 1
    } 
  
    return 0
}