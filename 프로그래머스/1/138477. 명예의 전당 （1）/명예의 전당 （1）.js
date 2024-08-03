// 풀이 1.
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

// 풀이 2.
function solution(k, score) {
  const result = [];
  return score.reduce((acc, cur) => {
    if (result.length < k) {
      result.push(cur);
      result.sort((a, b) => a - b);
    } else {
      result.push(cur);
      result.sort((a, b) => a - b);
      result.shift();
    }
    acc.push(result[0]);
    return acc;
  }, []);
}
