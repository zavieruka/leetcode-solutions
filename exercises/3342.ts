class PriorityQueue<T> {
  private heap: T[] = [];
  private comparator: (a: T, b: T) => number;

  constructor(comparator: (a: T, b: T) => number) {
      this.comparator = comparator;
  }

  enqueue(item: T) {
      this.heap.push(item);
      this.bubbleUp();
  }

  dequeue(): T {
      const first = this.heap[0];
      const last = this.heap.pop()!;
      if (this.heap.length > 0) {
          this.heap[0] = last;
          this.bubbleDown();
      }
      return first;
  }

  isEmpty(): boolean {
      return this.heap.length === 0;
  }

  private bubbleUp() {
      let index = this.heap.length - 1;
      const element = this.heap[index];

      while (index > 0) {
          const parentIndex = Math.floor((index - 1) / 2);
          const parent = this.heap[parentIndex];
          if (this.comparator(element, parent) >= 0) break;

          this.heap[index] = parent;
          index = parentIndex;
      }
      this.heap[index] = element;
  }

  private bubbleDown() {
      let index = 0;
      const length = this.heap.length;
      const element = this.heap[0];

      while (true) {
          let leftIndex = 2 * index + 1;
          let rightIndex = 2 * index + 2;
          let smallest = index;

          if (
              leftIndex < length &&
              this.comparator(this.heap[leftIndex], this.heap[smallest]) < 0
          ) {
              smallest = leftIndex;
          }
          if (
              rightIndex < length &&
              this.comparator(this.heap[rightIndex], this.heap[smallest]) < 0
          ) {
              smallest = rightIndex;
          }
          if (smallest === index) break;

          this.heap[index] = this.heap[smallest];
          index = smallest;
      }
      this.heap[index] = element;
  }
}

function minTimeToReach(moveTime: number[][]): number {
  const numRows = moveTime.length;
  const numCols = moveTime[0].length;

  const dist: number[][] = Array.from({ length: numRows }, () => Array(numCols).fill(Infinity));
  dist[0][0] = 0;

  type Node = [number, number, number];
  const pq = new PriorityQueue<Node>((a, b) => a[0] - b[0]);
  pq.enqueue([0, 0, 0]);

  const directions = [-1, 0, 1, 0, -1];

  while (!pq.isEmpty()) {
    const [currentCost, row, col] = pq.dequeue();

    if (currentCost > dist[row][col]) continue;
    if (row === numRows - 1 && col === numCols - 1) return currentCost;

    for (let d = 0; d < 4; d++) {
      const newRow = row + directions[d];
      const newCol = col + directions[d + 1];

      if (
        newRow >= 0 && newRow < numRows &&
        newCol >= 0 && newCol < numCols
      ) {
        const waitTime = Math.max(moveTime[newRow][newCol], currentCost);
        const moveCost = (row + col) % 2 + 1;
        const totalTime = waitTime + moveCost;

        if (totalTime < dist[newRow][newCol]) {
          dist[newRow][newCol] = totalTime;
          pq.enqueue([totalTime, newRow, newCol]);
        }
      }
    }
  }

  return -1;
}
