function solution(s) {
  return s.length % 2 === 1
    ? s[(s.length - 1) / 2]
    : s[Math.floor((s.length - 1) / 2)] + s[Math.floor((s.length - 1) / 2) + 1];
}
