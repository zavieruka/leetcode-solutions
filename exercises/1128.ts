function numEquivDominoPairs(dominoes: number[][]): number {
  const map: Map<number, number> = new Map();
  
  let res = 0;

  for (const pair of dominoes) {
    const big = Math.max(pair[0], pair[1]);
    const small = Math.min(pair[0], pair[1]);

    const key = small * 10 + big;

    res += map.get(key) ?? 0;
    map.set(key, (map.get(key) ?? 0) + 1);
  }

  return res;
}