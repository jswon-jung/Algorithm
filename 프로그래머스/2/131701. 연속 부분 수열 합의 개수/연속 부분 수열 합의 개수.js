function solution(elements) {
  const result = [];
  let sum = 0;
  for (let i = 1; i <= elements.length; i++) {
    for (let j = 0; j < elements.length; j++) {
      for (let k = 0; k < i; k++) {
        if (j + k > elements.length - 1) {
          sum += elements[j + k - elements.length];
        } else sum += elements[j + k];
      }
      result.push(sum);
      sum = 0;
    }
  }
  return new Set(result).size;
}
