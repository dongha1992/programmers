const DIRECTION_MAP = {
    E: [0, 1],
    W: [0, -1],
    S: [1, 0],
    N: [-1, 0],
  };


const solution = (park, routes) => {
  park = park.map((p) => p.split(''));

  const n = park.length;
  const m = park[0].length;

  let pos = getStartPos();
    
  function getStartPos() {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (park[i][j] === 'S') {
          return new Position(i, j);
        }
      }
    }
  }

  function canMove(pos, dir, step) {
    const tempPos = new Position(pos.x, pos.y);

    for (let i = 0; i < step; i++) {
      tempPos.move(DIRECTION_MAP[dir], 1);
      if (tempPos.isLimit(n, m) || tempPos.isBlocked(park)) return false;
    }
    return true;
  }

  for (const route of routes) {
    const routeInfo = route.split(' ');
    const [dir, step] = routeInfo;
    if (canMove(pos, dir, step)) {
      pos.move(DIRECTION_MAP[dir], step);
    }
  }

  return [pos.x, pos.y];
};

class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move(direction, step) {
    this.x += direction[0] * step;
    this.y += direction[1] * step;
  }

  isLimit(r, c) {
    return this.x < 0 || this.x >= r || this.y < 0 || this.y >= c;
  }

  isBlocked(board) {
    return board[this.x][this.y] === 'X';
  }
}

