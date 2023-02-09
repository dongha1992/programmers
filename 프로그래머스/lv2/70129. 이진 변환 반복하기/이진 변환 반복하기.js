function solution(s) {
 let times = 0;
 let removes = 0;
  
 while(s!=="1"){
   let removed = s.replace(/0/g,"")
   removes += s.length - removed.length
   s = removed.length.toString(2)
   times++
 }
  return [times, removes]
}