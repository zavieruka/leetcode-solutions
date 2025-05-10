function letterCombinations(digits: string): string[] {
  const res: string[] = [];
  const digitToChar: { [key: string]: string } = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
  };

  function backtrack(i: number, curStr: string): void {
    if (curStr.length === digits.length) {
      res.push(curStr);
      return;
    }

    for (const char of digitToChar[digits[i]]) {
      backtrack(i + 1, curStr + char);
    }
  }

  if (digits) {
    backtrack(0, "");
  }

  return res;
}
