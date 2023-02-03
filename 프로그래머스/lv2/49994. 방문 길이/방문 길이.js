function solution(dirs) {
  const board = Array.from(Array(10), ()=>Array(10).fill(0))
  const ch = {}
  const posMap = {
    "U":[0, 1],
    "L":[-1,0],
    "R":[1, 0],
    "D":[0,-1]
  }
  let current = [5, 5]
  const n = board.length
  
  for(let i = 0; i < dirs.length; i++){
    const pos = posMap[dirs[i]]
    const nx = current[0] + pos[0]
    const ny = current[1] + pos[1]
    if(nx >= 0 && ny >= 0 && nx <= n && ny <= n){
      ch[[current[0],current[1], nx, ny].join("")] = true
      ch[[nx, ny,current[0],current[1]].join("")] = true
      current = [nx, ny]
     }
    }

  return Object.keys(ch).length / 2
}