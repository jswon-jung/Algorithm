// Number.isInteger() -> 정수인지 boolean값 리턴
// Math.sqrt() -> 제곱하기
function solution(n) {  
    let sqrt = Math.sqrt(n);
    if(Number.isInteger(sqrt)){
        // 정수인 경우 : 제곱근이 있는 경우
        // return (sqrt +1)*(sqrt+1)
        // return (sqrt + 1)**2
        return Math.pow(sqrt+1,2)
    }else{
        // 정수가 아닌 경우 : 제곱근이 없는 경우
        return -1
    }
}