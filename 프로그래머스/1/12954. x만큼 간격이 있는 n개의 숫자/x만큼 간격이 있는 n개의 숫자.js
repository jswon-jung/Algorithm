// 풀이 1.
function solution(x, n) {
  return new Array(n).fill(x).map((el, i) => el*(i+1))
}

// 풀이 2.
function solution(x, n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    result.push(x * i);
  }
  return result;
}
