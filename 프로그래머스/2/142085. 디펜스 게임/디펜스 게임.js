function solution(n, k, enemy) {
  const myHeap = new MaxHeap();
  let finish = 0;
  for (let i = 0; i < enemy.length; i++) {
    myHeap.insert(enemy[i]);
    n -= enemy[i];
    if (n < 0) {
      if (k === 0) return finish;
      k--;
      n += myHeap.delete();
    }
    finish++;
  }
  return finish;
}


class MaxHeap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex = (parentIndex) => parentIndex * 2 + 1;
  getRightChildIndex = (parentIndex) => parentIndex * 2 + 2;
  getParentIndex = (childIndex) => Math.floor((childIndex - 1) / 2);
  hasParent = (index) => this.getParentIndex(index) >= 0;
  peek = () => this.heap[0];

  insert(element) {
    const node = element;
    this.heap.push(node);
    this.heapifyUp();
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  heapifyUp() {
    let currentIndex = this.heap.length - 1;
    let parentIndex = this.getParentIndex(currentIndex);

    while (
      this.hasParent(currentIndex) &&
      this.heap[parentIndex] < this.heap[currentIndex]
    ) {
      this.swap(parentIndex, currentIndex);
      currentIndex = parentIndex;
      parentIndex = this.getParentIndex(currentIndex);
    }
  }

  delete() {
    const max = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.heapifyDown();
    }
    return max;
  }

  heapifyDown(index = 0) {
    let currentIndex = index;
    let leftChildIndex = this.getLeftChildIndex(currentIndex);
    let rightChildIndex = this.getRightChildIndex(currentIndex);
    let nextIndex = currentIndex;
    const count = this.heap.length;

    if (this.heap[nextIndex] < this.heap[leftChildIndex]) {
      nextIndex = leftChildIndex;
    }
    if (this.heap[nextIndex] < this.heap[rightChildIndex]) {
      nextIndex = rightChildIndex;
    }
    if (nextIndex !== currentIndex) {
      this.swap(currentIndex, nextIndex);
      this.heapifyDown(nextIndex);
    }
  }
}
