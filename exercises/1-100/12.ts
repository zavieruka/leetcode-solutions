function intToRoman(num: number): string {
  const symList: [string, number][] = [
    ["I", 1],
    ["IV", 4],
    ["V", 5],
    ["IX", 9],
    ["X", 10],
    ["XL", 40],
    ["L", 50],
    ["XC", 90],
    ["C", 100],
    ["CD", 400],
    ["D", 500],
    ["CM", 900],
    ["M", 1000],
  ];

  let res = "";

  for (let i = symList.length - 1; i >= 0; i--) {
    const [sym, val] = symList[i];
    if (Math.floor(num / val)) {
      const count = Math.floor(num / val);
      res += sym.repeat(count);
      num = num % val;
    }
  }

  return res;
}
