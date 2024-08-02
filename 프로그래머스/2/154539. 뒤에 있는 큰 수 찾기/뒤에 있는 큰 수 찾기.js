function solution(numbers) {
  const stack = [];
  const result = new Array(numbers.length).fill(-1);

  for (let i = 0; i < numbers.length; i++) {
    while (stack.length && numbers[stack.at(-1)] < numbers[i]) {
      result[stack.pop()] = numbers[i];
    }
    stack.push(i);
  }
  return result;
}






