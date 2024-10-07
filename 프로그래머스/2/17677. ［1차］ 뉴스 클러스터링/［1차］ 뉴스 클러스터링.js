function solution(str1, str2) {
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();
  let result = [0, 0];
  const map = new Map();
  for (let i = 0; i < str1.length - 1; i++) {
    if (str1[i].charCodeAt() < 65 || str1[i].charCodeAt() > 90) continue;
    if (str1[i + 1].charCodeAt() < 65 || str1[i + 1].charCodeAt() > 90)
      continue;
    let el = str1[i] + str1[i + 1];
    map.has(el) ? map.set(el, map.get(el) + 1) : map.set(el, 1);
  }
  for (let i = 0; i < str2.length - 1; i++) {
    if (str2[i].charCodeAt() < 65 || str2[i].charCodeAt() > 90) continue;
    if (str2[i + 1].charCodeAt() < 65 || str2[i + 1].charCodeAt() > 90)
      continue;
    let el = str2[i] + str2[i + 1];
    if (map.has(el)) {
      result[0]++;
      result[1]++;
      map.set(el, map.get(el) - 1);
      if (map.get(el) === 0) map.delete(el);
    } else result[1]++;
  }
  if(result[0]+result[1] === 0) return 65536   
  for (let [word, num] of map) {
    result[1] += num;
  }
  return Math.floor((result[0] / result[1]) * 65536);
}
