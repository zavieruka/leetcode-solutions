function findEvenNumbers(digits: number[]): number[] {
  const result: number[] = [];
  const freq = new Array(10).fill(0);

  for (const d of digits) {
    freq[d]++;
  }

  for (let i = 1; i <= 9; i++) { 
    if (freq[i] === 0) continue;
    freq[i]--;

    for (let j = 0; j <= 9; j++) { 
      if (freq[j] === 0) continue;
      freq[j]--;

      for (let k = 0; k <= 9; k += 2) { 
        if (freq[k] === 0) continue;
        result.push(i * 100 + j * 10 + k);
      }

      freq[j]++;
    }

    freq[i]++;
  }

  return result.sort((a, b) => a - b);
}
