function solution(nums) {
  const count = Math.floor(nums.length / 2);
  const data = new Set(nums).size;
  if (count >= data) {
    return data;
  } else {
    return count;
  }
}
