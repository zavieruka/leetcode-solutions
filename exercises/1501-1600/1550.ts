function threeConsecutiveOdds(arr: number[]): boolean {
  let longest = 0;
  let streak = 0;

  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 === 0 ? (streak = 0) : (streak += 1);
    longest = Math.max(streak, longest);
  }

  return longest >= 3;
}
