function solution(n, arr1, arr2) {
const answer = Array.from({length:n}, ()=>"")
 
 const getBinary = (arr) => {
   return arr.map(a => {
   let bin = a.toString(2)
   if(bin.length < n){
     const diff = n - bin.length
     for(let i = 0; i < diff; i++){
       bin = "0"+ bin
     }
   } 
   return bin
   })
 }
 const m1 = getBinary(arr1)
 const m2 = getBinary(arr2)
 
 for(let i = 0; i < answer.length; i++){
   let str = ""
   for(let j = 0; j < answer.length; j++){ 
     if(m1[i][j]==="1" || m2[i][j]==="1") str+= "#";        else str+= " ";
   }
   answer[i] = str
 }
  return answer
}