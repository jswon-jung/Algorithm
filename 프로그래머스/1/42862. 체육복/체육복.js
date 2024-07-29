function solution(n, lost, reserve) {
  let nLost = lost
    .filter((el) => !reserve.includes(el))
    .sort((a, b) => {
      return a - b;
    });
  let nReserve = reserve
    .filter((el) => !lost.includes(el))
    .sort((a, b) => {
      return a - b;
    });

  let result = n - nLost.length;
  nLost.forEach((el) => {
    let left = el - 1;
    let right = el + 1;
    if (nReserve.includes(left)) {
      result++;
      nReserve.splice(nReserve.indexOf(left), 1);
      console.log(nReserve);
    } else if (nReserve.includes(right)) {
      result++;
      console.log(nReserve);
      nReserve.splice(nReserve.indexOf(right), 1);
    }
  });
  return result;
}


