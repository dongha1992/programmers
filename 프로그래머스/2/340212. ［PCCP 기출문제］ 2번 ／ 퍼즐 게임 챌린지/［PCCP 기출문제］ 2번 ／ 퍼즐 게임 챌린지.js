function solution(diffs, times, limit) {
    // diff <= level time_cur 만큼 소요시간
    // diff > level 이면 diff - level 번 틀림 (1회당 time_cur + time_prev)
       // diff - level 틀린 후 time_cur 사용해서 품
    
    // 모두 해결하기 위한 숙련도(level)의 최소값
    
    let low = 0;
    let high = 100000;
    let answer = 0;
    
    while(low <= high) {
        const mid = Math.floor((low + high) / 2); // level;
        let total_time = 0;
        
        for(let i = 0; i < diffs.length; i++) {
            const time_cur = times[i];
            const time_prev = times[i-1];
            const diff = diffs[i];
            
            if(diff <= mid) {
                total_time += time_cur
            } else {
                total_time += diffIsGreaterThanLevel(diff, mid, time_cur, time_prev)
            }
            
            if(total_time >= limit) {
                break;
            } 
        }
        
       if(total_time <= limit) {
        // 성공했다면
        high = mid - 1
        answer = mid;
        } else {
         // 실패 → 숙련도 높여야 함
         low = mid + 1;
        }
    }
    
    return answer;
}

const diffIsGreaterThanLevel = (diff, level, time_cur, time_prev) => {
    const d = diff - level;
    return d * (time_cur + time_prev) + time_cur
}
