function solution(n) {
    let answer = n.toString()
                    .split("")
                    .reverse()
                    .map(num => {
                        return Number(num)
                    })
    
    return answer;
}