function solution(operations) {
let queue = []
const a = operations.map(a => a.split(" "))

  for(let i =0; i < a.length; i++){
   const op = a[i][0]
   const num = Number(a[i][1])
   if(op === 'I'){
      queue.push(num)
   } else {
     if(queue.length > 0){
       if(num===1){
        let target = Math.max(...queue)
        queue.splice(queue.indexOf(target), 1)
       } else if(num===-1){
        let target = Math.min(...queue)
        queue.splice(queue.indexOf(target), 1)
      }
     } 
    }
  }
    
  let max =Math.max(...queue)
  let min = Math.min(...queue)
  
  return queue.length > 0 ? [max, min] : [0,0]
}