import java.util.*;

public class Main {
     static int h, w;
     static char[][] board;
     static boolean[][] visited;
     static int[] dx = {0, 1, 0, -1};
     static int[] dy = {-1, 0, 1, 0};
 
     public static void main(String[] args) {
         Scanner sc = new Scanner(System.in);
         
         int t = sc.nextInt();
         
         sc.nextLine();
         
         for(int T = 0; T < t; T++){
             h = sc.nextInt();
             w = sc.nextInt();
             sc.nextLine(); 
             
             board = new char[h][w];
             visited = new boolean[h][w];
             
             for(int j = 0; j < h; j++){
                 board[j] = sc.nextLine().toCharArray();
             }
             
             int answer = 0;
         
             for(int i = 0; i < h; i++){
                for(int j = 0; j < w; j++){
                    if(board[i][j] == '#' && !visited[i][j]){
                        dfs(i, j);
                        answer++;
                    }
                }
              }
           System.out.println(answer);
             
         }
         sc.close();
     }
     
     private static void dfs(int x, int y){
         visited[x][y] = true;
         
         for(int i = 0; i < 4; i++){
            int nx = x + dx[i];
            int ny = y + dy[i];
         
            if(nx >= 0 && nx < h && ny >= 0 && ny < w && board[nx][ny] == '#' && !visited[nx][ny]){
               dfs(nx, ny);
            }   
         }
     }
 }
