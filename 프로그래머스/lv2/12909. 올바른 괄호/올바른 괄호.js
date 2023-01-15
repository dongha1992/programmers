function solution(s){
    if(s.length === 1 || s[0] === ")") return false;
    
    let cnt = 0; 
    for(let i =0; i < s.length; i++){
      s[i]==="(" ? cnt += 1 : cnt -= 1
      if(cnt < 0) break;
    }
   return cnt === 0  ? true : false
}
