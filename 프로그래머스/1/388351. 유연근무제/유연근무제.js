function solution(schedules, timelogs, startday) {
    let answer = 0;
    
    for(let i = 0; i < schedules.length; i++) {
        const timelog = timelogs[i];
        const schedule = schedules[i]

        let success = true
        
        for(let dayIdx = 0; dayIdx < timelog.length; dayIdx++) {
            const timelogOfWeekday = timelog[dayIdx]
            const currentDay = (dayIdx + startday) % 7;
            if(currentDay === 0 || currentDay === 6) continue;
            
            if(timelogOfWeekday > getFormatHour(schedule)) {
                success = false
                break
            };
        }
        
        if(success) answer++
    }
    return answer;
}

function getFormatHour(time) {
   const hour = Math.floor(time / 100);
    const minute = time % 100;
    const totalMinutes = minute + 10;
    const newHour = hour + Math.floor(totalMinutes / 60); 
    const newMinute = totalMinutes % 60; 
    return newHour * 100 + newMinute; 
}

