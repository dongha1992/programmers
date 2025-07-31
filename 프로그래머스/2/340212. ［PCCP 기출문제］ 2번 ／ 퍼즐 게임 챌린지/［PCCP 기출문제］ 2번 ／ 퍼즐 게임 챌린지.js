function solution(diffs, times, limit) {
    let answer = 0;
    
    const getTotalTime = (level) => {
        let result = 0;
        
        for(let i = 0; i < diffs.length; i++) {
            const diff = diffs[i]
            const prevTime = i > 0 ? times[i - 1] : 0;
            
            if(diff <= level) {
                result += times[i]
            } else {
                const repeat = diff - level
                result += repeat * (prevTime+times[i]) + times[i]
            }
        }
        return result
    }
    
    let high = 100000
    let low = 1;
    
    while(low <= high) {
        const mid = Math.floor((high + low) / 2);
        const totalTime = getTotalTime(mid)
        
        if(totalTime <= limit) {
            answer = mid;
            high = mid -1
        } else {
            low = mid +1 
        }
    }
    return answer;
}

