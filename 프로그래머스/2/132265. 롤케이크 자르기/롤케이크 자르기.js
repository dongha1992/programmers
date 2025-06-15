function solution(topping) {
  const me = new Map();
  let bro = new Map();
  let answer = 0;

  for (let t of topping) {
    bro.has(t) ? bro.set(t, (bro.get(t) || 0) + 1) : bro.set(t, 1);
  }

  for (let t of topping) {
    if (bro.has(t)) {
      const remain = bro.get(t) - 1;
      bro.set(t, remain);
      if (remain === 0) {
        bro.delete(t);
      }
    }
    me.has(t) ? me.set(t, (me.get(t) || 0) + 1) : me.set(t, 1);
    if (me.size === bro.size) answer++;
  }
  return answer;
}




