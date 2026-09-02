import java.util.*;

class Solution {
    int n;
    int m;
    char[][] board;
    
    int dx[] = {0, 1, 0, -1};
    int dy[] = {-1, 0, 1, 0};
    
    int total;
    
    public int solution(String[] storage, String[] requests) {
        
        n = storage.length;
        m = storage[0].length();
        
        board = new char[n][m];
        
        for(int i = 0; i < n; i++) {
            board[i] = storage[i].toCharArray();
        }
        
        total = n * m;
        
        for(String request : requests) {
            if(request.length() == 1) {
                forkLift(request.charAt(0));
            } else {
                crane(request.charAt(0));
            }
        }
        return total;
    }
    
    void forkLift(char request) {
        
        boolean[][] visited = new boolean[n][m];
        List<int[]> pos = new ArrayList<>();
            
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (i == 0 || j == 0 ||
                    i == n - 1 || j == m - 1) {
                    dfs(i, j, visited, request, pos);
                }
            }
        }
        
        for(int[] p : pos) {
            int x = p[0];
            int y = p[1];
            
            if(board[x][y] == request) {
                board[x][y] = '\0';
                total--;
            }
        }
    }
    
    void crane(char request) {
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < m; j++) {
                if (board[i][j] == request) {
                    board[i][j] = '\0';
                    total--;
            }
         }
        }
    }
    
    void dfs(int x, int y, boolean[][] visited, char request, List<int[]> pos) {
        if(x < 0 || y < 0 || x >= n || y >= m || visited[x][y]) {
            return;
        }
        
        if (board[x][y] != request && board[x][y] != '\0') {
            return;
        }
        
        visited[x][y] = true;
        
        if (board[x][y] == request) {
            pos.add(new int[] {x, y});
            return;
        }
        
        for(int d = 0; d < 4; d++) {
            int nx = dx[d] + x;
            int ny = dy[d] + y;
            
            dfs(nx, ny, visited, request, pos);
        }
    }
}