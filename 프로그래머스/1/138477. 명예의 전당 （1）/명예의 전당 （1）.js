function solution(k, score) {
  let top = [];
  return score.map((el) => {
    if (top.length < k) {
      top.push(el);
      return Math.min(...top);
    } else {
      if (el > Math.min(...top)) {
        top[top.indexOf(Math.min(...top))] = el;
        return Math.min(...top);
      } else return Math.min(...top);
    }
  });
}
