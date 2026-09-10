function solution(edges) {
    const MAX = 1000000;
    
    const inDegree = new Array(MAX + 1).fill(0);
    const outDegree = new Array(MAX + 1).fill(0);
    
    for(const [from, to] of edges) {   
        outDegree[from]++;
        inDegree[to]++;
    }

    // 생성 정점 찾기
    let created = 0;
    
    for(let i = 1; i <= MAX; i++) {
        if(inDegree[i] === 0 && outDegree[i] >= 2) {
            created = i;
            break;
        }
    }
    
    const total = outDegree[created];

    let bar = 0;
    let eight = 0;
    
      for (let i = 1; i <= MAX; i++) {
        if (i === created) continue;

        if (inDegree[i] > 0 && outDegree[i] === 0) {
            bar++;
        }

        if (inDegree[i] >= 2 && outDegree[i] >= 2) {
            eight++;
        }
    }

    // 나머지가 도넛
    const donut = total - bar - eight;

    return [created, donut, bar, eight];
}
