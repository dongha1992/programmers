function solution(places) {
  const dx = [1, 2, 1,  0, 0, -1,  -1, -2, -1,  0, 0, 1];
  const dy = [0, 0, 1,  1, 2, 1,  0, 0, -1,  -1, -2, -1];
  const answer = [];

 
  const checkPlaces = (board) => {
    board = board.map((b) => b.split(''));
    const row = board.length;
    const col = board[0].length;

    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        const curr = board[i][j];
        const isPerson = curr === 'P';

        for (let k = 0; k < dx.length; k++) {
          const nx = i + dx[k];
          const ny = j + dy[k];

          if (nx >= 0 && nx < row && ny >= 0 && ny < col && isPerson) {
            const isPersonNearBy = board[nx][ny] === 'P';
            if (isPersonNearBy) {
              const manhattanDistance = getManhattanDistance(i, nx, j, ny);
              if(manhattanDistance === 1) return 0
              if(manhattanDistance === 2) {
                if(i === nx){
                  // 위 아래 중 하나
                  if(j-2 === ny){
                    if(board[nx][j-1] === "X") continue;
                    else return 0
                  } else if(j+2 === ny){
                    if(board[nx][j+1] === "X") continue;
                    else return 0
                  }
                } else if(j === ny){
                  // 왼 오른 중 하나
                  if(i-2 === nx){
                    if(board[i-1][ny] === "X") continue;
                    else return 0
                  } else if(i+2 === nx){
                    if(board[i+1][ny] === "X") continue;
                    else return 0
                  }
              
                } else {
                        // 대각선
                  if (i +1 === nx && j - 1 === ny) {
                  // rightup
                  if (board[i][j - 1] === 'X' && board[i + 1][j] === 'X') continue;
                  return 0;
                } else if (i +1 === nx && j+1===ny) {
                  // rightdown
                  if (board[i + 1][j] === 'X' && board[i][j + 1] === 'X') continue;
                  return 0;
                } else if (i-1 === nx && j===ny) {
                  // leftdown
                  if (board[i - 1][j] === 'X' && board[i][j + 1] === 'X') continue;
                  return 0;
                } else if (i - 1 ===nx && j-1 === ny) {
                  // leftup
                  if (board[i - 1][j] === 'X' && board[i][j - 1] === 'X') continue;
                  return 0;
                 } 
                }
              }
            }
          }
        }
      }
    }
    return 1
  };

  for (let i = 0; i < places.length; i++) {
    answer.push(checkPlaces(places[i]));
  }

  return answer;
}

function getManhattanDistance(r1, r2, c1, c2) {
  return Math.abs(r1 - r2) + Math.abs(c1 - c2);
}



