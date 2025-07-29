function solution(players, m, k) {
    const server = []
    let count = 0;
    
    for(let i = 0; i < players.length; i++) {
        const n = server.reduce((acc, cur) => cur.count + acc, 0)
        const player = players[i];
        
        if(player >= (n + 1) * m) {
            const need = Math.floor((player / m)) - n  
            server.push({exit: i + k - 1, count: need})
            count += need
        }

        while(server[0] && server[0].exit === i) server.shift()
    }
    
    return count
}