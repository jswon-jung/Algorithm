function solution(arr, divisor) {
  const filter = arr.filter((el) => {
    if (el % divisor === 0) return el;
  });
  return filter.length !== 0
    ? filter.sort((a, b) => {
        return a - b;
      })
    : [-1];
}

