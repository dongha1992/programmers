

function solution(cacheSize, cities) {
  const cache = Array.from({ length: cacheSize }, () => 0);
  let times = 0;

  cities.forEach((city) => {
    city = city.toLowerCase();
    let pos = -1;
    for (let i = 0; i < cacheSize; i++) {
      if (city === cache[i]) {
        pos = i;
      }
    }
    if (pos === -1) {
      cache.unshift(city);
      if (cache.length > cacheSize) {
        cache.pop();
      }
      times += 5;
    } else {
      cache.splice(pos, 1);
      cache.unshift(city);
      times += 1;
    }
  });

  return times;
}
