function solution(survey, choices) {
  const types = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  for(let i=0; i<survey.length; i++){
    let [front, back] = survey[i].split("");
    if(choices[i] < 4) types[front] += Math.abs(choices[i]-4);
    else types[back] += Math.abs(choices[i]-4);
  }
  const type = Object.keys(types);
  let result = "";
  for(let i=0; i<type.length; i+=2){
    if(types[type[i]] >= types[type[i+1]]) result += type[i];
    else result += type[i+1];
  }
  return result;
}
