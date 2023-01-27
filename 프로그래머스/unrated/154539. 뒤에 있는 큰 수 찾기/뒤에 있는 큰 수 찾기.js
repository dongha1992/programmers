function solution(numbers) {
  let answer = new Array(numbers.length).fill(-1);
 let length = numbers.length;
 const stack = []
 
 for(let i = 0; i < length; i++) {
   while(stack.length && stack[stack.length-1][0] < numbers[i]){
     const poped = stack.pop()
     answer[poped[1]] = numbers[i]
   }
   stack.push([numbers[i], i])
 }
  return answer
}