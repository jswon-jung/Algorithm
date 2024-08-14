function solution(n) {
    n = n.toString( 3 ) // 10진법 => 3진법으로 변환
        .split("") // 문자열을 배열로 변환
        .reverse() // 배열의 순서를 반전
        .join("") // 배열을 문자열로 변환
    return parseInt(n, 3)
}