function solution(n, q, ans) {
    const nums = Array.from({ length: n }, (_, i) => i + 1);
    const combinations = combination(nums, 5)
    let answer = 0;
    
    for (const comb of combinations) {
        let isValid = true;
        
        for(let i = 0; i < q.length; i++) {
            const input = q[i]
            const intersection = input.filter(it => comb.includes(it)).length;
            
            if (intersection !== ans[i]) {
                isValid = false;
                break;
            }
        }
        if(isValid) answer++
    }
        
    return answer
}

function combination(arr, num) {
  const result = [];

  function dfs(start, path) {
    if (path.length === num) {
      result.push(path);  
      return;
    }

    for (let i = start; i < arr.length; i++) {
      dfs(i + 1, [...path, arr[i]]);  
    }
  }

  dfs(0, []);
  return result;
}