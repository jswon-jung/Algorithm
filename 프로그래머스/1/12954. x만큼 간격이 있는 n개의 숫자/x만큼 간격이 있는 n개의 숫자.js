function solution(x, n) {
  return new Array(n).fill(x).map((el, i) => el*(i+1))
}