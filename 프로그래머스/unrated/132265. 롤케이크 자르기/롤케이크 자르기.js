function solution(topping) {
  let answer = 0;
  
  const me = new Map()
  let bro = new Map()
  
  for(let a of topping){
    bro.has(a) ? bro.set(a, (bro.get(a)||0)+1) : bro.set(a, 1)
   }
  
  for(let i = 0; i < topping.length;i++){
     me.has(topping[i]) ? me.set(topping[i], (me.get(topping[i])||0)+1) : me.set(topping[i], 1)
    bro.set(topping[i],(bro.get(topping[i])||0)-1)
    if(!bro.get(topping[i])) bro.delete(topping[i])
    if(me.size === bro.size) answer++
   }
  return answer
}