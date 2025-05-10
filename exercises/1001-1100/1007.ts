
function tryToMatch(number: number, first: number[], second: number[]) {
  let count = 0
  for(let i = 0; i < first.length; i ++){
    if(first[i] === number) continue
    else if (second[i] === number) count++
    else return Number.MAX_SAFE_INTEGER
  }

  return count
}


function minDominoRotations(tops: number[], bottoms: number[]): number {
  let swaps = Number.MAX_SAFE_INTEGER;

  for (let number = 1; number <= 6; number++) {
    let countTop = tryToMatch(number, tops, bottoms)
    let countBottom = Number.MAX_SAFE_INTEGER

    if(countTop !== Number.MAX_SAFE_INTEGER){
      countBottom = tryToMatch(number,bottoms, tops)
    }

    swaps = Math.min(swaps, Math.min(countTop,countBottom))
  }

  return swaps == Number.MAX_SAFE_INTEGER ? - 1 : swaps 
}
