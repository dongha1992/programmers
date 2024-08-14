import java.util.HashMap;
import java.util.Map;
import java.util.LinkedList;
import java.util.ArrayList;
import java.util.List;
import java.util.Queue;

class Solution {
    public int solution(int n, int[][] edge) {
        Map<Integer, List<Integer>> graph = new HashMap<>();

        for(int[] e : edge) {
            int from = e[0];
            int to = e[1];
            graph.computeIfAbsent(from, k -> new ArrayList<>()).add(to);
            graph.computeIfAbsent(to, k -> new ArrayList<>()).add(from);
        }
        
        boolean[] visited = new boolean[n + 1];
        int[] weightArr = new int[n + 1];
        
        Queue<int[]> queue = new LinkedList<>();
        queue.add(new int[]{1, 0});
        
        visited[1] = true;
        
        int max = 0;
        
        while(!queue.isEmpty()){
            int[] e = queue.poll();
            
            if(e != null){
                int node = e[0];
                int w = e[1];
                
                weightArr[node] = w;
                
                if(w > max) {
                    max = w;
                }
                
                if(graph.containsKey(node)){
                    for(int neighbor : graph.get(node)){
                        if(!visited[neighbor]){
                            visited[neighbor] = true;
                            queue.add(new int[]{neighbor, w+1});
                        }
                    }
                }
            }
        }
        
        int answer = 0;
        for(int w : weightArr){
            if(w == max) answer++;
        }
        
        return answer;
    }
}