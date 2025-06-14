
function solution(k, tangerine) {
  const tangerineMap = new Map();
  let answer = 0;
  let remaning = k;

  for (const size of tangerine) {
    tangerineMap.set(size, (tangerineMap.get(size) || 0) + 1)
  }
  
  const sortedTangerineMap = [...tangerineMap.values()].sort((a, b) => b - a)
  
  for(const stm of sortedTangerineMap) {
    answer++;
    remaning -= stm;
    if(remaning <= 0) break;
  }
  
  return answer
}











