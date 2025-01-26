function solution(begin, target, words) {
  let answer = 0;
  const ch = Array.from({length:words.length}).fill(0)
  
  if(!words.includes(target)) return 0
  
  const bfs = (word) => {
    const queue = [];
    queue.push([word, 0])
    
    while(queue.length){
      let [cur, step] = queue.shift();
      const cnt = diffBetweenWord(cur, target);
      
      if(cur === target) {
         answer = step
         return
       }
      
      for(let i = 0; i < words.length; i++){
        if(ch[i] === 0){
          const word = words[i]
          const cnt = diffBetweenWord(cur, word);
          if(cnt === 1){
            step++;
            queue.push([word, step]);
            ch[i] = 1;
          } 
        }
      }
    }     
  }
  bfs(begin)
  return answer
}

  
function diffBetweenWord(str1, str2) {
  let cnt = 0;
  const minLength = Math.min(str1.length, str2.length);
  
  for(let i = 0; i < minLength; i++){
    if(str1[i] !== str2[i]) cnt++;
  }
  
  cnt += Math.abs(str1.length - str2.length);
  return cnt;
}