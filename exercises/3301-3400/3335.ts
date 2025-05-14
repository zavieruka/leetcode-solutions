const MOD = 1e9 + 7;

function addMod(a: number, b: number): number{
  a += b;
  if (a >= MOD) {
    a -= MOD;
  }
  return a;
};

function lengthAfterTransformations (s: string, t: number): number {
  const freq: number[] = new Array(26).fill(0);
  for (const c of s) {
    freq[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  for (let _ = 0; _ < t; _++) {
    const nxt: number[] = new Array(26).fill(0);
    for (let j = 0; j < 26; j++) {
      if (j < 25) {
        nxt[j + 1] = freq[j];
      } else {
        nxt[0] = freq[25];
        nxt[1] = addMod(nxt[1], freq[25]);
      }
    }
    for (let j = 0; j < 26; j++) {
      freq[j] = nxt[j];
    }
  }

  return freq.reduce((total, x) => addMod(total, x), 0);
};
