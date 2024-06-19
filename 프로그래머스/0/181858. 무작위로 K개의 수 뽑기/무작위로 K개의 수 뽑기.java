import java.util.HashSet;
import java.util.Set;
import java.util.ArrayList;
import java.util.List;

class Solution {
    public int[] solution(int[] arr, int k) {
        List<Integer> selectedNumberList = new ArrayList<>();
        
        for(int n : arr) {
            if(!selectedNumberList.contains(n)){
                selectedNumberList.add(n);
            }
            if(selectedNumberList.size() == k) break;
        }    
        
        while(selectedNumberList.size() < k){
            selectedNumberList.add(-1);
        }
        
        int[] answer = new int[k];
        for(int i = 0; i < selectedNumberList.size(); i++){
            answer[i] = selectedNumberList.get(i);
        }
        return answer;
    }
}