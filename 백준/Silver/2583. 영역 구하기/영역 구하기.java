import java.util.*;

public class Main {
    static int m, n, K;
    static int[][] board;
    static boolean[][] visited;
    static int[] dx = {0, 0, 1, -1}; 
    static int[] dy = {1, -1, 0, 0};
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        m = scanner.nextInt();
        n = scanner.nextInt();
        K = scanner.nextInt();
        
        board = new int[m][n];
        visited = new boolean[m][n];
        
        for(int i = 0; i < K; i++){
            int startX = scanner.nextInt();
            int startY = scanner.nextInt();
            int endX = scanner.nextInt();
            int endY = scanner.nextInt();
            
            for(int j = startY; j < endY; j++){
                for(int l = startX; l < endX; l++){
                    board[j][l] = 1;
                }
            }
        }
        
        List<Integer> answer = new ArrayList<>();
        
        for(int i = 0; i < m; i++){
            for(int j = 0; j < n; j++){
                if(board[i][j] == 0 && !visited[i][j]){
                    answer.add(dfs(i, j));
                }
            }
        }
        
        Collections.sort(answer);
        System.out.println(answer.size());
        for (int area : answer) {
           System.out.print(area + " ");
        }
    }
    
    private static int dfs(int x, int y) {
       visited[x][y] = true;
        int area = 1;
        
        for(int i = 0; i < 4; i++){
            int nx = x + dx[i];
            int ny = y + dy[i];
            
            if(nx >= 0 && ny >= 0 && nx < m && ny < n && board[nx][ny] == 0 && !visited[nx][ny]){
                area += dfs(nx, ny);
            }
        }
        return area;
    }
}
