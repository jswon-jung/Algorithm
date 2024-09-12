function solution(dirs) {
  const move = {
    "U": [0, 1],
    "D": [0, -1],
    "R": [1, 0],
    "L": [-1, 0]
  }
  let now = [0,0];
  let set = new Set();
  for(let i=0; i<dirs.length; i++){
    let [x, y] = move[dirs[i]]
    xNow = now[0]+x;
    yNow = now[1]+y;
    if(xNow <= 5 && xNow >= -5 && yNow <= 5 && yNow >= -5){
      set.add(`${now[0]}${now[1]}${xNow}${yNow}`);
      set.add(`${xNow}${yNow}${now[0]}${now[1]}`);
      now = [xNow, yNow];
    }
  }
  return set.size/2;
}

