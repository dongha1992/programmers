function solution(prices) {
  const stack = [];
  const n = prices.length;
  const answer = Array.from({ length: n }).fill(0);

  for (let i = 0; i < n; i++) {
    const curr = prices[i];

    while (stack.length && curr < prices[stack[stack.length - 1]]) {
      const j = stack.pop();
      answer[j] = i - j;
    }
    stack.push(i);
  }

  while (stack.length) {
    const j = stack.pop();
    answer[j] = n - j - 1;
  }

  return answer;
}