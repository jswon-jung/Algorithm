function solution(a, b) {
  const days = new Date(`2016 ${a} ${b}`);
  return String(days).slice(0, 3).toUpperCase();
}
