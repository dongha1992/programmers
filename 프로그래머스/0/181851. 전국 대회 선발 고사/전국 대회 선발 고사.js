function solution(rank, attendance) {
    let answer = 0;
    let cnt = 0
    const rankValues = [10000, 100, 1];

    const arr = rank.map((r, i) => [r, attendance[i], i]).sort((a, b) => a[0] - b[0])
    
    for(let i = 0; i < arr.length && cnt < 3; i++){
        if(arr[i][1]){
            answer += arr[i][2] * rankValues[cnt]
            cnt++
        }
    }
    return answer
}