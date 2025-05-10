function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  if((nums1.length + nums2.length) % 2 === 0) {
    const newArr = [...nums1, ...nums2].sort((a, b) => a - b);
    const mid = newArr.length / 2;
    return (newArr[mid] + newArr[mid - 1]) / 2;  
  } else {
    const newArr = [...nums1, ...nums2].sort((a, b) => a - b);
    const mid = Math.floor(newArr.length / 2);
    return newArr[mid];
  }

};