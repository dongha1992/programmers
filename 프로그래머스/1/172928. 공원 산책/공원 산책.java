import java.util.HashMap;
import java.util.Map;


class Solution {
    public int[] solution(String[] park, String[] routes) {
        Map<String, int[]> direction = new HashMap<>();
        
        direction.put("E", new int[]{0, 1});
        direction.put("W", new int[]{0, -1});
        direction.put("S", new int[]{1, 0});
        direction.put("N", new int[]{-1, 0});
        
        int x = 0; 
        int y = 0;
        
        for(int i = 0; i < park.length; i++){
            for(int j = 0; j < park[0].length(); j++){
                if(park[i].charAt(j) == 'S'){
                    x = i;
                    y = j;
                }
            }
        }
        
        
  
        
        for(String route : routes){
            String[] splited = route.split(" ");
            String r = splited[0];
            int n = Integer.parseInt(splited[1]);
            
            int nx = x;
            int ny = y;
            
            int step = 0;
            
            while(step < n) {
                nx = nx + direction.get(r)[0];
                ny = ny + direction.get(r)[1];
                
                if(nx < 0 || nx >= park.length || ny < 0 || ny >= park[0].length() || park[nx].charAt(ny) == 'X') break;
                step++;        
            }
            
            if(step == n) {
                x = nx;
                y = ny;
            }
        }
    
      return new int[]{x, y};
    }
}