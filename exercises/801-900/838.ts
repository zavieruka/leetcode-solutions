function pushDominoes(dominoes: string): string {
  const dom = dominoes.split('')
  const queue: Array<[number, 'L'|'R']> = []
  let head = 0

  for (let i = 0; i < dom.length; i++) {
    if (dom[i] !== '.') {
      queue.push([i, dom[i] as 'L'|'R'])
    }
  }

  while (head < queue.length) {
    const [i, dir] = queue[head++]

    if (dir === 'L') {
      if (i > 0 && dom[i-1] === '.') {
        dom[i-1] = 'L'
        queue.push([i-1, 'L'])
      }
    } else { 
      if (i+1 < dom.length && dom[i+1] === '.') {
        if (i+2 < dom.length && dom[i+2] === 'L') {
          head++             
        } else {
          dom[i+1] = 'R'
          queue.push([i+1, 'R'])
        }
      }
    }
  }

  return dom.join('')
}