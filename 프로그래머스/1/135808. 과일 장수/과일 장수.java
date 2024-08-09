import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Collections;

class Solution {
    public int solution(int k, int m, int[] score) {
        List<Integer[]> result = new ArrayList<>();
        int answer = 0;
        
        Integer[] scoreArr = new Integer[score.length];
        
        for (int i = 0; i < score.length; i++) {
            scoreArr[i] = score[i]; 
        }

        Arrays.sort(scoreArr, Collections.reverseOrder());
        
        for(int i = 0; i < scoreArr.length; i += m) {
            if(i + m > scoreArr.length) break;
            Integer[] subArr = Arrays.copyOfRange(scoreArr, i, i + m);
            int min = (int) subArr[subArr.length - 1];
            
            answer += min * m;
        }

        return answer;
    }
}