function solution(num) {
  let result = 0;
  if (num === 1) return 0;
  while (num !== 1) {
    num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);

    result++;
    if (result === 500) {
      result = -1;
      break;
    }
  }
  return result;
}
