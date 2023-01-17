
function solution(k, tangerine) {
  let len = tangerine.length;
  let answer = 0;

  const map = new Map();
  for (let x of tangerine) {
    if (map.has(x)) {
      map.set(x, map.get(x) + 1);
    } else {
      map.set(x, 1);
    }
  }
  const arr = [...map].sort((a, b) => a[1] - b[1]);
  for (let i = 0; i < arr.length; i++) {
    while (arr[i][1] && len !== k) {
      arr[i][1]--;
      len--;
    }
    if (len === k) break;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1]) answer++;
  }
  return answer;
}