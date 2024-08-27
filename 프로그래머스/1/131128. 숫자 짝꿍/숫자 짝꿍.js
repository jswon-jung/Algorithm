function solution(X, Y) {
  let answer = "";
  X = X.split("");
  Y = Y.split("");
  for (let i = 0; i < 10; i++) {
    let xSum = X.reduce((acc, cur) => {
      if (Number(cur) === i) acc++;
      return acc;
    }, 0);
    let ySum = Y.reduce((acc, cur) => {
      if (Number(cur) === i) acc++;
      return acc;
    }, 0);
    let min = Math.min(xSum, ySum);
    if (min > 0) answer += String(i).repeat(min);
  }
  if (!answer.length) return "-1";
  if (Number(answer) === 0) return "0";
  return answer
    .split("")
    .sort((a, b) => b - a)
    .join("");
}
