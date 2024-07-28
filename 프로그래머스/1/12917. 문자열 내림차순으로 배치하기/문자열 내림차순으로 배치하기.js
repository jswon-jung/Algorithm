function solution(s){
    let answer = s.split("")
                    .sort((a, b)=>{
                        return a > b ? -1 : 1
                    }).join('')
    return answer
}