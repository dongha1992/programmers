function solution(points, routes) {
    const robotPaths = [];
    let answer = 0;
    
    for(let i = 0; i < routes.length; i++) {
        const path = [];
        const route = routes[i];

        let [r, c] = points[route[0] - 1];
        
        path.push([r, c]);
        
        // 이동
        for(let j = 1; j < route.length; j++) {
            const [targetR, targetC] = points[route[j] - 1];
            
            while(r !== targetR) {
                r += r < targetR ? 1 : -1
                path.push([r, c])
            }
            
            while(c !== targetC) {
                c += c < targetC ? 1 : -1;
                path.push([r, c]);
            }
        }
        robotPaths.push(path);        
    }
    
    let maxTime = Math.max(...robotPaths.map(path => path.length));
        
    for(let time = 0; time < maxTime; time++) {
        const positions = new Map();
        for (const path of robotPaths) { 
            
            if(!path[time]) continue;
            const [r, c] = path[time];
            const key = `${r},${c}`;

           positions.set(key, (positions.get(key) || 0) + 1);
        }
        
        for (const count of positions.values()) {
            if (count >= 2) {
                answer++;
            }
        }
      }
    return answer
}