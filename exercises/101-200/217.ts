function containsDuplicate(nums: number[]): boolean {
  return Array.from(new Set(nums)).length !== nums.length;
};