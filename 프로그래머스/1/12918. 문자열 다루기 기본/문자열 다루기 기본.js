function solution(s){
    
    if(s.length !== 4 && s.length !== 6) return false;
    
    const answer =s.split('')
                    .filter((num)=>{
                        return !isNaN(num)
                    })
    return s.length === answer.length 
}