function solution(cap, n, deliveries, pickups) {
 const delAndPick = deliveries.map((d, i) => [d, pickups[i], i+1])
 
 let answer = 0;
 let dCnt = 0;
 let pCnt = 0;
 let rt = n -1
 

 while(rt >= 0){
   const [d, p, i] = delAndPick[rt];
   dCnt += d;
   pCnt += p;
   while(dCnt > 0 || pCnt > 0){
     dCnt -= cap;
     pCnt -= cap;
     answer += 2 * i
   }
   rt--
 }

  return answer
}