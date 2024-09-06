function solution(brown, yellow) {
  let sum = brown + yellow;
  for (let i = 3; i < sum; i++) {
    if (sum % i === 0 && i >= sum / i) {
      let width = i;
      let height = sum / i;
      if ((width - 2) * (height - 2) === yellow) return [width, height];
    }
  }
}

