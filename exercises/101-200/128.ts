function longestConsecutive(nums: number[]): number {
  const numSet = new Set(nums);
  let longest = 0;
  let lenght = 0;

  for (const num of Array.from(numSet)) {
    if (!numSet.has(num - 1)) {
      lenght = 0;

      while (numSet.has(num + lenght)) {
        lenght += 1;
      }
      longest = Math.max(lenght, longest);
    }
  }

  return longest;
}
