import java.util.*;


class Solution {
    int[][] info;
    int n;
    int m;
    int answer;
    Map<String, Boolean> visited = new HashMap<>();
        
    public int solution(int[][] info, int n, int m) {
        this.info = info;
        this.n = n;
        this.m = m;
        
        answer = -1;
        
        dfs(0, n, m);
        
        return answer < 0 ? -1 : n - answer;
    }
    
    void dfs(int idx, int aTrace, int bTrace) {
         if (aTrace <= 0 || bTrace <= 0) {
            return;
        }
        
        if (idx == info.length) { 
            answer = Math.max(answer, aTrace);
            return;
        }
        
        String key = idx + "," + aTrace + "," + bTrace;
        
         if (visited.containsKey(key)) {
            return;
        }
        
        visited.put(key, true);
        
        dfs(idx + 1, aTrace, bTrace - info[idx][1]);
        dfs(idx + 1, aTrace - info[idx][0], bTrace); 
    }
}