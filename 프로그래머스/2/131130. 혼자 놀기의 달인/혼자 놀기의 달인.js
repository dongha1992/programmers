
function solution(cards) {
  const visited = Array(cards.length).fill(false);
  const cycles = [];

  for (let i = 0; i < cards.length; i++) {
    if (!visited[i]) {
      let cnt = 0;
      let curr = i;
        
      while (!visited[curr]) {
        visited[curr] = true
        curr = cards[curr] - 1;
        cnt++;
      }
      cycles.push(cnt);
    }
  }

  cycles.sort((a, b) => b - a);

  if (cycles.length >= 2) {
    return cycles[0] * cycles[1];
  }

  return 0;
}
