function solution(s) {
  let idx = new Map();
  return s.split("").map((el, i) => {
    return !idx.has(el)
      ? (idx.set(el, i), -1)
      : i - idx.get(el) + (idx.set(el, i), 0);
  });
}
