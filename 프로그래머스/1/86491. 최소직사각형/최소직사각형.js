function solution(sizes) {
  let row = 0,
    column = 0;
  for (let i = 0; i < sizes.length; i++) {
    let max = Math.max(...sizes[i]);
    let min = Math.min(...sizes[i]);
    if (max > row) row = max;
    if (min > column) column = min;
  }
  return row * column;
}
