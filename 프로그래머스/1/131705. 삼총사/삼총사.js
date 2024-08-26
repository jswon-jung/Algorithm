function solution(number) {
  let tripple = [];
  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      for (let k = j + 1; k < number.length; k++) {
        tripple.push([number[i], number[j], number[k]]);
      }
    }
  }
  return tripple.reduce((acc, cur) => {
    if (cur.reduce((acc2, cur2) => acc2 + cur2, 0) === 0) acc++;
    return acc;
  }, 0);
}
