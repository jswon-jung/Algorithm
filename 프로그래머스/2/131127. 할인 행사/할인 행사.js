function solution(want, number, discount) {
  let result = 0;
  let flag = true;
  for (let i = 0; i < discount.length; i++) {
    let arr = new Array(number.length).fill(0);
    for (let j = i; j < i + 10; j++) {
      if (want.includes(discount[j])) arr[want.indexOf(discount[j])] += 1;
    }
    for (k = 0; k < arr.length; k++) {
      if (number[k] - arr[k] > 0) flag = false;
    }
    if (flag === true) result++;
    else flag = true;
  }
  return result;
}

