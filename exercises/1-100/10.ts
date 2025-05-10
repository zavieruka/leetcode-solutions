function isMatch(s: string, p: string): boolean {
  const cache: Record<string, boolean> = {};

  function dfs(i: number, j: number): boolean {
    const key = `${i},${j}`;
    if (key in cache) return cache[key];

    if (i >= s.length && j >= p.length) {
      return (cache[key] = true);
    }
    if (j >= p.length) {
      return (cache[key] = false);
    }

    const match =
      i < s.length && (p[j] === "." || s[i] === p[j]);

    if (j + 1 < p.length && p[j + 1] === "*") {
      const ans =
        dfs(i, j + 2) ||
        (match && dfs(i + 1, j));
      return (cache[key] = ans);
    }

    if (match) {
      const ans = dfs(i + 1, j + 1);
      return (cache[key] = ans);
    }

    return (cache[key] = false);
  }

  return dfs(0, 0);
}
