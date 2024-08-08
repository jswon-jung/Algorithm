function solution(id_list, report, k) {
    const reporter = {}; // 신고한 사람이 어떤 유저들을 신고했는지 저장
    
    report = [ ...new Set( report ) ];
    
    // 신고 당한 사람의 누적 신고량을 저장
    const users = report.reduce( (acc, cur) => {
        const info = cur.split(" ");
        
        // 신고한 사람이 어떤 사람들을 신고했는지를 저장할 수 있는 빈 배열을 생성
        if( !reporter[ info[0] ] ) reporter[ info[0] ] = [];
        // 신고 당한 사람이 몇번 신고 당했는지를 저장할 수 있는 초기값을 생성
        if( !acc[ info[1] ] ) acc[ info[1] ] = 0; 
 
        reporter[ info[0] ].push( info[1] );
        acc[ info[1] ]++;
        
        return acc;
    }, {});
    
    return id_list.map( id => {
        const arr = reporter[id] || [];
        return arr.reduce( (acc, cur) => {
            return acc + ( users[ cur ] >= k ? 1 : 0 )
        }, 0)
    } )
}