
function solution(storage, requests) {
  const n = storage.length;
  const m = storage[0].length;
  const dx = [0, 1, 0, -1];
  const dy = [-1, 0, 1, 0];

  let board = storage.map((s) => s.split(''));
  let total = n * m;

  for (let i = 0; i < requests.length; i++) {
    const request = requests[i];

    request.length === 1 ? forkLift(request) : crane(request.slice(0, 1));
  }

  function forkLift(request) {
    const pos = [];
    const visited = Array.from({ length: n }, () =>
      Array.from({ length: m }).fill(false)
    );

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (i === 0 || j === 0 || i === n - 1 || j === m - 1) {
          dfs(i, j, visited, request, pos);
        }   
      }
    }

    for (const [x, y] of pos) {
      if (board[x][y] === request) {
        board[x][y] = null;
        total--;
      }
    }
  }

  function dfs(x, y, visited, request, pos) {
    if (x < 0 || y < 0 || x >= n || y >= m || visited[x][y]) return;
    if (board[x][y] !== request && board[x][y] !== null) return;

    visited[x][y] = true;
      
    if (board[x][y] === request) {
      pos.push([x, y]);
      return
    }

    for (let d = 0; d < 4; d++) {
      const nx = x + dx[d];
      const ny = y + dy[d];
      dfs(nx, ny, visited, request, pos);
    }
  }

  function crane(request) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (board[i][j] === request) {
          board[i][j] = null;
          total--;
        }
      }
    }
  }

  console.log(board);
  return total;
}
