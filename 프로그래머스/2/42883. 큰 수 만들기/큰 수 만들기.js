function solution(number, k) {
  const stack = [];

  for (let i = 0; i < number.length; i++) {
    const n = number[i];

    while (k && stack[stack.length - 1] < n) {
      stack.pop();
      k--;
    }
    stack.push(n);
  }
  if (k) {
    const minIndex = stack.indexOf(Math.min(...stack));
    stack.splice(minIndex, 1);
  }
  return stack.join("")
}