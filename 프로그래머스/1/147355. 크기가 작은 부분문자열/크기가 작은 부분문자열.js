function solution(t, p) {
  const answer = [];
  for (let i = 0; i < t.length - (p.length - 1); i++) {
    answer.push(t.slice(i, i + p.length));
  }
  return answer.reduce((acc, cur) => {
    return Number(cur) <= Number(p) ? ++acc : acc;
  }, 0);
}