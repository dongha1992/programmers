function solution(weights) {
    const ratio = [1, 3/2, 2, 4/3]
    const map = new Map();
    let answer = 0;
    
    weights.sort((a, b) => b- a)
    
    for(let i = 0; i < weights.length; i++) {
        const weight = weights[i]
        
        for (let r of ratio) {
            const target = weight * r;
            if (map.has(target)) {
                answer += map.get(target);
            }
      }
        map.set(weight, (map.get(weight) || 0) + 1);
}
    return answer
}