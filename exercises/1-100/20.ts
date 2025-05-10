function isValid(s: string): boolean {
  const stack: string[] = [];
  const closingToOpen: { [key: string]: string } = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    if (c in closingToOpen) {
      if (stack.length > 0 && stack[stack.length - 1] === closingToOpen[c]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(c);
    }
  }

  return stack.length === 0;
}
