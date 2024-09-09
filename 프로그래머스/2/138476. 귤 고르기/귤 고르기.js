function solution(k, tangerine) {
  let result = 0;
  const map = new Map();
  tangerine.forEach((el) => {
    if (map.has(el)) map.set(el, map.get(el) + 1);
    else map.set(el, 1);
  });
  let arr = [];
  for (let [size, num] of map) {
    arr.push(num);
  }
  arr = arr.sort((a, b) => b - a);
  for (let i = 0; i < arr.length; i++) {
    result++;
    if (k > arr[i]) k -= arr[i];
    else break;
  }
  return result;
}


