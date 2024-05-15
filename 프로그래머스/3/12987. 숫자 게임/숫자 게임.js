function solution(a, b) {
  a.sort((a, b) => a-b)
  b.sort((a, b) => a-b)
  let lt = 0;
  let rt = 0;
  let answer = 0;
  
  while(lt < a.length && rt < b.length){
    if(a[lt] < b[rt]){
      answer++;
      lt++;
      rt++
    } else if(a[lt] > b[rt]){
      rt++;
    } else {
      rt++
    }
  }
    return answer
}