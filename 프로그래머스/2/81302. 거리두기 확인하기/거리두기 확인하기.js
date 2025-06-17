function solution(places) {
  const answer = [];
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const row = places.length;
  const col = places[0].length;

  const checkSafePlaces = (place) => {
    place = place.map((p) => p.split(''));

    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
         if (place[i][j] === 'P' && !safePlace(place, i, j)) {
          return 0;
        }
      }
    }
      return 1;
  };

  function safePlace(place, i, j) {
    const queue = [[i, j, 0]];
    const visited = Array.from({ length: row }, () => Array(col).fill(false));
    visited[i][j] = true;

    while (queue.length) {
      const [x, y, dist] = queue.shift();
        
      if (dist >= 1 && dist <= 2 && place[x][y] === 'P') {
        return 0;
      }
        
      if (dist >= 2) continue;

      for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;
        if (
          nx >= 0 &&
          nx < row &&
          ny >= 0 &&
          ny < col &&
          !visited[nx][ny] &&
          place[nx][ny] !== 'X'
        ) {
          visited[nx][ny] = true;
          queue.push([nx, ny, dist + 1]);
        }
      }
    }
      
    return 1;
  }

  for (let i = 0; i < places.length; i++) {
    const result = checkSafePlaces(places[i]);
    answer.push(result);
  }
  return answer;
}



