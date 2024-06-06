import java.util.ArrayList;

class Solution {
    public int[] solution(int n) {
        ArrayList<Integer> answerList = new ArrayList<>();
        
        for(int i = 0; i <= n; i++){
            if(i % 2 != 0) answerList.add(i);
        }
        
        int[] answer = new int[answerList.size()];
        for(int i = 0; i < answerList.size(); i++){
            answer[i] = answerList.get(i);
        }    
        
        return answer;
    }
}