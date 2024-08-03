function solution(n, m, section) {
  let result = 0;
  const wall = new Array(n).fill(1);
  section.forEach((el) => (wall[el - 1] = 0));
  wall.forEach((el, l) => {
    if (el === 0) {
      for (let i = 0; i < m; i++) {
        wall[l] = 1;
        l++;
      }
      result++;
    }
  });
  return result;
}
