function solution(s){
  let str = s.split("")
  let flag = [];
  for(let i=0; i<str.length; i++){
    if(flag[flag.length-1] === str[i]) flag.pop();
    else flag.push(str[i]);
  }
  return flag.length ? 0 : 1
}

