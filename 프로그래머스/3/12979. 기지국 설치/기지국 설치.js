
function solution(n, stations, w) {
  let answer = 0;
  let range = 2 * w + 1;
  let lt = 1;
  if (!stations.length) return Math.floor(n / range);

  for (let i = 0; i < stations.length; i++) {
    const curStation = stations[i];
    const start = curStation - w;
    const end = curStation + w;

    if (lt > n) return answer;
    if (start > lt) {
      const needStations = mathCeil((start - lt) / range);
      answer += needStations;
    }
    lt = end + 1;
  }
    
  if (lt <= n) {
    const rest = n - lt + 1;
    answer += mathCeil(rest / range);
  }
    
  return answer;
}

function mathCeil(x) {
  if (Number.isInteger(x)) {
    return x;
  }
  return x % 1 > 0 ? parseInt(x) + 1 : parseInt(x);
}
