
function solution(s) {
  let answer = Number.MAX_SAFE_INTEGER;

  const pressString = (str, k) => {
    let result = "";
    let cnt = 1;
    
    for(let i = 0; i < str.length; i += k){
      const cur = str.substring(i, i+k)
      const next = str.substring(i + k, i + 2 * k)
      if(cur === next) cnt++;
      else {
        result += cur;
        if(cnt > 1) result += String(cnt);
        cnt = 1;
      }
    }
    return result.length;
  }

  
  for(let i = 1; i <= s.length; i++){
    if(answer >= pressString(s, i)){
      answer = pressString(s, i)
    }
  }

  return answer;
}
