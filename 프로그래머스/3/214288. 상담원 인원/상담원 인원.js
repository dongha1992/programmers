function solution(k, n, reqs) {
    let minTotalWait = Infinity;
    const candidate = getPermutations(Array.from({length:n}, (_, i) => i + 1), n, k)
    
    const simulate = (mentors) => {
        let totalWait = 0;
        let requestsByType = Array.from({ length: k + 1 }, () => []);
        
        for (const [start, duration, type] of reqs) {
            requestsByType[type].push([start, duration]);
        }
        
         for (let typeNum = 1; typeNum <= k; typeNum++) {
             const mentorCount = mentors[typeNum - 1];
             const requests = requestsByType[typeNum];
             const mentor = new Array(mentorCount).fill(0);
             
             for (const [start, duration] of requests) {
                 let assigned = false;
                 
                 for (let i = 0; i < mentorCount; i++) {
                     if (mentor[i] <= start) {
                         mentor[i] = start + duration;
                         assigned = true;
                         break;
                     }
                 }
                 
                 if (!assigned) {
                     let minTime = Math.min(...mentor);
                     let canMentorIdx = mentor.indexOf(minTime);
                     totalWait += mentor[canMentorIdx] - start
                     mentor[canMentorIdx] += duration;
                 }
             }
         }
         return totalWait;
    }
    
     for (const mentors of candidate) {
        const wait = simulate(mentors);
        minTotalWait = Math.min(minTotalWait, wait);
     }
    
    return minTotalWait
}

function getPermutations(arr, n, k) {
    const result = []
    const visited = new Array(arr.length).fill(false);
    const sum = (list) => list.reduce((acc, cur) => acc + cur, 0)
    
    const dfs = (path) => {
        if(sum(path) > n) return
        if(path.length === k && sum(path) === n) {
            result.push(path);  
            return;
        }
        
        for(let i = 0; i < arr.length; i++) {
            if (n - k < i) continue;
            dfs([...path, arr[i]]);
        }    
    }
    
    dfs([]);
    
    
    return result
}