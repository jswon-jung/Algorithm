function solution(bandage, health, attacks) {
  let max = health;
  const attTime = [];
  const damage = [];
  attacks.forEach((el) => {
    attTime.push(el[0]);
    damage.push(el[1]);
  });
  let stack = 0;
  for (let i = 1; i <= attacks[attacks.length - 1][0]; i++) {
    if (attTime.includes(i)) {
      health -= damage[attTime.indexOf(i)];
      if (health <= 0) return -1;
      stack = 0;
    } else {
      health += bandage[1];
      if (health > max) health = max;
      stack++;
      if (stack === bandage[0]) {
        health += bandage[2];
        if (health > max) health = max;
        stack = 0;
      }
    }
  }
  return health;
}

