function solution(p) {
 let answer = ""
  
 const checkCorrectStr = (str) => {
   const stack = []
   for(let i = 0; i < str.length; i++){
     if(str[i]==="(") stack.push(str[i])
     else {
       if(stack[stack.length-1]==="(") stack.pop()
     }
   }
   return stack.length === 0
 } 
 
 const checkBalanceStr = (str) => {
   let s1 = 0;
   let s2 = 0;
   let result = ""
   
   for(let i = 0; i < str.length; i++){
     if(str[i]==="(") {
       s1++
       result+=str[i]
     } else if(str[i]===")") {
       s2++
       result+=str[i]
     }
     if(s1!==0 && s2!==0 && s1===s2) break;
   }
   return result
 }
 
 const generateStr = (str) => {
   let arr = str.split("")
   let result = []
   for(let i = 1; i < arr.length - 1; i++){
     if(arr[i]==="(") result.push(")")
     else result.push("(")
   }
   return result.join("")
 }
 
 const divideStr = (str) => {
   if(str.length === 0) return str
  
    // 2. 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리합니다. 단, u는 "균형잡힌 괄호 문자열"로 더 이상 분리할 수 없어야 하며, v는 빈 문자열이 될 수 있습니다. 
   
   if(checkBalanceStr(str).length !== 0){
     let u = checkBalanceStr(str)
     let v = str.slice(checkBalanceStr(str).length)
       // 3. 문자열 u가 "올바른 괄호 문자열" 이라면 문자열 v에 대해 1단계부터 다시 수행합니다.
     if(checkCorrectStr(u)){
     return u + divideStr(v)
   } else {
     // 4. 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다. 
     return "(" + divideStr(v)  + ")" + generateStr(u)
    }
   }  
 }
 
  // 1. 입력이 빈 문자열인 경우, 빈 문자열을 반환합니다. 
  if(p.length === 0) return ""
  if(checkCorrectStr(p)) return p
  
  return divideStr(p)
}