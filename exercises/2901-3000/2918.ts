function calculate(nums: number[]): { minSum: number; zeroCount: number } {
  let minSum = 0;
  let zeroCount = 0;

  for (const ele of nums) {
    if (ele === 0) {
      zeroCount++;
      minSum++;
    } else {
      minSum += ele;
    }
  }

  return { minSum, zeroCount };
}

function minSum(nums1: number[], nums2: number[]): number {
  const { minSum: minSum1, zeroCount: zeroCount1 } = calculate(nums1);
  const { minSum: minSum2, zeroCount: zeroCount2 } = calculate(nums2);

  if (
    (minSum1 < minSum2 && zeroCount1 === 0) ||
    (minSum2 < minSum1 && zeroCount2 === 0)
  ) {
    return -1;
  }

  return Math.max(minSum1, minSum2);
}
