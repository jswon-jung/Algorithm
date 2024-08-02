// 풀이 1.
function solution(arr) {
  if (arr.length === 1) return [-1];
  else {
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    return arr;
  }
}

// 풀이 2.
function solution(arr) {
  const result = arr.filter((el) => {
    return el !== Math.min(...arr);
  });
  return arr.length !== 1 ? result : [-1];
}
