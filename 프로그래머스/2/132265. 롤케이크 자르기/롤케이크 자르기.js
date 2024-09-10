function solution(topping) {
  let map = new Map();
  let set = new Set();
  let result = 0;
  topping.forEach((el) => {
    map.has(el) ? map.set(el, map.get(el) + 1) : map.set(el, 1);
  });
  for (let i = 0; i < topping.length; i++) {
    let count = map.get(topping[i]) - 1;
    set.add(topping[i]);
    count === 0 ? map.delete(topping[i]) : map.set(topping[i], count);
    if (set.size === map.size) result++;
  }
  return result;
}

