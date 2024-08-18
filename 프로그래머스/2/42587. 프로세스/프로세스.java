import java.util.LinkedList; 
import java.util.Queue; 


class Solution {
    public int solution(int[] priorities, int location) {
        Queue<int[]> queue = new LinkedList<>(); 
        int answer = 0;
        
        for (int i = 0; i < priorities.length; i++) {
            queue.add(new int[]{priorities[i], i});
        }
        
        while(!queue.isEmpty()){
            int[] cur = queue.poll();
            int prior = cur[0];
            int index = cur[1];
            boolean hasMorePrior = false;
            
            for(int[] q : queue) {
                if(q[0] > prior) {
                    hasMorePrior = true;
                    break;
                }
            }
            
            if(hasMorePrior){
                queue.add(cur);
            } else {
                answer++;
                if(index == location) return answer;
            }
        }
        
        return answer;
    }
}