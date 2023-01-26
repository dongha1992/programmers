function solution(n) {
const k = 3
let answer = ""
  
const map = {
  1:1,
  2:2,
  0:4
}

while(n){
    let rest = n % k
    answer+=map[rest]
    n = n%3===0 ? ((n/3) -1) : Math.floor(n / k); 
}
return answer.split("").reverse().join("")
}