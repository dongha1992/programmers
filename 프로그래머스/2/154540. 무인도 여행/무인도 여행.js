function solution (maps) {
    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];
    const n = maps.length;
    const m = maps[0].length;
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    const answer = [];

    function dfs(x, y) {
        visited[x][y] = true;
        let count = Number(maps[x][y]);

        for (let k = 0; k < 4; k++) {
            const nx = x + dx[k];
            const ny = y + dy[k];

            if (nx >= 0 && nx < n && ny >= 0 && ny < m &&
                !visited[nx][ny] && maps[nx][ny] !== 'X') {
                count += dfs(nx, ny);
            }
        }

        return count;
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (!visited[i][j] && maps[i][j] !== 'X') {
                answer.push(dfs(i, j));
            }
        }
    }

    return answer.length ? answer.sort((a, b) => a - b) : [-1];
}




