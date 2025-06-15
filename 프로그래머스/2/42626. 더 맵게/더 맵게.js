function solution(scoville, K) {
  const heap = new MinHeap();
  scoville.forEach((v) => heap.insert(v));
  let answer = 0;

  while (heap.size() > 1 && heap.peek() < K) {
    const first = heap.remove();
    const second = heap.remove();
    const merge = getScovilleIndex(first, second);
    heap.insert(merge);
    answer++;
  }
  return heap.peek() >= K ? answer : -1;
}


const getScovilleIndex = (t1, t2) => {
  return t1 + t2 * 2;
};


class MinHeap {
  constructor() {
    this.heaps = [];
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  leftChild(index) {
    return index * 2 + 1;
  }

  rightChild(index) {
    return index * 2 + 2;
  }

  insert(element) {
    this.heaps.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let currentIndex = this.heaps.length - 1;
    const element = this.heaps[currentIndex];

    while (currentIndex > 0) {
      const parentIndex = this.getParentIndex(currentIndex);
      const parent = this.heaps[parentIndex];

      if (element >= parent) break;

      this.heaps[parentIndex] = element;
      this.heaps[currentIndex] = parent;
      currentIndex = parentIndex;
    }
  }

  bubbleDown() {
    let currentIndex = 0;
    const length = this.heaps.length;
    const element = this.heaps[0];

    while (true) {
      const leftChildIndex = this.leftChild(currentIndex);
      const rightChildIndex = this.rightChild(currentIndex);
      let swap = null;

      if (leftChildIndex < length) {
        const leftChild = this.heaps[leftChildIndex];
        if (leftChild < element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        const rightChild = this.heaps[rightChildIndex];
        if (
          (swap === null && rightChild < element) ||
          (swap !== null && rightChild < this.heaps[swap])
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;

      this.heaps[currentIndex] = this.heaps[swap];
      this.heaps[swap] = element;
      currentIndex = swap;
    }
  }

  remove() {
    const minElement = this.heaps[0];
    const lastElement = this.heaps.pop();

    if (this.heaps.length > 0 && lastElement !== undefined) {
      this.heaps[0] = lastElement;
      this.bubbleDown();
    }

    return minElement;
  }

  peek() {
    return this.heaps[0];
  }
  
  size() {
    return this.heaps.length
  }
}
