function solution(n, words) {
  const said = new Set();
  said.add(words[0])
  
  for(let i = 1; i < words.length; i++) {
    const prev = words[i - 1];
    const curr = words[i];
    
    if(!vaild(curr, prev) || said.has(curr)) {
      const p = getPlayer(i, n);
      const t = getTurn(i, n)
      return [p, t]
    }
    said.add(curr)
  }
  
  function vaild(curr, prev) {
    return prev[prev.length -1] === curr[0]
  }
  
  function getPlayer(index, n) {
    return (index % n) + 1
  }
  
  function getTurn(index, n) {
    return Math.floor(index / n) + 1
  }
  
  return [0, 0]
}
















