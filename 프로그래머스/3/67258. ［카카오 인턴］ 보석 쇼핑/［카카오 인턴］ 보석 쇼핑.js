function solution(gems) {
 const set = new Set(gems)
 let n = set.size;
 let gemsMap = new Map()
 let minDiff = Infinity
 const answer = []

  
  for(let rt = 0; rt < gems.length; rt++){
    const gem = gems[rt]
    gemsMap.delete(gem);
    gemsMap.set(gem, rt)
    
    if(gemsMap.size === n){
      const min = gemsMap.values().next().value
      const diff = rt - min
      
      if(minDiff > diff){
        minDiff = diff 
        answer[0] = [min+1, rt+1]
      }
    }
  }

  return answer[0]
}

