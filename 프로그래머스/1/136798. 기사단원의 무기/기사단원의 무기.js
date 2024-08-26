function solution(number, limit, power) {
  const powers = [];
  for (let i = 1; i <= number; i++) {
    let flag = 1;
    let num = [];
    while (flag <= Math.sqrt(i)) {
      if (i % flag === 0) {
        if (!num.includes(flag)) num.push(flag);
        if (!num.includes(i / flag)) num.push(i / flag);
      }
      flag++;
    }
    powers.push(num.length);
  }
  return powers.reduce(
    (acc, cur) => (cur <= limit ? acc + cur : acc + power),
    0
  );
}
