function solution(numbers) {
  const answer = Array.from({ length: numbers.length }, () => -1);
  const stack = [];

  for (let i = numbers.length - 1; i >= 0; i--) {
    const curr = numbers[i];

    while (stack.length && stack[stack.length - 1] <= curr) {
      stack.pop();
    }

    if (stack.length) {
      answer[i] = stack[stack.length - 1];
    }

    stack.push(curr);
  }

  return answer;
}
