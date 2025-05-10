function numTilings(N: number): number {
  const mod = 1e9 + 7;
  const v: number[] = new Array(1001).fill(0);

  v[1] = 1;
  v[2] = 2;
  v[3] = 5;

  if (N <= 3) {
    return v[N];
  }

  for (let i = 4; i <= N; i++) {
    v[i] = (2 * v[i - 1] + v[i - 3]) % mod;
  }

  return v[N];
}
