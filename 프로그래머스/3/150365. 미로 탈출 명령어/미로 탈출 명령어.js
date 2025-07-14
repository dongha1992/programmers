function solution(n, m, x, y, r, c, k) {
     const dirs = [
        [1, 0, 'd'],
        [0, -1, 'l'],
        [0, 1, 'r'],
        [-1, 0, 'u'],
    ];
    let answer = ""
    
    const dfs = (i, j, depth, path) => {
        const dist = Math.abs(i - r) + Math.abs(j - c)
        if(dist + depth > k || (k - dist - depth) % 2 !== 0) return
        if(answer) return
        if(depth === k) {
            if(i === r && j === c) {
                answer = path
            }
            return 
        }
        
        for(let d = 0; d < dirs.length; d++) {
            const [dx, dy, p] = dirs[d]
            const nx = dx + i
            const ny = dy + j
            
            if(isInBounds(nx, ny)) {
                dfs(nx, ny, depth+1, path + p)
            }
        }
    }
        
    function isInBounds(nx, ny) {
        return nx >= 1 && nx <= n && ny >= 1 && ny <= m;
    }
        
    dfs(x, y, 0, "")
    
    return answer || 'impossible'

}