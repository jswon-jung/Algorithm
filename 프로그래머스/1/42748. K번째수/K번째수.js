function solution(array, commands) {
  let result = [];
  for (let i = 0; i < commands.length; i++) {
    const start = commands[i][0];
    const end = commands[i][1];
    const pick = commands[i][2] - 1;
    const cut = array.slice(start - 1, end).sort((a, b) => a - b)[pick];
    result.push(cut);
  }
  return result;
}
