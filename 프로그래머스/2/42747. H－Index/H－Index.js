function solution(citations) {
    const n = citations.length;
    citations.sort((a, b) => a - b);
    
    for(let i = 0; i < n; i++) {
        const c = citations[i]
        const h = n - i
        if(c >= h) return h
    }
    return 0
}











// function solution(citations) {
//     const totalPaper = citations.length;
//     citations.sort();
    
//     for(let i = 0; i < totalPaper; i++) {
//         const c = citations[i]
//         if(c > i+ 1) return c
//     }
    
// }





