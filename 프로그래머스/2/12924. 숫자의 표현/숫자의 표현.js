// 풀이 1
function solution(n) {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0 && i % 2 === 1) result++;
  }
  return result;
}

// 풀이 2
function solution(n) {
  let result = 0;
  for(let i=1; i<=n; i++){
    let sum = i;
    if(sum === n){
      result++;
      continue;
    }
    for(let j=i+1; j<=n; j++){
      sum += j;
      if(sum === n){
        result++;
        break;
      }
      if(sum > n) break;
    }
  }
  return result;
}
