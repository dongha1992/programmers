function solution(s) {
 s = s.replace(/\}/g,"]")
 s = s.replace(/\{/g,"[")
 let answer = []
 const arr = JSON.parse(s)
 arr.sort((a, b) => a.length-b.length)
  
 for(let i = 0; i <arr.length; i++){
   const numbers = arr[i]
   if(i===0) answer.push(...numbers)
   const rest = numbers.filter(a => !answer.includes(a))
   answer.push(...rest)
 }
  return answer
}