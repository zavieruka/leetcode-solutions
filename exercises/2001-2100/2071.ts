function canAssign(
  mid: number,
  workers: number[],
  tasks: number[],
  pills: number,
  strength: number
): boolean {
  const usableWorkers = workers.slice(workers.length - mid);
  for (let i = mid - 1; i >= 0; i--) {
    const task = tasks[i];
    if (usableWorkers[usableWorkers.length - 1] >= task) {
      usableWorkers.pop();
    } else {
      if (pills <= 0) return false;
      const idx = lowerBound(usableWorkers, task - strength);
      if (idx === usableWorkers.length) return false;
      pills--;
      usableWorkers.splice(idx, 1);
    }
  }
  return true;
}

function lowerBound(arr: number[], target: number): number {
  let lo = 0,
    hi = arr.length;
  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (arr[mid] < target) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  return lo;
}

function maxTaskAssign(
  tasks: number[],
  workers: number[],
  pills: number,
  strength: number
): number {
  tasks.sort((a, b) => a - b);
  workers.sort((a, b) => a - b);

  let low = 0,
    high = Math.min(tasks.length, workers.length),
    assigned = 0;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (canAssign(mid, workers, tasks, pills, strength)) {
      assigned = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return assigned;
}