function findNumbers(nums: number[]): number {
  return nums.filter(num => num.toString().length % 2 === 0).length
};