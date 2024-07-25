function solution(s, n) {
    let answer = "";
    
    for(let i=0; i<s.length; i++){
        let idx = s[i].charCodeAt() + n;
        if( idx > 122 || idx > 90 && (idx - n) <  97){
            idx -= 26;
        }
        answer += s[i] === " " ? " " : String.fromCharCode(idx)
    }
    return answer
}