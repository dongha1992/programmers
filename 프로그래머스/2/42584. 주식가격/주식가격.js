function solution(prices) {
  const ch = Array.from({length:prices.length},()=> 0)

  for(let i = 0; i < prices.length; i++){
   for(let j = i+1; j< prices.length; j++){
     if(prices[i] <= prices[j]) ch[i]++;
     else {
       ch[i] = j-i;
       break;
     }
   }
  }
  return ch
}