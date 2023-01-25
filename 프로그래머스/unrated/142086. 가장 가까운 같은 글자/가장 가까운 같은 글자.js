function solution(s) {
    const map = new Map()
    const ch = Array.from({length:s.length}, ()=>0)
   
   for(let i = 0; i < s.length; i++){
    if(map.has(s[i])) {
      ch[i] = i- map.get(s[i])
    } else {
      ch[i] = -1
    }
      map.set(s[i], i)
   }
  return ch
}