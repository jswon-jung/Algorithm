function solution(answers) {
  const table = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const score = [0, 0, 0];
  for (let i = 0; i < answers.length; i++) {
    for (let j = 0; j < table.length; j++) {
      const answer = table[j][i % table[j].length];
      if (answers[i] === answer) score[j]++;
    }
  }
  const max = Math.max(...score);
  const result = [];
  score.forEach((el, i) => {
    if (el === max) result.push(i + 1);
  });

  if (result.length > 1) {
    return result.sort((a, b) => {
      return a - b;
    });
  } else return result;
}




