function solution(fees, records) {
  const map = new Map();
  let cars = [];
  records.forEach((el) => {
    let [time, car, _] = el.split(" ");
    car = Number(car);
    let [hour, min] = time.split(":");
    time = Number(hour) * 60 + Number(min);
    if (!map.has(car)) {
      map.set(car, [time]);
      cars.push(car);
    } else map.get(car).push(time);
  });
  cars = cars.sort((a, b) => a - b);
  for (let [key, val] of map) {
    let sum = 0;
    if (val.length % 2 === 1) {
      map.get(key).push(1439);
    }
    for (let i = 0; i < val.length; i += 2) {
      sum += val[i + 1] - val[i];
    }
    if (sum <= fees[0]) map.set(key, fees[1]);
    else map.set(key, Math.ceil((sum - fees[0]) / fees[2]) * fees[3] + fees[1]);
  }
  return cars.map((el) => map.get(el));
}
