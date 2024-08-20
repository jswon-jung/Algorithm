function solution(friends, gifts) {
  const giftInfo = Array.from({ length: friends.length }, () =>
    Array(friends.length).fill(0)
  );
  const giftNum = new Map();
  const result = new Array(friends.length).fill(0);

  friends.forEach((friend) => giftNum.set(friend, 0));

  for (const gift of gifts) {
    const [from, to] = gift.split(" ");
    giftInfo[friends.indexOf(from)][friends.indexOf(to)]++;
    giftNum.set(from, giftNum.get(from) + 1);
    giftNum.set(to, giftNum.get(to) - 1);
  }
  for (let i = 0; i < friends.length; i++) {
    for (let j = i + 1; j < friends.length; j++) {
      if (giftInfo[i][j] > giftInfo[j][i]) result[i]++;
      else if (giftInfo[i][j] < giftInfo[j][i]) result[j]++;
      else {
        if (giftNum.get(friends[i]) > giftNum.get(friends[j])) result[i]++;
        else if (giftNum.get(friends[i]) < giftNum.get(friends[j])) result[j]++;
      }
    }
  }
  return Math.max(...result);
}
