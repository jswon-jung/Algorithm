function solution(today, terms, privacies) {
  const result = [];
  let todaySum = 0;
  today.split(".").forEach((el, i) => {
    i === 0
      ? (todaySum += Number(el) * 12 * 28)
      : i === 1
      ? (todaySum += Number(el) * 28)
      : (todaySum += Number(el));
  });

  const map = new Map();
  terms.forEach((el) => {
    let [term, num] = el.split(" ");
    map.set(term, Number(num) * 28);
  });

  privacies.forEach((el, idx) => {
    let [date, term] = el.split(" ");
    let sum = -1;
    date.split(".").forEach((el2, i) => {
      i === 0
        ? (sum += Number(el2) * 12 * 28)
        : i === 1
        ? (sum += Number(el2) * 28)
        : (sum += Number(el2));
    });
    sum += map.get(term);
    if (sum < todaySum) result.push(idx + 1);
  });
  return result;
}
