function solution(word) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    let found = false;
    let count = 0;
    
    const dfs = (current) => {
        if (found || current.length > 5) return;
        
        if (current !== '') {
            count++;
            if (current === word) {
                found = true;
                return;
            }
        }
        for (const v of vowels) {
            dfs(current + v);
            if (found) return;
        }
        
    }
    dfs("")
    return count
}