function solution(n, q, ans) {
   const nums = Array.from({length:n}, (_, i) => i + 1); 
   const allCombinations = combination(nums, 5);
    let answer = 0;
    
   for(let i = 0; i < allCombinations.length; i++) {
       const combi = allCombinations[i];
       let possible = true;
       
       for(let j = 0; j < q.length; j++) {
           let cnt = 0;
           
           for(let k = 0; k < combi.length; k++) {
               if(q[j].includes(combi[k])) {
                   cnt++
               }
           }
           
           if(cnt !== ans[j]) {
               possible = false;
               break;
           }
       }
       
       if(possible) {
           answer++
       }
   }
    
return answer;
    
}

function combination(arr, num) {
    const result = [];
    
    const dfs = (start, path) => {
        if(path.length === num) {
            result.push(path);
            return
        }
        for(let i = start; i < arr.length; i++) {
            dfs(i + 1, [...path, arr[i]])
        }
    }
    
    dfs(0, [])
    
    return result;
}