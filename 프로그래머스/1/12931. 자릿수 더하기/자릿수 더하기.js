function solution(n) {
    const answer = String(n)
                    .split('')
                    .reduce((acc, cur) =>{
                        return acc+Number(cur)
                    }, 0)
    return answer
}