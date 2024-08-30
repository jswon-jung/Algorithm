function solution(lottos, win_nums) {
  let result = [0, 0];
  let flag = 0;
  lottos.forEach((num, i) => {
    if (win_nums.includes(num)) {
      win_nums[win_nums.indexOf(num)] = -1;
      result[1]++;
    }
    if (num === 0) flag++;
  });
  result[0] = result[1];
  for (let i = 0; i < win_nums.length; i++) {
    if (flag > 0 && win_nums[i] > -1) {
      result[0]++;
      flag--;
    }
    if (flag === 0) break;
  }
  return result.map((num) => (Math.abs(num - 7) >= 6 ? 6 : Math.abs(num - 7)));
}
