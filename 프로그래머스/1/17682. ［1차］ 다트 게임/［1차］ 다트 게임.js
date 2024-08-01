function solution(dartResult) {
  const toArray = dartResult.split("");
  const region = {
    S: 1,
    D: 2,
    T: 3,
  };
  let result = [];
  let point = 0;

  for (let i = 0; i < toArray.length; i++) {
    if (!isNaN(Number(toArray[i]))) {
      if (Number(toArray[i - 1]) === 1) point = 10;
      else point = Number(toArray[i]);
    } else if (toArray[i] in region) {
      point = Math.pow(point, region[toArray[i]]);
      result.push(point);
    } else result.push(toArray[i]);
  }
  result.forEach((el, i) => {
    if (el === "#") {
      result[i - 1] = -result[i - 1];
      result.splice(i, 1);
    }
  });
  result.forEach((el, i) => {
    if (el === "*") {
      result[i - 1] = result[i - 1] * 2;
      result[i - 2] = result[i - 2] * 2;
      result.splice(i, 1);
    }
  });
  return result.reduce((acc, cur) => {
    return acc + cur;
    return acc;
  }, 0);
}