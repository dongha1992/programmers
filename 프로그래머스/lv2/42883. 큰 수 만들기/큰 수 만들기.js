function solution(number, k) {
  let stack = [ ]
  
  for(let i = 0; i < number.length; i++){
    let c = number[i]
    while(k && stack[stack.length-1] < c){
        stack.pop()
        k--
    }
    stack.push(c)
  }
  if(k){
    stack.splice(stack.indexOf(Math.min(...stack)), 1)
  }
 return stack.join("")

}