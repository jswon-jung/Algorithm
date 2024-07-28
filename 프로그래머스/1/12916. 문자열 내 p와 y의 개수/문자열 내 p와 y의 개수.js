function solution(s){
  let str = s.toLowerCase();
  let x = 0, y = 0;
  str = str.split("").filter((el) => {
    el === 'p' ? x++
               : el === 'y' ? y++
                            : el
  })  
  return x === y;
}
