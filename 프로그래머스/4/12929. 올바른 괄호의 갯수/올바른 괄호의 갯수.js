function solution(n) {    
    const dfs = (open, close) => {
        if(open === 0 && close === 0) return 1
        
        let count = 0;
        
        if(open > 0) {
         count += dfs(open - 1, close)   
        } 
        
        if(open < close) {
         count += dfs(open, close -1)   
        }
        return count
    }
    
    
    return dfs(n, n);
}