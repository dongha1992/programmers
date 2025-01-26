function solution(operations) {
 const splitOperations = operations.map((o) => o.split(' '));
  const queue = [];

  for (let i = 0; i < splitOperations.length; i++) {
    const [op, n] = splitOperations[i];
    if (op === 'I') {
      queue.push(Number(n));
      queue.sort((a, b) => a - b);
    } else if (queue.length > 0) {
      if (n === '1') {
        queue.pop();
      } else if (n === '-1') {
        queue.shift();
      }
    }
  }

  return queue.length > 0 ? [queue[queue.length - 1], queue[0]] : [0, 0];
}