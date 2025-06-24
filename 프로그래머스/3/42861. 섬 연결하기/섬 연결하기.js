function solution(n, costs) {
    const graph = Array.from({ length: n }, () => []);
    
    for(const [u, v, w] of costs) {
        graph[u].push({to: v, w})
        graph[v].push({to: u, w})
      }
    const visited = Array(n).fill(false);
    const minEdge = Array(n).fill(Infinity);
    const parent = Array(n).fill(-1);
    
    minEdge[0] = 0;
    let totalWeight = 0
    const mst = []
    
    for(let i = 0; i < n; i++) {
        let u = -1;
        for(let v = 0; v < n; v++) {
            if(!visited[v] && (u === -1 ||  minEdge[v] < minEdge[u])) {
                u = v
            }
        }
        
        if(minEdge[u] === Infinity) break;
        
        visited[u] = true;
        totalWeight += minEdge[u]
        
        if(parent[u] !== -1) {
         mst.push([parent[u], u, minEdge[u]])
        }
        
        for(const {to, w} of graph[u]) {
            if(!visited[to] && w < minEdge[to]) {
                minEdge[to] = w
                parent[to] = u;
            }
        }
    }
    
    return totalWeight 
    
}








