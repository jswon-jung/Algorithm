function solution(keymap, targets) {
  let map = new Map();
  keymap.forEach((el) => {
    el.split("").forEach((letter, i) => {
      if (!map.has(letter)) map.set(letter, i + 1);
      else {
        if (map.get(letter) > i + 1) map.set(letter, i + 1);
      }
    });
  });
  return targets.map((el) => {
    let answer = 0;
    el.split("").forEach((letter) => {
      if (map.has(letter) && answer !== -1) answer += map.get(letter);
      else answer = -1;
    });
    return answer;
  });
}

