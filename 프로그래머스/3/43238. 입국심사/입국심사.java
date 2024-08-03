import java.util.Arrays;

class Solution {
    public long solution(int n, int[] times) {
        Arrays.sort(times);
        
        long answer = 0;
        long low = 1;
        long high = (long) n * times[times.length - 1];
        
        while(low <= high){
            long mid = (low + high) / 2;
            long coveredPassenger = 0;
            
            for(int i = 0; i < times.length; i++){
                coveredPassenger += Math.floor(mid / times[i]);
                if(coveredPassenger >= n) break;
            }
            
            if(coveredPassenger >= n){
                answer = mid;
                high = mid - 1;
            } else {
                low = mid + 1; 
            }
        }
            
        return answer;
        
        
    }
}