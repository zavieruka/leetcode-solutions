function myAtoi(s: string): number {
  const INT_MAX = 2**31 - 1;
  const INT_MIN = -(2**31);

  s = s.trim();
  if (s.length === 0) return 0;

  let sign = 1;
  let i = 0;
  if (s[i] === '+' || s[i] === '-') {
    if (s[i] === '-') sign = -1;
    i++;
  }

  let result = 0;
  while (i < s.length) {
    const c = s[i];
    if (c < '0' || c > '9') break;

    const digit = c.charCodeAt(0) - '0'.charCodeAt(0);

    if (
      result > Math.floor(INT_MAX / 10) ||
      (result === Math.floor(INT_MAX / 10) && digit > INT_MAX % 10)
    ) {
      return sign === 1 ? INT_MAX : INT_MIN;
    }

    result = result * 10 + digit;
    i++;
  }

  return result * sign;
}
