function solution(arr1, arr2) {
  return arr1.map((el, i) => {
    return el.map((el2, l) => {
      return el2 + arr2[i][l];
    });
  });
}