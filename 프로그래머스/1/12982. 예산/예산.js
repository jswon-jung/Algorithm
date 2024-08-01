function solution(d, budget) {
  return d
    .sort((a, b) => a - b)
    .filter((el) => {
      budget -= el;
      return budget >= 0;
    }).length;
}
