function solution(s) {
    let answer = s.split(" ")
                    .map(word => {
                        return word.split("")
                            .map((letter, i) => {
                            return i%2 === 0
                                ? letter.toUpperCase()
                                : letter.toLowerCase()
                        }).join("")
                    }).join(" ")
   return answer

}