function fourSum(nums: number[], target: number): number[][] {
  nums = nums.sort((a, b) => a - b);
  const quad: number[] = [];
  let res: number[][] = [];

  function nSum(n: number, start: number, target: number) {
    if (n !== 2) {
      for (let i = start; i < nums.length - n + 1; i++) {
        if (i > start && nums[i] === nums[i - 1]) continue;
        quad.push(nums[i]);
        nSum(n - 1, i + 1, target - nums[i]);
        quad.pop();
      }
      return;
    }

    let l = start, r = nums.length - 1;
    while (l < r) {
      const sum = nums[l] + nums[r];
      if (sum < target) {
        l++;
      } else if (sum > target) {
        r--;
      } else {
        res.push([...quad, nums[l], nums[r]]);
        l++;
        while (l < r && nums[l] === nums[l - 1]) {
          l++;
        }
      }
    }
  }

  nSum(4, 0, target);
  return res;
}
