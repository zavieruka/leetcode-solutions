function isPalindrome(s: string): boolean {
  const fs = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let l = 0;
  let r = fs.length - 1;

  while(l < r) {
    if(fs[l] !== fs[r]) {
      return false
    }
    l ++ 
    r --
  }

  return true;
}