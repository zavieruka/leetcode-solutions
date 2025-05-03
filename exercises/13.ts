function romanToInt(s: string): number {
  const symList: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let res = 0;

  for (let i = 0; i < s.length; i++) {
    if (i + 1 < s.length && symList[s[i]] < symList[s[i + 1]]) {
      res -= symList[s[i]];
    } else {
      res += symList[s[i]];
    }
  }

  return res;
}
