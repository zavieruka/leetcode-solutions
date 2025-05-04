function threeSumClosest(nums: number[], target: number): number {
  nums = nums.sort((a, b) => a - b);
  let minDiff = Number.MAX_SAFE_INTEGER;
  let res = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < nums.length; i++) {
    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r];

      if (sum === target) {
        return sum;
      } else if (sum > target) {
        r--;
      } else {
        l++;
      }

      let targetDiff = Math.abs(sum - target);
      if (targetDiff < minDiff) {
        res = sum;
        minDiff = targetDiff;
      }
    }
  }

  return res;
}
