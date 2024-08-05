import java.util.ArrayList;
import java.util.List;

class Solution {
    int[] answers;
    
    public List<Integer> solution(int[] answers) {
        this.answers = answers;
        List<Integer> answer = new ArrayList<>();

        int[] s1 = new int[]{1, 2, 3, 4, 5};
        int[] s2 = new int[]{2, 1, 2, 3, 2, 4, 2, 5};
        int[] s3 = new int[]{3, 3, 1, 1, 2, 2, 4, 4 ,5, 5};
        int[][] sArr = new int[][]{s1, s2, s3};
        int max = 0;
        
        for(int i = 0; i < sArr.length; i++){
            int score = checkAnswer(sArr[i]);
            if(max < score){
                answer.clear();
                answer.add(i + 1);
                max = score;
            } else if (score == max) {
                answer.add(i + 1);
            }
        } 
        
        return answer;
    }
    
    public int checkAnswer(int[] arr){
        int cnt = 0;
        for(int i = 0; i < this.answers.length; i++){
            if(arr[i % arr.length] == this.answers[i]) cnt++;
        }
        return cnt;
    }
}