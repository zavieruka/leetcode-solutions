function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const map = new Map<string, number>();

  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (const char of t) {
    if (!map.has(char)) return false;
    map.set(char, map.get(char)! - 1);
  }

  for (const count of Array.from(map.values())) {
    if (count !== 0) return false;
  }

  return true;
}
