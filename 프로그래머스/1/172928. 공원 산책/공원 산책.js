function solution(park, routes) {
  const height = park.length - 1;
  const width = park[0].length - 1;
  let current = [];
  let flag = false;
  const obstacle = new Map();
  park.forEach((location, i) => {
    location.split("").forEach((el, j) => {
      if (el === "S") current = [i, j];
      else if (el === "X") {
        if (obstacle.has(i)) obstacle.get(i).push(j);
        else obstacle.set(i, [j]);
      }
    });
  });
  for (let i = 0; i < routes.length; i++) {
    let [dir, dis] = routes[i].split(" ");
    dis = Number(dis);
    let [curX, curY] = current;
    if (dir === "E") {
      if (curY + dis > width) continue;
      for (let j = curY; j <= curY + dis; j++) {
        if (obstacle.has(curX) && obstacle.get(curX).includes(j)) {
          flag = true;
          continue;
        }
      }
      flag === true ? curY : (curY += dis);
      flag = false;
      console.log(curX, curY);
    } else if (dir === "W") {
      if (curY - dis < 0) continue;
      for (let j = curY - dis; j <= curY; j++) {
        if (obstacle.has(curX) && obstacle.get(curX).includes(j)) {
          flag = true;
          continue;
        }
      }
      flag === true ? curY : (curY -= dis);
      flag = false;
    } else if (dir === "S") {
      if (curX + dis > height) continue;
      for (let j = curX; j <= curX + dis; j++) {
        if (obstacle.has(j) && obstacle.get(j).includes(curY)) {
          flag = true;
          continue;
        }
      }
      flag === true ? curX : (curX += dis);
      flag = false;
    } else {
      if (curX - dis < 0) continue;
      for (let j = curX - dis; j <= curX; j++) {
        if (obstacle.has(j) && obstacle.get(j).includes(curY)) {
          flag = true;
          continue;
        }
      }
      flag === true ? curX : (curX -= dis);
      flag = false;
    }
    current = [curX, curY];
  }
  return current;
}
