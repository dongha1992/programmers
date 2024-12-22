

function solution(cacheSize, cities) {
  const CACHE_HIT = 5;
  const CACHE_MISS = 1;
  
  if(cacheSize === 0) return cities.length * CACHE_HIT;
  
  const cache = new Map();
  let answer = 0;
  
  for(let i = 0; i < cities.length; i++){
    const city = cities[i].toLowerCase();
    
    if(cache.has(city)){
      cache.delete(city);
      cache.set(city, true);
      answer += 1;
    } else {
      if(cache.size >= cacheSize) {
        const old = cache.keys().next().value;
        cache.delete(old);
      }
      cache.set(city, true);
      answer += 5;
    }
  }
  return answer
}
