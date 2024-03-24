function solution(keymap, targets) {
  const answer = []
  for(let i = 0; i < targets.length; i++){
    let cnt = 0;
    const target = targets[i]
      for(let j =0; j < target.length; j++){
      const t = target[j]
      let min = Infinity;
        for(let k = 0; k < keymap.length; k++){
          const formatTargetAfterKeyMap = keymap[k].indexOf(t) + 1
         
          if(formatTargetAfterKeyMap > 0){
            min = Math.min(formatTargetAfterKeyMap, min)
          }
       }
        cnt += min
    }  
    answer.push(cnt===Infinity ? -1:cnt)
  }
  return answer
}