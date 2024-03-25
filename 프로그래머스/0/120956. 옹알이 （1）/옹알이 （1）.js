function solution(babbling) {
  const arr = ["aya", "ye", "woo", "ma"]
  let tmp = ""
  let cnt = 0
  let answer = 0;
  let flag = false
  
  for(let i = 0; i< babbling.length; i++){
    const word = babbling[i].split("")
    while(cnt < word.length){
      tmp+=word[cnt]
      if(arr.includes(tmp)) {
        flag = true
        tmp=""
      } 
      cnt++
    }
    if(tmp.length){
      flag=false
    }
    if(flag){
      answer++
    }
    tmp=""
    cnt=0
    flag=false
  }
  return answer
}