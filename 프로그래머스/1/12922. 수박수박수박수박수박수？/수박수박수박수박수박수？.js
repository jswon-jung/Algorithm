function solution(n) {
  let result = '';
  if(n%2 === 0){
    for(let i=0; i<(n/2); i++){
      result += '수박'
    }
    return result;
  }else{
    for(let i=0; i<(Math.floor(n/2)); i++){
      result += "수박"
    }
    return result+"수"
  }
}