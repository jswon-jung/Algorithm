function solution(phone_number) {
  return phone_number.split("").map((el, i) => {
    return i <= phone_number.length-5 
             ? el = "*"
             : el
  }).join("")
}