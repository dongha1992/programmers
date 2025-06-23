function solution(n, works) {
  works.sort((a, b) => b - a);
    
  while (n) {
      
    let i = 0;
    while(works[i] < works[i+1]) {
        [works[i] , works[i+1]] = [works[i+1] , works[i]];
        i++
    }
        
    if (!works[0]) break;
    works[0]--;
    n--;
  }

  return works.reduce((acc, cur) => acc + Math.pow(cur, 2), 0);
}













