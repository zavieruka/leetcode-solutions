function myPow(x: number, n: number): number {
  let res = 1;
  let isNegative = n < 0;
  n = Math.abs(n);

  while (n > 0) {
    if (n % 2 === 1) {
      res *= x;
    }
    x *= x;
    n = Math.floor(n / 2);
  }

  if (isNegative) res = 1 / res;

  return parseFloat(res.toFixed(5));
}
