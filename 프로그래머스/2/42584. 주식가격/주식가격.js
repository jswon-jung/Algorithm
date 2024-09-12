function solution(prices) {
  const result = [];
  let sum = 0;
  for (let i = 0; i < prices.length; i++) {
    if (i === prices.length - 1) {
      result.push(0);
      break;
    }
    for (let j = i + 1; j < prices.length; j++) {
      sum++;
      if (prices[i] > prices[j]) break;
    }
    result.push(sum);
    sum = 0;
  }
  return result;
}
