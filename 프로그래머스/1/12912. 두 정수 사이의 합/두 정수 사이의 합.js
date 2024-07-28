function solution(a, b) {
  let result = 0;
  const max = Math.max(a, b);
  const min = Math.min(a, b);
  if (max === min) return max;
  for (let i = min; i <= max; i++) {
    result += i;
  }
  return result;
}

