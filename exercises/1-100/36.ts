function isValidSudoku(board: string[][]): boolean {
  const rows = board;

  const cols: string[][] = Array.from({ length: 9 }, (_, colIdx) =>
    Array.from({ length: 9 }, (_, rowIdx) => rows[rowIdx][colIdx])
  );

  const boxes: string[][] = [];
  for (let boxRow = 0; boxRow < 9; boxRow += 3) {
    for (let boxCol = 0; boxCol < 9; boxCol += 3) {
      const box: string[] = [];
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
          box.push(rows[boxRow + row][boxCol + col]);
        }
      }
      boxes.push(box);
    }
  }

  const isUnitValid = (unit: string[]): boolean => {
    const filtered = unit.filter(val => val !== ".");
    return new Set(filtered).size === filtered.length;
  };

  for (let i = 0; i < 9; i++) {
    if (!isUnitValid(rows[i]) || !isUnitValid(cols[i]) || !isUnitValid(boxes[i])) {
      return false;
    }
  }

  return true;
}
