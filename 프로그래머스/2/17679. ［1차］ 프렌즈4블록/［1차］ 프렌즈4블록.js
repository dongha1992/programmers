function solution(m, n, board) {
  let answer = 0;
  let checked = generateCheckedArr();

  board = board.map((b) => b.split(''));

  const dx = [1, 1, 0];
  const dy = [0, 1, 1];

  function checkBoard() {
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (board[i][j] !== '0') {
          checkIsSame(i, j);
        }
      }
    }
  }

  function rotateBoard() {
    let arr = [];
    for (let i = 0; i < n; i++) {
      let col = [];
      for (let j = 0; j < m; j++) {
        col.push(board[m - j - 1][i]);
      }
      arr.push(col);
    }
    return arr;
  }

  function rotateBackBoard(board) {
    let arr = [];
    for (let i = 0; i < m; i++) {
      let col = [];
      for (let j = 0; j < n; j++) {
        col.push(board[j][m - i - 1]);
      }
      arr.push(col);
    }
    return arr;
  }

  function reorderBoard() {
    const rotatedBoard = rotateBoard();
    const filteredBoard = fillterArray(rotatedBoard);
    const filledArray = fillArray(filteredBoard);
    const rotateAsOrigin = rotateBackBoard(filledArray);

    board = rotateAsOrigin;
    checked = generateCheckedArr();
  }

  function fillterArray(arr) {
    return arr.map((subArr) => subArr.filter((a) => a !== '0'));
  }

  function fillArray(arr) {
    return arr.map((subArr) => [
      ...subArr,
      ...Array(m - subArr.length).fill('0'),
    ]);
  }

  function changeBoard() {
    for (let i = 0; i < checked.length; i++) {
      for (let j = 0; j < checked[i].length; j++) {
        if (checked[i][j] === 1) {
          board[i][j] = '0';
          answer++;
        }
      }
    }
  }

  function changeChecked(blocks) {
    for (let i = 0; i < blocks.length; i++) {
      const [x, y] = blocks[i];
      checked[x][y] = 1;
    }
  }

  function checkIsSame(i, j) {
    let currentBlock = board[i][j];
    let blocks = [[i, j]];

    for (let k = 0; k < 3; k++) {
      const nx = i + dx[k];
      const ny = j + dy[k];
      if (nx < m && ny < n && nx >= 0 && ny >= 0) {
        const nextBlock = board[nx][ny];
        if (nextBlock !== currentBlock || nextBlock === '0') return;
        blocks.push([nx, ny]);
      }
    }
    changeChecked(blocks);
  }

  function generateCheckedArr() {
    return Array.from({ length: m }, () => Array(n).fill(0));
  }

  function start() {
    checkBoard();
    changeBoard();
    reorderBoard();
  }

 let prevAnswer = -1;
    
 while (prevAnswer !== answer) {
  prevAnswer = answer;
  start();
}


  return answer;
}

