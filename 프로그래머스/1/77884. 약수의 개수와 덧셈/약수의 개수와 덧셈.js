function solution(left, right) {
  let result = 0,
    sum = 0;
  for (let i = left; i <= right; i++) {
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) j === i / j ? sum++ : (sum += 2);
    }
    sum % 2 === 0 ? (result += i) : (result -= i);
    sum = 0;
  }
  return result;
}
