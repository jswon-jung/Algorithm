function solution(s) {
  let result = 0;
  let check = "";
  let check2 = "";
  s.split("").forEach((letter, i) => {
    if(!check.length) check += letter;
    else{
      if(check.includes(letter)) check += letter;
      else check2 += letter;
    }
    if(check.length === check2.length){
      result++;
      check = "", check2 = "";
    }
    if(i === s.length-1 && check.length) result++;
  })
  return result;
}
