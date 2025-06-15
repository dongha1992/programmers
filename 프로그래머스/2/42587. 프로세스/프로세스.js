function solution(priorities, location) {
  const queue = priorities.map((p, i) => ({ priority: p, index: i }));
  const maxHeap = new PriorityQueue();

  priorities.forEach((p, i) => maxHeap.push(p, i));

  let answer = 0;
    
  while (queue.length) {
    const curr = queue.shift();
    if (curr.priority === maxHeap.peek()) {
      maxHeap.pop();
      answer++;
      if (curr.index === location) return answer;
    } else {
      queue.push(curr);
    }
  }
  return -1;
}

class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  push(priority, index) {
    this.heap.push({ priority, index });
    this.heap.sort((a, b) => b.priority - a.priority);
  }

  pop() {
    return this.heap.shift();
  }

  peek() {
    return this.heap[0]?.priority || 0;
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

