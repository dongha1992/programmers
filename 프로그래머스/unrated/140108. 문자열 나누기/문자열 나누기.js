function solution(s) {
  let x = ''
  let answer=0;
  let sCnt = 0;
  let i = 0; 
  
  for(let i = 0; i < s.length; i++){
    if(!x) x=s[i]
    if(x===s[i]){
      sCnt++
    } else {
      sCnt--
    }
   if(sCnt===0){
     answer++
     sCnt=0
     x=""
    }
  }
    if(x) answer++
    return answer
}