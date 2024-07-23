function solution(nums) {
    let idx = 0; // 배열을 자르기 위한 인덱스 값
    
    // 1. 첫번째 숫자를 가져오는 과정
    return nums.reduce((acc, num1, i) => {
        idx = i+1;
        // 2. 두 번째 숫자를 가져오는 과정
        nums.slice( idx ).forEach(num2 => {
            // console.log(num1. num2);
            // idx++;
            // 3. 세 번째 숫자를 가져오는 과정
            nums.slice( ++idx ).forEach( num3 => {
                const sum = num1 + num2 + num3;
                
                let count = 0;
                
                if(sum % 2 === 1){ // 세개의 숫자의 합이 홀수인 경우만
                    for(let o=1; o<=sum; o++){
                    // console.log(sum, o, sum%o)
                    if(sum%o === 0){
                        count++;
                    }
                    
                    if(count > 2){
                        break;
                    }
                }
                console.log(sum, count)
                if( count === 2){
                    acc++
                }
                }
            })   
        })
        return acc;
    }, 0)
}