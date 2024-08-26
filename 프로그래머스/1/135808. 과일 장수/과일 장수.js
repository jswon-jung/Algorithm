function solution(k, m, score) {
  score.sort((a, b) => b - a);
  let result = 0;
  let max = Math.floor(score.length / m);
  let box = [];
  let flag = 0;
  for (let i = 0; i < score.length; i++) {
    box.push(score[i]);
    if (box.length === m) {
      result += Math.min(...box) * m;
      box = [];
      flag++;
      if (flag === max) break;
    }
  }
  return result;
}
