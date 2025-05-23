function twoSum(numbers: number[], target: number): number[] {
  let l = 0;
  let r = numbers.length - 1;

  while (l < r) {
    const sum = numbers[l] + numbers[r]

    if (sum === target) return [l + 1, r + 1];
    sum > target ? r-- : l ++
  }

  return [];
}
