
function solution(info, n, m) {
  const memo = new Map();
  let answer = -1

  const dfs = (depth, a, b) => {
    if(answer > a) return  
    if (a <= 0 || b <= 0) return;
      
    const key = `${depth}-${a}-${b}`;
    if (memo.has(key)) return; 
    memo.set(key, true);
      
    if (depth === info.length) {
       answer = Math.max(answer, a)
       return
    } else {
      dfs(depth + 1, a - info[depth][0], b);
      dfs(depth + 1, a, b - info[depth][1]);  
      }
  };

  dfs(0, n, m);
  return answer < 0 ? - 1: n - answer
}