function solution(begin, target, words) {
const ch = Array.from({length:words.length}).fill(0)
  let answer = 0;
  if(!words.includes(target)){return 0}
  
   const bfs = (word) => {
    const queue = []
    queue.push([word, 0])
    let min = Infinity
    
     while(queue.length){
       let [currentWord, step] = queue.shift();
       const cnt = countNonOverlapChars(currentWord, target)
       if(cnt === 1){
         step++
         answer = step
         return 
       } 
       if(currentWord === target) {
         answer = step
         return
       }
       for(let i = 0 ; i < words.length; i++){
         if(ch[i]===0){
          const w = words[i]
          const cnt = countNonOverlapChars(currentWord, w)
          if(cnt === 1){
           step++
           queue.push([w, step])
           ch[i] = 1
          } 
         }
       }
     }  
   }
   
   bfs(begin)
  
   return answer
}

function countNonOverlapChars(str1, str2) {
    let count = 0;
    const minLength = Math.min(str1.length, str2.length);
    
    for (let i = 0; i < minLength; i++) {
        if (str1[i] !== str2[i]) {
            count++;
        }
    }
    count += Math.abs(str1.length - str2.length);
    
    return count;
}
