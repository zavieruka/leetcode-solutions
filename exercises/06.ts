function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;

  let res = "";
  for(let r = 0; r < numRows; r++) {
    const increment = (numRows - 1) * 2;
    for(let i = r; i < s.length; i += increment) {
      res += s[i]
      if(r > 0 && r < numRows - 1 && i + increment - 2 * r < s.length) {
        res += s[i + increment - 2 * r]
      }
    }
  }

  return res
};