import java.util.List;
import java.util.ArrayList;

public class Solution {
    public int[] solution(int []arr) {
        List<Integer> numberList = new ArrayList<>();
        
        for(int i = 0; i < arr.length; i++){
            if (i + 1 >= arr.length) break;
            int cur = arr[i];
            int nxt = arr[i+1];
            
            if(cur != nxt) numberList.add(cur);
        }
        numberList.add(arr[arr.length-1]);
        
        int[] answer = new int[numberList.size()];
        
        for(int i = 0; i < numberList.size(); i++){
            answer[i] = numberList.get(i);
        }
        return answer;
    }
}