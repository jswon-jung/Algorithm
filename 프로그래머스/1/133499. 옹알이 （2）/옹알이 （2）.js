function solution(babbling) {
  const word = ["aya", "ye", "woo", "ma"];
  let result = 0;
  for (let i = 0; i < babbling.length; i++) {
    let check = "",
      flag = "";
    for (let j = 0; j < babbling[i].length; j++) {
      check += babbling[i][j];
      if (word.includes(check)) {
        if (check === flag) break;
        else {
          if (j === babbling[i].length - 1) result++;
          flag = check;
          check = "";
        }
      }
      if (check.length === 3) break;
    }
  }
  return result;
}