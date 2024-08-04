function solution(players, callings) {
  const map = new Map();
  players.forEach((el, i) => map.set(el, i));
  callings.forEach((el) => {
    let current = map.get(el);
    let front = players[current - 1];

    [players[current], players[current - 1]] = [
      players[current - 1],
      players[current],
    ];

    map.set(el, map.get(el) - 1);
    map.set(front, map.get(el) + 1);
  });
  return players;
}