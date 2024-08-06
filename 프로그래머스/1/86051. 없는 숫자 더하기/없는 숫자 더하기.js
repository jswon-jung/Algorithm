function solution(numbers) {
    const answer = new Array(9)
                    .fill(1)
                    .reduce((acc, cur, i)=>{
                        const num = cur + i;
                        return acc + (
                            numbers.includes(num)
                            ? 0
                            : num
                        )
                    }, 0)
    return answer
}