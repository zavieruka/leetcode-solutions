function maxArea(height: number[]): number {
  let l = 0;
  let r = height.length - 1;

  let maxWater = 0;

  for (let i = 0; i < height.length; i++) {
    const waterUnits = Math.min(height[l], height[r]) * (r - l);

    if (waterUnits >= maxWater) {
      maxWater = waterUnits;
    }

    height[l] > height[r] ? r-- : l++;

    if (r === l || l > r) {
      break;
    }
  }

  return maxWater;
}
