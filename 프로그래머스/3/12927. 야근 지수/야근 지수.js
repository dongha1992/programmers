function solution(n, works) {
  if (works.reduce((a, b) => a + b, 0) <= n) return 0;
  works.sort((a, b) => b - a);
    
  while(n){
    works[0]--;
    n--
    
    let i = 0;
    while(works[i] < works[i+1]){
       [works[i], works[i + 1]] = [works[i + 1], works[i]];
        i++;
    }
  }
  
  return works.reduce((acc, cur) => acc + Math.pow(cur, 2),0)
 }

