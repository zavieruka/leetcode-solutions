function topKFrequent(nums: number[], k: number): number[] {
  const frequencyMap = new Map<number, number>();
  for (const num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }
  const sortedEntries = Array.from(frequencyMap.entries()).sort(
    (a, b) => b[1] - a[1]
  );
  const result: number[] = [];
  for (let i = 0; i < k && i < sortedEntries.length; i++) {
    result.push(sortedEntries[i][0]);
  }
  return result;
}
