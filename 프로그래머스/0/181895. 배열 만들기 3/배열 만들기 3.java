import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;

class Solution {
    public int[] solution(int[] arr, int[][] intervals) {
        List<Integer> result = new ArrayList<>();
        for(int[] interval : intervals){
          int[] slicedArr = Arrays.copyOfRange(arr, interval[0], interval[1] + 1);
            for(int sa : slicedArr){
                result.add(sa);
            }
        }
        
        int[] answer = new int[result.size()];
        for(int i = 0; i < result.size(); i++){
            answer[i] = result.get(i);
        }
        return answer;
    }
}