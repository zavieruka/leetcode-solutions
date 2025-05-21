function setZeroes(matrix: number[][]): void {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let zeroRow = false;
  let zeroCol = false;

  // Check if first row has any zero
  for (let c = 0; c < cols; c++) {
    if (matrix[0][c] === 0) {
      zeroRow = true;
    }
  }

  for (let r = 0; r < rows; r++) {
    if (matrix[r][0] === 0) {
      zeroCol = true;
    }
  }

  for (let r = 1; r < rows; r++) {
    for (let c = 1; c < cols; c++) {
      if (matrix[r][c] === 0) {
        matrix[r][0] = 0;
        matrix[0][c] = 0;
      }
    }
  }

  for (let r = 1; r < rows; r++) {
    for (let c = 1; c < cols; c++) {
      if (matrix[r][0] === 0 || matrix[0][c] === 0) {
        matrix[r][c] = 0;
      }
    }
  }

  if (zeroRow) {
    for (let c = 0; c < cols; c++) {
      matrix[0][c] = 0;
    }
  }

  // Zero out first column if needed
  if (zeroCol) {
    for (let r = 0; r < rows; r++) {
      matrix[r][0] = 0;
    }
  }
}
