type Node = {
  r: number;
  c: number;
  time: number;
};

class MinHeap {
  heap: Node[] = [];

  private compare(a: Node, b: Node): boolean {
      return a.time < b.time; 
  }

  push(node: Node) {
      this.heap.push(node);
      this.heapifyUp();
  }

  pop(): Node | undefined {
      if (this.heap.length === 0) return undefined;
      const root = this.heap[0];
      const last = this.heap.pop();
      if (this.heap.length > 0 && last !== undefined) {
          this.heap[0] = last;
          this.heapifyDown();
      }
      return root;
  }

  isEmpty(): boolean {
      return this.heap.length === 0;
  }

  private heapifyUp() {
      let idx = this.heap.length - 1;
      while (idx > 0) {
          const parentIdx = Math.floor((idx - 1) / 2);
          if (this.compare(this.heap[idx], this.heap[parentIdx])) {
              [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]];
              idx = parentIdx;
          } else {
              break;
          }
      }
  }

  private heapifyDown() {
      let idx = 0;
      const length = this.heap.length;

      while (true) {
          let left = 2 * idx + 1;
          let right = 2 * idx + 2;
          let smallest = idx;

          if (left < length && this.compare(this.heap[left], this.heap[smallest])) {
              smallest = left;
          }

          if (right < length && this.compare(this.heap[right], this.heap[smallest])) {
              smallest = right;
          }

          if (smallest !== idx) {
              [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
              idx = smallest;
          } else {
              break;
          }
      }
  }
}

function minTimeToReach(moveTime: number[][]): number {
  const m = moveTime.length;
  const n = moveTime[0].length;

  const directions = [-1, 0, 1, 0, -1]; 

  const isValid = (r: number, c: number): boolean =>
      r >= 0 && r < m && c >= 0 && c < n;

  const visited: boolean[][] = Array.from({ length: m }, () => Array(n).fill(false));
  visited[0][0] = true;

  const heap = new MinHeap();
  heap.push({ r: 0, c: 0, time: 0 });

  while (!heap.isEmpty()) {
      const current = heap.pop();
      if (!current) continue;

      const { r, c, time } = current;

      if (r === m - 1 && c === n - 1) {
          return time; 
      }

      for (let i = 0; i < 4; i++) {
          const newR = r + directions[i];
          const newC = c + directions[i + 1];

          if (isValid(newR, newC) && !visited[newR][newC]) {
              const newTime = 1 + Math.max(time, moveTime[newR][newC]);
              heap.push({ r: newR, c: newC, time: newTime });
              visited[newR][newC] = true;
          }
      }
  }

  return -1; 
}


export {}