function solution(board, moves) {
let stack = [];
  let answer = 0;
  
  for(let i = 0; i < moves.length; i++){
    let pos = moves[i]-1
    let target = 0
    
    for(let j = 0; j < board.length; j++){
      if(board[j][pos]!==0) {
        target=board[j][pos]
        board[j][pos]=0
        break;
      }
   }
   if(stack[stack.length-1]===target && target!==0){
      stack.pop()
      answer+=2
   } else stack.push(target)
  }
  return answer
}