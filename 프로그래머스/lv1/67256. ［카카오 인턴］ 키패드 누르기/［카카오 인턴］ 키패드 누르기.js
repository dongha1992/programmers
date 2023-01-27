function solution(numbers, hand) {

  const answer = Array.from({length:numbers.length}, ()=>"")  
  const getPad = () => {
   let arr = [] 
   for(let i= 0; i < 4; i++){
    let next = (3*i)+1;
    let tmp = []
    for(let j = next; j <= next+2; j++){
      if(j===10){
        tmp.push("*")
      } else if(j===11){
        tmp.push(0)
      } else if(j===12){
        tmp.push("#")
      } else {
        tmp.push(j)
      }
    }
    arr.push(tmp)
   }
    return arr
  }
  
  const pad = getPad()
  let left = [0, 3] 
  let right = [2, 3] 
  const lefts = [1, 4, 7]
  const rights = [3, 6, 9]
  const rest = [2, 5, 8, 0]
     
  for(let i = 0; i < numbers.length; i++){
    const pos = numbers[i]
    for(let j = 0; j < pad.length; j++){
      for(let k = 0; k < pad[j].length; k++){
        const target = pad[j][k]
        if(pos === target){
         if(lefts.includes(target)){
           answer[i] = "L"
           left = [k, j]
         } else if(rights.includes(target)){
           answer[i] = "R"
           right = [k, j]
         } else if(rest.includes(target)){
           // 2, 5, 8, 0
          let leftDist = Math.abs(left[0] - k) + Math.abs(left[1] - j)
          let rightDist = Math.abs(right[0] - k) + Math.abs(right[1] - j)
          if(leftDist < rightDist){
             answer[i] = "L"
             left = [k, j]
          } else if(leftDist > rightDist){
             answer[i] = "R"
             right = [k, j]
          } else if(leftDist === rightDist){ 
            // 거리 같을 때
             if(hand === "left") {
               answer[i] = "L"
               left = [k, j]
             } else {
               answer[i] = "R"
               right = [k, j]
             }
          }
         }
        }
      }
    }
  }
  
  return answer.join("")
}