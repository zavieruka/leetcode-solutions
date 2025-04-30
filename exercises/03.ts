function lengthOfLongestSubstring(s: string): number {
    const charSet = new Set<string>()
    var leftPointer = 0


    var res = 0 
    for(let rightPointer = 0; rightPointer < s.length; rightPointer++) {
      while(charSet.has(s[rightPointer])) {
        charSet.delete(s[leftPointer])
        leftPointer++
      }

      charSet.add(s[rightPointer])
      res = Math.max(res, rightPointer - leftPointer + 1)
    }

    return res
};