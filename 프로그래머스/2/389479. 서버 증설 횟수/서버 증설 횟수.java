import java.util.*;

class Solution {
    public int solution(int[] players, int m, int k) {
        int answer = 0;
        int count = 0;
        List<Server> server = new ArrayList<>();
        
        for(int i = 0; i < players.length; i++) {
            
            int n = 0;
            
            for (Server s : server) {
                n += s.count;
            }
        
            int player = players[i];
                
            if(player >= (n+1) * m) {
                int need = (player / m) - n;
                server.add(new Server(i + k - 1, need));
                count += need;
            }
            
            while(!server.isEmpty() && server.get(0).exit == i) {
                server.remove(0);
            }
            
        }
        
        return count;
    }
    
    static class Server {
        int exit;
        int count; 
        
        Server(int exit, int count) {
            this.exit = exit;
            this.count = count;
        }
    }
}