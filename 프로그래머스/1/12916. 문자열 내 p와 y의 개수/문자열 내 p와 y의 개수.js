function solution(s){
  let x = 0, y = 0;
  s = s.split("").filter((el) => {
    if(el === 'p' || el === 'P') x++;
    else if(el === 'y' || el === 'Y') y++;
  })  
  return x === y;
}